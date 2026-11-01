(() => {
  const bgmStart = document.querySelector('#bgm');
  const bgmGame = document.querySelector('#bgmGame');
  const toggle = document.querySelector('#soundToggle');
  const storageKey = 'regrowth-sound-enabled';
  const TARGET_VOLUME = 0.32;

  let enabled = localStorage.getItem(storageKey) !== 'false';
  let audioContext;
  let currentTarget = null;
  let fadeTimer = null;
  let awaitingGesture = false;
  let playbackFailed = false;
  let playAttempt = 0;
  let skipSceneCue = false;
  const samples = {
    start: 'assets/confirmation_002.wav',
    select: 'assets/click_001.wav',
    transition: 'assets/open_001.wav',
    danger: 'assets/error_001.wav'
  };
  const sfx = Object.fromEntries(Object.entries(samples).map(([name, src]) => {
    const audio = new Audio(src);
    audio.preload = 'auto';
    audio.volume = 0.35;
    return [name, audio];
  }));

  if (bgmStart) bgmStart.volume = TARGET_VOLUME;
  if (bgmGame) bgmGame.volume = 0;

  function getDesiredTrack() {
    const isStart = (typeof state !== 'undefined' && state && state.page === 'start') ||
                    Boolean(document.querySelector('.cover'));
    if (isStart) return 'start';
    const travel = typeof state !== 'undefined' && state &&
      ((state.page === 'transition' && [1, 4, 5, 6].includes(state.week)) ||
       (state.page.startsWith('travel_') && !state.page.startsWith('travel_arrest')));
    return travel ? 'travel' : 'game';
  }

  function getActiveAudio() {
    const desired = getDesiredTrack();
    return desired === 'start' ? bgmStart : (bgmGame || bgmStart);
  }

  function updateToggle() {
    toggle.textContent = !enabled
      ? '♫ Suara mati'
      : playbackFailed
        ? '♫ Suara bermasalah'
        : awaitingGesture
          ? '♫ Ketuk untuk suara'
          : '♫ Suara aktif';
    toggle.setAttribute('aria-pressed', String(enabled && !awaitingGesture && !playbackFailed));
    toggle.setAttribute('aria-label', !enabled || awaitingGesture || playbackFailed ? 'Nyalakan suara' : 'Matikan suara');
  }

  function dockToggle() {
    const screen = document.querySelector('.story-screen');
    if (screen && !screen.contains(toggle)) screen.append(toggle);
  }

  function playAudio(audio) {
    const attempt = ++playAttempt;
    const onPlaying = () => {
      if (attempt !== playAttempt || !enabled || audio !== getActiveAudio()) return;
      awaitingGesture = false;
      playbackFailed = false;
      updateToggle();
    };
    const onFailure = (error) => {
      if (attempt !== playAttempt || !enabled || audio !== getActiveAudio()) return;
      if (error && error.name === 'AbortError') return;
      awaitingGesture = Boolean(error && error.name === 'NotAllowedError');
      playbackFailed = !awaitingGesture;
      updateToggle();
    };
    try {
      const promise = audio.play();
      if (promise && typeof promise.then === 'function') promise.then(onPlaying).catch(onFailure);
      else onPlaying();
    } catch (error) { onFailure(error); }
  }

  function playSample(name) {
    if (!enabled) return;
    const audio = sfx[name];
    if (!audio) return;
    try {
      audio.currentTime = 0;
      const promise = audio.play();
      if (promise && typeof promise.catch === 'function') promise.catch(() => soundEffect(name === 'start' ? 'transition' : 'select'));
    } catch (_) { soundEffect(name === 'start' ? 'transition' : 'select'); }
  }

  function syncMusic(forcePlay = false) {
    const desired = getDesiredTrack();
    const activeAudio = desired === 'start' ? bgmStart : (bgmGame || bgmStart);
    const inactiveAudio = desired === 'start' ? bgmGame : bgmStart;

    if (!activeAudio) return;

    if (bgmGame && desired !== 'start') {
      const target = desired === 'travel' ? 'assets/cc0-travel-loop.mp3' : 'assets/strategic-pause.mp3';
      if (bgmGame.src !== new URL(target, window.location.href).href) {
        bgmGame.src = target;
        bgmGame.currentTime = 0;
      }
    }

    if (!bgmGame && bgmStart) {
      const targetSrc = desired === 'start' ? 'assets/ambitions-pulse.mp3' : 'assets/strategic-pause.mp3';
      const targetUrl = new URL(targetSrc, window.location.href).href;
      const currentUrl = bgmStart.src ? new URL(bgmStart.src, window.location.href).href : '';
      if (currentUrl !== targetUrl) {
        bgmStart.src = targetSrc;
        bgmStart.currentTime = 0;
      }
      if (enabled && (forcePlay || !bgmStart.paused || currentTarget !== desired)) {
        playAudio(bgmStart);
      }
      currentTarget = desired;
      return;
    }

    if (currentTarget === desired && !forcePlay) {
      if (enabled && activeAudio.paused) {
        playAudio(activeAudio);
      }
      return;
    }

    currentTarget = desired;

    if (fadeTimer) {
      clearInterval(fadeTimer);
      fadeTimer = null;
    }

    if (!enabled) {
      if (bgmStart) bgmStart.pause();
      if (bgmGame) bgmGame.pause();
      return;
    }

    const wasInactivePlaying = inactiveAudio && !inactiveAudio.paused;

    if (wasInactivePlaying) {
      activeAudio.volume = 0;
      activeAudio.currentTime = 0;
      playAudio(activeAudio);

      let step = 0;
      const steps = 10;
      fadeTimer = setInterval(() => {
        step++;
        const progress = step / steps;
        if (inactiveAudio) {
          inactiveAudio.volume = Math.max(0, TARGET_VOLUME * (1 - progress));
        }
        activeAudio.volume = Math.min(TARGET_VOLUME, TARGET_VOLUME * progress);

        if (step >= steps) {
          clearInterval(fadeTimer);
          fadeTimer = null;
          if (inactiveAudio) {
            inactiveAudio.pause();
            inactiveAudio.currentTime = 0;
          }
          activeAudio.volume = TARGET_VOLUME;
        }
      }, 30);
    } else {
      if (inactiveAudio) {
        inactiveAudio.pause();
        inactiveAudio.currentTime = 0;
      }
      activeAudio.volume = TARGET_VOLUME;
      playAudio(activeAudio);
    }
  }

  function startMusic() {
    syncMusic(true);
  }

  function pauseAll() {
    if (fadeTimer) {
      clearInterval(fadeTimer);
      fadeTimer = null;
    }
    ++playAttempt;
    if (bgmStart) bgmStart.pause();
    if (bgmGame) bgmGame.pause();
    Object.values(sfx).forEach(audio => { audio.pause(); audio.currentTime = 0; });
  }

  function soundEffect(type) {
    if (!enabled) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const isTransition = type === 'transition';
    const isDialogue = type === 'dialogue';
    oscillator.type = isTransition || isDialogue ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(isTransition ? 440 : isDialogue ? 740 : 620, now);
    if (isTransition) oscillator.frequency.exponentialRampToValueAtTime(740, now + 0.16);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(isDialogue ? 0.025 : isTransition ? 0.055 : 0.035, now + (isDialogue ? 0.055 : 0.012));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (isDialogue ? 0.42 : isTransition ? 0.19 : 0.075));
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + (isDialogue ? 0.43 : isTransition ? 0.2 : 0.08));
  }

  function sceneEffect() {
    if (!enabled || typeof state === 'undefined' || state.page === 'start') return;
    if (skipSceneCue) { skipSceneCue = false; return; }
    const page = state.page;
    const isAngryReaction = page === 'reaction' && state.reactions && state.reactions[0] && state.reactions[0].sprite === 'finance-angry';
    if (page === 'fire' || page === 'bad_ending_fire' || page.startsWith('travel_arrest') || isAngryReaction) {
      playSample('danger');
    } else if (page === 'transition' || page === 'travel_mrt' || page === 'travel_demo' || page === 'welcome') {
      playSample('transition');
    } else if (page === 'result') {
      playSample('start');
    }
  }

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    if (enabled && (awaitingGesture || playbackFailed)) {
      startMusic();
      return;
    }
    enabled = !enabled;
    localStorage.setItem(storageKey, String(enabled));
    if (enabled) {
      startMusic();
    } else {
      pauseAll();
    }
    updateToggle();
  });

  function handleInteraction(event) {
    if (!event || !event.target || typeof event.target.closest !== 'function') return;
    if (event.target === toggle || toggle.contains(event.target)) return;
    // Do not start cover music on pointerdown if the user is clicking "Mulai cerita" (#start),
    // because its click handler immediately transitions to the game track.
    if (event.type !== 'click' && event.target.closest('#start')) return;
    if (enabled) {
      const active = getActiveAudio();
      if (active && active.paused) {
        startMusic();
      }
    }
  }

  document.addEventListener('click', (event) => {
    if (!event.target || typeof event.target.closest !== 'function') return;
    const button = event.target.closest('button');
    if (!button || button === toggle) return;
    if (button.id === 'start' && enabled) {
      skipSceneCue = true;
      playSample('start');
    } else if (button.matches('.story-choice') || button.id === 'restart') {
      playSample('select');
    }
  }, true);

  document.addEventListener('click', handleInteraction);
  document.addEventListener('pointerdown', handleInteraction);
  document.addEventListener('touchstart', handleInteraction, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (enabled && (awaitingGesture || playbackFailed)) {
      const active = getActiveAudio();
      if (active && active.paused) startMusic();
    }
  });

  window.addEventListener('regrowth:scene', () => {
    dockToggle();
    syncMusic();
    sceneEffect();
  });

  window.addEventListener('regrowth:dialogue', () => soundEffect('dialogue'));

  updateToggle();
  dockToggle();
  syncMusic();
})();

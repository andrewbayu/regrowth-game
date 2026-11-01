(() => {
  const bgmStart = document.querySelector('#bgm');
  const bgmGame = document.querySelector('#bgmGame');
  const bgmTravel = document.querySelector('#bgmTravel');
  const toggle = document.querySelector('#soundToggle');
  const storageKey = 'regrowth-sound-enabled';
  const TARGET_VOLUME = 0.28;

  const tracks = {
    start: bgmStart,
    game: bgmGame || bgmStart,
    travel: bgmTravel || bgmGame || bgmStart
  };

  let enabled = localStorage.getItem(storageKey) !== 'false';
  let audioContext;
  let currentTarget = null;
  let fadeTimer = null;
  let sceneCueTimer = null;
  let awaitingGesture = false;
  let playbackFailed = false;
  let playAttempt = 0;
  let skipSceneCue = false;
  let lastClickTime = 0;

  const samples = {
    start: { src: 'assets/confirmation_002.wav?v=5', volume: 0.85 },
    select: { src: 'assets/click_001.wav?v=5', volume: 0.75 },
    transition: { src: 'assets/open_001.wav?v=5', volume: 0.78 },
    danger: { src: 'assets/error_001.wav?v=5', volume: 0.82 }
  };

  const sfx = Object.fromEntries(Object.entries(samples).map(([name, cfg]) => {
    const audio = new Audio(cfg.src);
    audio.preload = 'auto';
    audio.volume = cfg.volume;
    return [name, audio];
  }));

  Object.values(tracks).forEach(audio => {
    if (audio) audio.volume = 0;
  });
  if (bgmStart) bgmStart.volume = TARGET_VOLUME;

  function safeRewind(audio) {
    if (!audio) return;
    try {
      if (audio.readyState > 0) audio.currentTime = 0;
    } catch (_) {}
  }

  function getDesiredTrack() {
    const isStart = (typeof state !== 'undefined' && state && state.page === 'start') ||
                    Boolean(document.querySelector('.cover'));
    if (isStart) return 'start';

    if (typeof state !== 'undefined' && state) {
      const page = state.page;
      // Victory endings play the upbeat anthem
      if (page === 'result' && typeof determineEnding === 'function') {
        const ending = determineEnding();
        if (ending && (ending.type === 'perfect' || ending.type === 'brazil')) {
          return 'start';
        }
      }
      // Action, travel, espionage, favela, tech expo, and fire crisis scenes play the upbeat/action loop
      const isTravelTransition = page === 'transition' && [1, 4, 5, 6, 7].includes(state.week);
      const isTravelScene = page.startsWith('travel_') && !page.startsWith('travel_arrest');
      const isFireCrisis = page === 'smoke' || page === 'fire';
      const isActionWeek = page === 'game' && [1, 4, 6].includes(state.week);
      if (isTravelTransition || isTravelScene || isFireCrisis || isActionWeek) {
        return 'travel';
      }
    }
    return 'game';
  }

  function getActiveAudio() {
    const desired = getDesiredTrack();
    return tracks[desired] || bgmGame || bgmStart;
  }

  function updateToggle() {
    if (!toggle) return;
    const stateLabel = !enabled
      ? 'muted'
      : playbackFailed
        ? 'error'
        : awaitingGesture
          ? 'awaiting'
          : 'active';
    toggle.dataset.state = stateLabel;
    toggle.textContent = !enabled
      ? '♫ Suara mati'
      : playbackFailed
        ? '♫ Ketuk untuk suara'
        : awaitingGesture
          ? '♫ Ketuk untuk suara'
          : '♫ Suara aktif';
    toggle.setAttribute('aria-pressed', String(enabled && !awaitingGesture && !playbackFailed));
    toggle.setAttribute('aria-label', !enabled || awaitingGesture || playbackFailed ? 'Nyalakan suara' : 'Matikan suara');
  }

  function dockToggle() {
    const screen = document.querySelector('.story-screen');
    if (screen && toggle && !screen.contains(toggle)) screen.append(toggle);
  }

  function playAudio(audio) {
    if (!audio) return;
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
      if (promise && typeof promise.then === 'function') {
        promise.then(onPlaying).catch(onFailure);
      } else {
        onPlaying();
      }
    } catch (error) {
      onFailure(error);
    }
  }

  function playSample(name) {
    if (!enabled) return;
    const base = sfx[name];
    const cfg = samples[name];
    if (!base || !cfg) {
      soundEffect(name);
      return;
    }
    try {
      // If the sample is already mid-play, clone it so overlapping SFX don't cut each other off
      const target = (!base.paused && base.currentTime > 0.02) ? base.cloneNode() : base;
      target.volume = cfg.volume;
      if (target === base) safeRewind(target);
      const promise = target.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => soundEffect(name));
      }
    } catch (_) {
      soundEffect(name);
    }
  }

  function syncMusic(forcePlay = false) {
    const desired = getDesiredTrack();
    const activeAudio = tracks[desired] || bgmGame || bgmStart;
    if (!activeAudio) return;

    const otherAudios = Object.values(tracks).filter(a => a && a !== activeAudio);

    if (currentTarget === desired && !forcePlay) {
      if (enabled && activeAudio.paused) {
        activeAudio.volume = TARGET_VOLUME;
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
      Object.values(tracks).forEach(a => { if (a) a.pause(); });
      return;
    }

    const playingOthers = otherAudios.filter(a => !a.paused);

    if (playingOthers.length > 0) {
      activeAudio.volume = 0;
      safeRewind(activeAudio);
      playAudio(activeAudio);

      let step = 0;
      const steps = 10;
      fadeTimer = setInterval(() => {
        step++;
        const progress = step / steps;
        playingOthers.forEach(inactive => {
          inactive.volume = Math.max(0, TARGET_VOLUME * (1 - progress));
        });
        activeAudio.volume = Math.min(TARGET_VOLUME, TARGET_VOLUME * progress);

        if (step >= steps) {
          clearInterval(fadeTimer);
          fadeTimer = null;
          otherAudios.forEach(inactive => {
            inactive.pause();
            safeRewind(inactive);
          });
          activeAudio.volume = TARGET_VOLUME;
        }
      }, 30);
    } else {
      otherAudios.forEach(inactive => {
        inactive.pause();
        safeRewind(inactive);
      });
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
    if (sceneCueTimer) {
      clearTimeout(sceneCueTimer);
      sceneCueTimer = null;
    }
    ++playAttempt;
    Object.values(tracks).forEach(a => { if (a) a.pause(); });
    Object.values(sfx).forEach(audio => {
      audio.pause();
      safeRewind(audio);
    });
  }

  function soundEffect(type) {
    if (!enabled) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});

    const now = audioContext.currentTime;

    if (type === 'start') {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const start = now + idx * 0.08;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.09, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
        osc.connect(gain).connect(audioContext.destination);
        osc.start(start);
        osc.stop(start + 0.29);
      });
      return;
    }

    if (type === 'danger') {
      [260, 196].forEach((freq, idx) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const start = now + idx * 0.16;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, start);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.78, start + 0.15);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.08, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.17);
        osc.connect(gain).connect(audioContext.destination);
        osc.start(start);
        osc.stop(start + 0.18);
      });
      return;
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const isTransition = type === 'transition';
    const isDialogue = type === 'dialogue';
    oscillator.type = isTransition || isDialogue ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(isTransition ? 440 : isDialogue ? 680 : 620, now);
    if (isTransition) oscillator.frequency.exponentialRampToValueAtTime(740, now + 0.16);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(isDialogue ? 0.022 : isTransition ? 0.07 : 0.06, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (isDialogue ? 0.06 : isTransition ? 0.22 : 0.1));
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + (isDialogue ? 0.065 : isTransition ? 0.23 : 0.11));
  }

  function triggerSceneCue() {
    if (!enabled || typeof state === 'undefined' || state.page === 'start') return;
    const page = state.page;

    if (page === 'smoke' || page === 'fire' || page === 'bad_ending_fire' || page.startsWith('travel_arrest')) {
      playSample('danger');
      return;
    }

    if (page === 'starling') {
      playSample('start');
      return;
    }

    if (page === 'reaction' && state.reactions && state.reactions[0]) {
      const rx = state.reactions[0];
      const isNegative = (rx.sprite && rx.sprite.includes('angry')) ||
                         (state.week === 3 && state.route === 2) ||
                         (state.week === 5 && state.route === 1);
      playSample(isNegative ? 'danger' : 'transition');
      return;
    }

    if (page === 'result') {
      const ending = typeof determineEnding === 'function' ? determineEnding() : null;
      const isGood = ending && (ending.type === 'perfect' || ending.type === 'brazil');
      playSample(isGood ? 'start' : 'danger');
      return;
    }

    if (page === 'arrival' || page === 'welcome' || page === 'transition' || page.startsWith('travel_')) {
      playSample('transition');
    }
  }

  function sceneEffect() {
    if (!enabled || typeof state === 'undefined' || state.page === 'start') return;
    if (skipSceneCue) {
      skipSceneCue = false;
      return;
    }
    if (sceneCueTimer) {
      clearTimeout(sceneCueTimer);
      sceneCueTimer = null;
    }
    // If a button click SFX just fired, offset the scene cue by 95ms so both sounds are clearly heard
    const elapsed = Date.now() - lastClickTime;
    if (elapsed < 80) {
      sceneCueTimer = setTimeout(triggerSceneCue, 95);
    } else {
      triggerSceneCue();
    }
  }

  if (toggle) {
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      if (enabled && (awaitingGesture || playbackFailed)) {
        startMusic();
        playSample('select');
        return;
      }
      enabled = !enabled;
      localStorage.setItem(storageKey, String(enabled));
      if (enabled) {
        startMusic();
        playSample('select');
      } else {
        pauseAll();
      }
      updateToggle();
    });
  }

  function handleInteraction(event) {
    if (!event || !event.target || typeof event.target.closest !== 'function') return;
    if (toggle && (event.target === toggle || toggle.contains(event.target))) return;
    // Do not start cover music on pointerdown/touchstart if clicking #start,
    // because #start's click handler transitions immediately to the game track.
    if (event.type !== 'click' && event.target.closest('#start')) return;
    if (enabled && (awaitingGesture || playbackFailed)) {
      const active = getActiveAudio();
      if (active && active.paused) {
        startMusic();
      }
    }
  }

  document.addEventListener('click', (event) => {
    if (!event.target || typeof event.target.closest !== 'function') return;
    const clickable = event.target.closest('button, summary');
    if (!clickable || clickable === toggle) return;
    lastClickTime = Date.now();
    if (clickable.id === 'start' && enabled) {
      skipSceneCue = true;
      playSample('start');
    } else {
      playSample('select');
    }
  }, true);

  document.addEventListener('click', handleInteraction);
  document.addEventListener('pointerdown', handleInteraction);
  document.addEventListener('touchstart', handleInteraction, { passive: true });
  document.addEventListener('keydown', () => {
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

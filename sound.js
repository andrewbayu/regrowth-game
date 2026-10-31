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

  if (bgmStart) bgmStart.volume = TARGET_VOLUME;
  if (bgmGame) bgmGame.volume = 0;

  function getDesiredTrack() {
    const isStart = (typeof state !== 'undefined' && state && state.page === 'start') ||
                    Boolean(document.querySelector('.cover'));
    return isStart ? 'start' : 'game';
  }

  function getActiveAudio() {
    const desired = getDesiredTrack();
    return desired === 'start' ? bgmStart : (bgmGame || bgmStart);
  }

  function updateToggle() {
    toggle.textContent = enabled ? 'Suara aktif' : 'Suara mati';
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.setAttribute('aria-label', enabled ? 'Matikan suara' : 'Nyalakan suara');
  }

  function dockToggle() {
    const screen = document.querySelector('.story-screen');
    if (screen && !screen.contains(toggle)) screen.append(toggle);
  }

  function syncMusic(forcePlay = false) {
    const desired = getDesiredTrack();
    const activeAudio = desired === 'start' ? bgmStart : (bgmGame || bgmStart);
    const inactiveAudio = desired === 'start' ? bgmGame : bgmStart;

    if (!activeAudio) return;

    if (!bgmGame && bgmStart) {
      const targetSrc = desired === 'start' ? 'assets/ambitions-pulse.mp3' : 'assets/strategic-pause.mp3';
      const targetUrl = new URL(targetSrc, window.location.href).href;
      const currentUrl = bgmStart.src ? new URL(bgmStart.src, window.location.href).href : '';
      if (currentUrl !== targetUrl) {
        bgmStart.src = targetSrc;
        bgmStart.currentTime = 0;
      }
      if (enabled && (forcePlay || !bgmStart.paused || currentTarget !== desired)) {
        bgmStart.play().catch(() => {});
      }
      currentTarget = desired;
      return;
    }

    if (currentTarget === desired && !forcePlay) {
      if (enabled && activeAudio.paused) {
        activeAudio.play().catch(() => {});
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
      activeAudio.play().catch(() => {});

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
      activeAudio.play().catch(() => {});
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
    if (bgmStart) bgmStart.pause();
    if (bgmGame) bgmGame.pause();
  }

  function soundEffect(type) {
    if (!enabled) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass();
    if (audioContext.state === 'suspended') audioContext.resume();
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
    oscillator.stop(now + (isTransition ? 0.2 : 0.08));
  }

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
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
    if (event.target === toggle || toggle.contains(event.target)) return;
    if (enabled) {
      const active = getActiveAudio();
      if (active && active.paused) {
        startMusic();
      }
    }
    const button = event.target.closest('button');
    if (button && button !== toggle && button.matches('.story-choice')) {
      soundEffect('select');
    }
  }

  document.addEventListener('click', handleInteraction);
  document.addEventListener('pointerdown', (event) => {
    if (event.target === toggle || toggle.contains(event.target)) return;
    if (enabled) {
      const active = getActiveAudio();
      if (active && active.paused) {
        startMusic();
      }
    }
  });

  window.addEventListener('regrowth:scene', () => {
    dockToggle();
    syncMusic();
    if (!document.querySelector('.dialogue')) soundEffect('transition');
  });

  window.addEventListener('regrowth:dialogue', () => soundEffect('dialogue'));

  updateToggle();
  dockToggle();
  syncMusic();
})();

import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Phaser from 'phaser';
import { Menu, Map, Level, Victory, Album } from './game/scenes.js';
import './style.css';

function App() {
  const mount = useRef(null);
  const game = useRef(null);
  const [voice, setVoice] = useState(true);
  const voiceEnabled = useRef(voice);
  voiceEnabled.current = voice;

  useEffect(() => {
    const speak = event => {
      if (!voiceEnabled.current || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(event.detail);
      utterance.lang = 'es-SV';
      utterance.rate = 0.86;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    };
    window.addEventListener('valle:speak', speak);
    let audioContext;
    const playSound = event => {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioContext ||= new AudioContextClass();
        if (audioContext.state === 'suspended') audioContext.resume();
        const type = event.detail;
        const notes = type === 'win' ? [523,659,784,1046] : type === 'star' ? [523,784,1046] : [type === 'error' ? 220 : type === 'good' ? 659 : 440];
        notes.forEach((frequency, index) => {
          const oscillator = audioContext.createOscillator();
          const volume = audioContext.createGain();
          const start = audioContext.currentTime + index * 0.11;
          oscillator.type = type === 'error' ? 'triangle' : 'sine';
          oscillator.frequency.setValueAtTime(frequency,start);
          volume.gain.setValueAtTime(0.0001,start);
          volume.gain.exponentialRampToValueAtTime(0.07,start+0.015);
          volume.gain.exponentialRampToValueAtTime(0.0001,start+0.2);
          oscillator.connect(volume);
          volume.connect(audioContext.destination);
          oscillator.start(start);
          oscillator.stop(start+0.21);
        });
      } catch { /* Audio no disponible en este navegador */ }
    };
    window.addEventListener('valle:sound', playSound);
    game.current = new Phaser.Game({
      type: Phaser.AUTO,
      parent: mount.current,
      width: 960,
      height: 600,
      backgroundColor: '#c8eee0',
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
      input: { activePointers: 3 },
      scene: [Menu, Map, Level, Victory, Album]
    });
    return () => {
      window.removeEventListener('valle:speak', speak);
      window.removeEventListener('valle:sound', playSound);
      audioContext?.close();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      game.current?.destroy(true);
      game.current = null;
    };
  }, []);

  return <main className="shell">
    <header><strong>🌙 Guardianes del Valle Dormilón</strong>
      <button type="button" aria-pressed={voice} onClick={() => {
        setVoice(v => !v);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      }}>{voice ? '🔊 Voz activada' : '🔇 Voz desactivada'}</button>
    </header>
    <div className="game" ref={mount} aria-label="Juego interactivo Guardianes del Valle Dormilón" />
    <footer>Un juego para aprender a cuidarnos, jugar y descansar 💙</footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);

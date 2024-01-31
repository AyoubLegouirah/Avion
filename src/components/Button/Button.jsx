// Button.jsx
import React, { useEffect, useCallback, useRef } from 'react';
import './Button.css';
import 'typeface-anton';

export function useButtonEffect(enabled = true) {
  const buttonsRef = useRef([]);

  const handlePointerMove = useCallback((event) => {
    const { target, clientX, clientY } = event;
    const bounds = target.getBoundingClientRect();

    // Mettez à jour le style du bouton uniquement si enabled est true
    if (enabled) {
      target.style.setProperty('--x', clientX - bounds.left);
      target.style.setProperty('--y', clientY - bounds.top);
    }
  }, [enabled]);

  useEffect(() => {
    buttonsRef.current = document.querySelectorAll('button');

    buttonsRef.current.forEach((button) => {
      button.addEventListener('pointermove', handlePointerMove);

      return () => {
        button.removeEventListener('pointermove', handlePointerMove);
      };
    });
  }, [handlePointerMove, enabled]);

  return enabled;
}

export default function Button({ buttonText, onClick, enableEffect = true }) {
  const enabled = useButtonEffect(enableEffect);

  return (
    <button
      onClick={onClick}
      className='uppercase'
      style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.25rem' }}
    >
      <span className={`back ${enabled ? 'with-effect' : ''}`}>
        <span></span>
      </span>
      {buttonText}
    </button>
  );
}


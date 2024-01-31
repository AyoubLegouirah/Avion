import { useEffect, useCallback, useRef } from 'react';

export function useButtonEffect(enabled = true) {
    const buttonsRef = useRef([]);
  
    const handlePointerMove = useCallback((event) => {
      const { target, clientX, clientY } = event;
      const bounds = target.getBoundingClientRect();
  

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

  

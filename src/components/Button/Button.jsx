// Button.jsx
import './Button.css';
import 'typeface-anton';
import { useButtonEffect } from '../../hooks/useButtonEffect';

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


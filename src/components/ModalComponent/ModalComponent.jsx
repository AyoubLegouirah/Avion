import React from 'react';
import './ModalComponent.css'
import 'typeface-nunito-sans';
import 'typeface-anton';
import 'typeface-orbitron';
import Button from '../Button/Button';

function ModalComponent({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay fixed inset-0 w-full h-full bg-black bg-opacity-75 flex">
      <div className="modal-content p-8 rounded-lg text-center mx-auto animate-slide-down" style={{ top: '60%' }}>
        <h2 className="text-2xl font-bold mb-8 text-white uppercase" style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.25rem' }}>Informations</h2>
        <p className="text-base md:text-lg lg:text-xl text-white leading-normal">
          Vivez l'exceptionnel avec Maverick. Nos pilotes expérimentés vous guident dans une aventure aérienne personnalisée et sécurisée. Notre processus de réservation simple garantit une expérience sans souci. Choisissez Maverick pour une immersion professionnelle et personnalisée dans les cieux.
        </p>
        <div className="mt-4 flex justify-center text-white">
          <Button buttonText="Fermer" onClick={onClose} />
        </div>
      </div>
    </div>

  );
}

export default ModalComponent;


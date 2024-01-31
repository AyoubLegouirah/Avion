// Tarif.js
import React, { useState } from 'react';
import './Tarif.css';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { Link } from 'react-router-dom';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faInfo } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer';

export default function Tarif() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleVideoEnd = () => {
    // Redémarrez la vidéo
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div>
    <div className="video-background2">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-center pb-20">
        <div className="font-eb-garamond ">
          <a href="#">
            <img
              src="/image/Logo1er.png"
              alt="Logo Maverick"
              className="mx-auto mt-1 w-16 md:w-24 lg:w-24"
            />
          </a>
        </div>
      </div>
      <HamburgerMenu />
      <video
        autoPlay
        muted
        loop
        controls={false}
        onEnded={handleVideoEnd} 
        className="w-full h-full object-cover"
      >
        <source src="/video/f_22.mp4" type="video/mp4" />
      </video>
      <div className="tarif-container">

        <h1 className="tarif-title" style={{ fontFamily: 'Anton, sans-serif' }}>Tarifs de location</h1>

        <div className="tarif-card basic">
          <h2 className="tarif-card-title">Tarif Basic</h2>
          <p className="tarif-card-description">Profitez de la sensation de piloter un avion de chasse avec notre offre de base.</p>

          <div className="tarif-details">
            <div className="tarif-info">
              <p className="tarif-feature">Testez 1 seul avion</p>
              <p className="tarif-subtext">Séance d'essai unique</p>
            </div>
            <p className="tarif-price">$99</p>
          </div>
        </div>


        <div className="tarif-card premium">
          <h2 className="tarif-card-title">Tarif Premium</h2>
          <p className="tarif-card-description">Optez pour l'expérience ultime avec notre offre Premium.</p>

          <div className="tarif-details">
            <div className="tarif-info">
              <p className="tarif-feature">Testez plusieurs avions</p>
              <p className="tarif-subtext">Accès à une variété d'avions de chasse</p>
            </div>
            <p className="tarif-price">$199</p>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-0 text-right pr-4">
        <div className="mb-3">
          <Link to="/booknow" className="text-white uppercase" style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.25rem' }}>Book Now</Link>
        </div>
      </div>
      <div
        className="absolute bottom-6 left-0 p-4 mt-8 cursor-pointer"
        onClick={openModal}
      >
        <div className="rounded-full border-4 border-white p-2">
          <FontAwesomeIcon icon={faInfo} className="text-white text-2xl" />
        </div>

      </div>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    
    </div>
    <Footer />
  </div>
  );
}

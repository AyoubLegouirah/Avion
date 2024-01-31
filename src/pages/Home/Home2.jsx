import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faInfo } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import Button from '../../components/Button/Button';
import 'typeface-anton';
import 'typeface-orbitron';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Home.css';


library.add(faCircle, faInfo);

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleHoverEffect = (target) => {
    console.log(`Hovered over ${target}`);
  };
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (

    <div className="app relative">
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          controls={false}
          onEnded={handleVideoEnd}         
          className="w-full h-full object-cover"
        >
          <source src="/video/pilote.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-center">
          <div className="font-eb-garamond">
            <a href="#">
              <img
                src="/image/Logo1er.png"
                alt="Logo Maverick"
                className="mx-auto mt-1 w-16 md:w-24 lg:w-24"
              />
            </a>
          </div>
        </div>
        <div className='block' >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Pilotez avec nos experts en voltige. Réservez votre expérience de chasse aérienne maintenant.
            </h1>
            <Link to="/booknow">
              <Button buttonText="Book Now" />
            </Link>
          </div>
        </div>


        {/* Pagination */}
        <div className="horizontal-bars absolute left-1/2 transform -translate-x-1/2 flex space-x-4 mt-4 bottom-4">
          <Link to="/" className="horizontal-bar" onMouseEnter={() => handleHoverEffect('home')}>
            <div className="horizontal-bar-line"></div>
          </Link>
          <Link to="/home2" className="horizontal-bar" onMouseEnter={() => handleHoverEffect('home2')}>
            <div className="horizontal-bar-line"></div>
          </Link>
        </div>
        {/* Pagination */}
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

        <div className="absolute top-5 right-0 text-right pr-4">
          <div className="mb-3">
            <Link to="/booknow" className="text-white uppercase" style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.25rem' }}>Book Now</Link>
          </div>
        </div>
        <HamburgerMenu />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


export default function A_propos() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900'>
        <div className="absolute top-5 right-0 text-right pr-4">
          <div className="mb-3">
            <Link to="/booknow" className="text-white uppercase" style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.25rem' }}>Book Now</Link>
          </div>
        </div>
      <HamburgerMenu />
      <div className="text-center">
        <div className="font-eb-garamond">
          <a href="#">
            <img
              src="/image/Logo1er.png"
              alt="Logo Maverick"
              className="mx-auto mt-1 w-16 md:w-24 lg:w-24 "
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center md:flex-row md:items-start md:justify-center ">
        <div className="text-center ">
        <h1 className="font-bold mb-8 mt-12 text-3xl text-center">À Propos de Nous</h1>
          <p className="mb-8 text-2xl text-left ">
            Bienvenue sur Maverick, votre destination ultime pour une expérience aérienne unique.
          </p>
          <p className="mb-8 text-2xl text-left">
            Chez Maverick, nous offrons la possibilité de réserver des vols en avion de chasse accompagnés de pilotes de chasse hautement qualifiés et expérimentés.
          </p>
          <p className="mb-8 text-2xl text-left">
            Notre mission est de vous fournir une aventure aérienne inoubliable, alliant la puissance des avions de chasse à l'expertise de nos pilotes chevronnés.
          </p>
          <p className="mb-8 text-2xl text-left">
            Que vous soyez passionné d'aviation ou que vous recherchiez une expérience sensationnelle, Maverick est l'endroit idéal pour réaliser vos rêves de vol.
          </p>
          <p className="mb-8 text-2xl text-left">
            Contactez-nous dès aujourd'hui pour réserver votre session de vol unique et vivez l'excitation de piloter un avion de chasse avec des professionnels de l'aviation.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

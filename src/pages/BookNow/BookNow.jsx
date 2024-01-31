import React, { useState } from 'react';
import 'typeface-anton';
import 'typeface-orbitron';
import './BookNow.css';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import Footer from '../../components/Footer/Footer';

const BookNow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [formData, setFormData] = useState({

  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de traitement du formulaire

    // Affiche la modal après la soumission du formulaire
    setShowModal(true);

    console.log('Formulaire soumis avec les données :', formData);
  };

  const FermerModal = () => {
    // Ferme la modal
    setShowModal(false);
  };
  return (
    <div>
    <div className="video-background3">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-center  ">
        <div className="font-eb-garamond">
          <a href="#">
            <img
              src="/image/Logo1er.png"
              alt="Logo Maverick"
              className="mx-auto mt-1 w-16 md:w-24 lg:w-24  "
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
        className="w-full h-full object-cover"
      >
        <source src="/video/pilote.mp4" type="video/mp4" />
      </video>
      <div className="background-image flex items-center justify-center h-screen pt-19 mt-16 ">
        <div className="container p-4 rounded-md shadow-md max-w-md text-black blurred-container ">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif', color: 'hsl(173, 100%, 51%)' }}>Réservez maintenant</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-black ">
                
                </label>
                Prenom
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className='' >
                <label htmlFor="lastName" className="block text-sm " ></label>
                Nom
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                Email
                <label htmlFor="email" className="block text-sm font-semibold text-black" ></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold text-black" ></label>
                Date
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="startTime" className="block text-sm font-semibold text-black"  ></label>
                Heure de début
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="endTime" className="block text-sm font-semibold text-black" ></label>
                Heure de fin
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Réserver
              </button>
            </div>
          </form>

          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="absolute bg-white p-6 rounded-md shadow-md text-center max-w-md">
                <p className="text-xl font-bold mb-3 text-gray-800">Réservation Confirmée!</p>
                <p className="text-sm text-gray-700 mb-4">Votre demande a bien été enregistrée. Nous vous contacterons par e-mail pour finaliser le paiement.</p>
                <button onClick={FermerModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
            
    </div >
    <Footer />
    </div>
  );
};

export default BookNow;

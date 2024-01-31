import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Avion_detail.css';
import 'typeface-anton';
import 'typeface-orbitron';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { faCircle, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import Footer from '../../components/Footer/Footer';


const Avion_detail = ({ avionsDeChasseModernes }) => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const avion = avionsDeChasseModernes[index];
    useEffect(() => {
        if (!CSS.supports('animation-timeline: view()')) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.set('.fixed', {
                position: 'fixed',
                inset: 0,
            });

            const INDICATORS = document.querySelectorAll('.indicator');
            const ARTICLES = document.querySelectorAll('article');
            INDICATORS.forEach((indicator, index) => {
                gsap.to(indicator, {
                    flex: 3,
                    repeat: 1,
                    yoyo: true,
                    scrollTrigger: {
                        scrub: true,
                        trigger: ARTICLES[index],
                        scroller: 'body',
                        start: 'top bottom',
                        end: 'bottom top',
                    },
                });
            });
        }
    }, []);

    if (!avion) {

        navigate('/');
        return null;
    }

    return (

        <>
            <HamburgerMenu />
            <main>
                <section>
                    <article id="item-1">
                        <div className="fixed">
                            <img src={avion.image1} alt="" />
                            <div className="content">
                                <h1 className='titre_style' style={{ fontFamily: 'Orbitron, sans-serif' }} >{avion.nom}</h1>
                                <p className='histoire_style' style={{ fontFamily: 'Orbitron, sans-serif' }} >{avion.histoire}</p>
                            </div>
                        </div>
                    </article>
                </section>
                <section>
                    <article id="item-2">
                        <div class="fixed">
                            <img src={avion.image2} alt="" />
                        </div>
                        <div class="static">
                            <div class="content">
                                <div class="text-wrap">
                                    <div class="loud-wrap">
                                        <h1 className='information_title' >Information à propos de l'avion</h1>
                                        <ul className='information_style' >
                                            <li>
                                                Pays: {avion.pays}
                                            </li>
                                            <li>
                                                Fabricant: {avion.fabricant}
                                            </li>
                                            <li>
                                                Role : {avion.role}
                                            </li>
                                            <li>
                                                Année de mise en service : {avion.anneeDeMiseEnService}
                                            </li>
                                            <li>
                                                Motorisation : {avion.motorisation}
                                            </li>
                                            <li>
                                                Vitesse max : {avion.vitesseMax}
                                            </li>
                                            <li>
                                                Autonomie : {avion.autonomie}
                                            </li>
                                            <li>
                                                Armement : {avion.armement}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="item-3">
                        <div class="fixed"></div>
                        <div class="static">
                            <div class="content">
                                <h2 style={{ letterSpacing: '2px' }}>
                                    Découvrez les sensations ultimes à bord d'un avion de chasse avec notre expérience exclusive.
                                    <br />
                                    Vivez l'adrénaline, ressentez la puissance, et explorez le ciel avec passion.
                                </h2>
                            </div>
                        </div>
                    </article>
                    <article id="item-4">
                        <div class="fixed">
                            <img src={avion.image3} alt="" />
                        </div>
                        <div class="static">
                            <div class="content">
                                <h2 style={{ letterSpacing: '2px' }}>
                                    Pilotez avec des experts et transformez chaque vol en une aventure exceptionnelle.
                                    Explorez les cieux, ressentez l'émotion, et vivez une expérience inoubliable avec notre équipe de professionnels chevronnés.
                                </h2>

                                <div class="chat-container" >
                                    <div class="text-blocks">
                                        <p>Comment nos pilotes assurent-ils des vols exceptionnels?</p>
                                        <p style={{ textAlign: 'center' }}>Nos pilotes experts apportent une expérience riche et des compétences pointues à chaque vol, garantissant ainsi des voyages aériens sûrs et mémorables.</p>
                                        <p>Merci de faire confiance à notre équipe d'experts en aviation.</p>
                                    </div>
                                </div>
                                <div class="filler">
                                    <h2 style={{ letterSpacing: '2px' }}>Réservez votre séance dès maintenant.</h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="item-5">
                        <div class="fixed">
                            <img src={avion.image4} alt="" />
                            <div class="bouton-centre" >
                                <Link to="/booknow">
                                    <Button buttonText="Book Now" />
                                </Link>

                            </div>
                            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Footer />
                            </div>

                        </div>

                    </article>

                </section>

            </main>


        </>
    );
};

export default Avion_detail;

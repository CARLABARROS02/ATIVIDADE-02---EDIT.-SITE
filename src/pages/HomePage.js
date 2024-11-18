import React from 'react';
import '../styles/pages/home.scss';

import LogoV2 from '../assets/LogoV2.png'; // Apaguei a anterior e ajustei o caminho
//caminho da anterior:import Logo from '../assets/logo.png';

import LandingImage from '../assets/landingImage.png'; 
import Button from '../components/Buttons/Button';

// Atualizei a logo para a nova versão LogoV2

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-container">
                <div className="image-container">
                    <img src={LandingImage} alt="Home" />
                </div>
                <div className="content-container">

                    <img className="logo" src={LogoV2} alt="Logo" /> 
                    

                    <h2>Bem-vindo ao nosso site!</h2>
                    <p>Nosso objetivo é proporcionar o melhor para o seu pet. Confira nossos serviços e mais.</p>
                    <Button link={"https://wa.me/5511991407988"} text={"Ir Para o WhatsApp"} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

// adicionei o link do botão do whatsapp

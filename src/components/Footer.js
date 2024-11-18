import { BsRocketTakeoff } from "react-icons/bs";
// Footer.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaRocket } from 'react-icons/fa';
import LogoV2 from '../assets/LogoV2.png'; // ALTERAÇÃO DO CAMINHO DA LOGO 
import '../styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-partner">
                    <div className="rocket_text">
                        <BsRocketTakeoff className="footer-icon" />
                        <div className="footer-partner-text">
                            <p className="text1">Parceiro</p>
                            <p className="text2">Flyvet</p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                        <Link to="sobre" smooth={true} duration={500}>Sobre</Link>
                        <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-clinic">
                    <img src={LogoV2} alt="Logo" className="footer-logo" />
                    <p className="footer-clinic-text">Clínica Veterinária</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

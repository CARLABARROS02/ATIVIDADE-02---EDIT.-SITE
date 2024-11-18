import React, { useState } from 'react';
import '../styles/header.scss'; // Importando o arquivo SCSS
import LogoV2 from "../../src/assets/LogoV2.png"   //ALTERAR A LOGOTIPO
import { Link } from 'react-scroll'; // Usando react-scroll para navegação suave entre seções

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1><Link to="home" smooth={true} duration={500}><img src={LogoV2} alt='Logo' /></Link></h1>
                </div>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="home" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="sobre" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
                        <li><Link to="servicos" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Serviços</Link></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;

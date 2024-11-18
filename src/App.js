import React from 'react';
import Header from './components/Header.js';
import ServicePage from '../src/pages/servicePage.js';
import HomePage from '../src/pages/HomePage.js';
import Sobre from '../src/pages/AboutPage.js';
import ContactSection from '../src/pages/ContactPage.js'
import Footer from '../src/components/Footer.js'
import './styles/body.scss';

function App() {
  return (
    <>
      <Header />
      <section id="home" className="section">
        <HomePage />
      </section>
      <section id="sobre" className="section">
        <Sobre />
      </section>
      <section id="servicos" className="section">
        <ServicePage />
        <br />
        <br />
        <ContactSection />
        <br />
        <br />
        <Footer />
      </section>
    </>
  );
}

export default App;

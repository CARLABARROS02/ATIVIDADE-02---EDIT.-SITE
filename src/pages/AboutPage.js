import React from 'react';
import '../styles/pages/about.scss'; // Estilos para a seção sobre
import SobreImage from '../assets/aboutImage.jpg';

import Button from '../components/Buttons/Button'; //importar o componente do botão

const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="content">
                    <h2>Sobre nós</h2>
                    <p>
                    Fundada em 2018, nossa clínica nasceu com o objetivo de ser um petshop dedicado aos cuidados essenciais dos pets, sempre priorizando o bem-estar. Em 2020, percebemos a crescente demanda por serviços veterinários de qualidade e, assim, decidimos ampliar nosso foco para a saúde animal, investindo em infraestrutura moderna e em uma equipe de profissionais especializados.
                    </p>
                    <p>Somos apaixonados pelo bem-estar dos pets e dedicamos nossa energia para garantir que cada um deles receba o cuidado e a atenção que merece. 
                    </p>
                    <p>
                    Aqui, entendemos que seu amigo de quatro patas é único, e é por isso que nossos serviços são pensados para oferecer conforto, segurança e, acima de tudo, felicidade, desde o banho e tosa até a hospedagem e transporte, nossa equipe altamente qualificada está sempre pronta para atender às necessidades do seu pet com carinho e respeito.
                    </p>
                    <p>
                    Nossa missão é proporcionar uma experiência de cuidado que vai muito além do básico — um atendimento que faz seu pet se sentir amado e seguro.
                    </p>
                    <p>
                    Atualmente, nossa clínica é um lugar acolhedor, onde trabalhamos para fortalecer o laço entre tutores e seus animais, oferecendo cuidados de qualidade e confiança, e buscamos ser parceiros na saúde e bem-estar do seu pet, garantindo que ele tenha uma vida feliz e saudável.
                    </p>
                    <div className="WhatsApp">
                    <Button link={"https://wa.me/5511991407988"} text={"Ir Para o WhatsApp"} />
                </div>
                </div>
                <div className="image">
                    <img src={SobreImage} alt="about" />
                </div>
            </div>
        </section>
    );
};

export default Sobre;

//texto anterior:
//<h2>Sobre nós</h2>
//<p>Somos uma equipe dedicada ao bem-estar e cuidado do seu pet, sempre buscando oferecer o melhor em qualidade e atenção para nossos clientes de quatro patas. Sabemos que cada pet é único e merece um atendimento especial, por isso, nossos serviços são pensados para garantir conforto, segurança e alegria para o seu amigo.
//Nossa missão é proporcionar uma experiência de cuidado que vá além do básico, sempre com carinho e respeito. Seja no banho e tosa, hospedagem ou transporte, temos uma equipe qualificada e apaixonada pelo que faz, pronta para atender às necessidades do seu pet com o máximo de dedicação.
//</p>

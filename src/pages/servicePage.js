import { FaXRay } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import React from 'react';
import Card from '../components/Cards/serviceCard';
import { FaDog } from 'react-icons/fa';
import "../styles/pages/servicePage.scss"
const ServicePage = () => {
    return (
        <>        <h2 className="titulo">Nossos Serviços</h2>
            <section className="container">
                <div className="cards-container">
                <Card
                        icon={<FaXRay />}
                        text="Raio-X"
                        buttonLink="/raio-x"
                        buttonText={<a href="https://wa.me/5511991407988"> Ver Mais </a>}
                    />
                <Card
                        icon={<FaBriefcaseMedical />}
                        text="Fármarcia"
                        buttonLink="/farmacia"
                        buttonText={<a href="https://wa.me/5511991407988"> Ver Mais </a>}
                    />
                <Card
                        icon={<FaDog />}
                        text="Clínica Veterinária"
                        buttonLink="/clinica-vet"
                        buttonText={<a href="https://wa.me/5511991407988"> Ver Mais </a>}
                    />

                </div>

            </section></>

    );
};

export default ServicePage;

//ordem anterior: CLÍNICAVETERINÁRIA, FARMÁCIA, RAIO X

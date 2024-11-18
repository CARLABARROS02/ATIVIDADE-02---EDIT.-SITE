import { IoMdChatboxes } from "react-icons/io";
import React from 'react';
import ContactCard from '../components/Cards/ContactCards.js';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/pages/contact.scss';

// adicionar um card para o instagram - nome do ícone: Instagram, irei colocar como FaEnvelope
//adicionar o link usando a tag âncora
//Mudou o Whatsapp no Sobre, irei mudar nos contatos também e adicionar o link padrão do https://wa.me/númerodocontato

const ContactSection = () => {
    return (
        <>
            <h2 className="titulo_contato">Nossos Contatos</h2>
            <div className="contact-section">
                <ContactCard
                    title="Endereço"
                    icon={<FaMapMarkerAlt />}
                    text="Av. Elias Yazbek, 606 - Quinhau, <br>Embu das Artes - SP, 06803-000"
                />
                <ContactCard
                title="Whatsapp"
                icon={<FaPhoneAlt />}
                text={ <> <a href="https://wa.me/5511991407988"> WhatsApp: +55 (11) 99140-7988 </a>
                <br /> Telefone: (11) 9888-8769</> } 
                />

                <ContactCard
                    title="Horário de Funcionamento"
                    icon={<FaClock />}
                    text="Segunda à Sexta: 9h às 18h<br>Finais de Semana: 9h às 15h"
                />
                <ContactCard
                    title="Contatos Sociais"
                    icon={<IoMdChatboxes />}
                    text="@clinicaveterinaria.vidaanimal <br> vidaanimal@gmail.com"
                />
                <ContactCard
                title = "Nosso Instagram"
                icon={<FaEnvelope />}
                text={<><a href="https://www.instagram.com/fly.vet/"> @fly.vet</a></>}
                />
            </div>
        </>

    );
};

export default ContactSection;

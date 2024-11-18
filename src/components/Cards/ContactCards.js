// ContactCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './../../styles/components/contactCard.scss';

//Renderizando o `text` diretamente como JSX <div className="contact-card__text">{text}</div>   
// remover o dangerous para não bugar a conversão de objetos

const ContactCard = ({ title, icon, text }) => {
    return (
        <div className="contact-card">
            <h3 className="contact-card__title">{title}</h3>
            <div className="contact-card__icon">{icon}</div>
            <div className="contact-card__text">{text}</div>   
        </div>
    );
};

ContactCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired, // text aceita HTML para incluir <br>

    text: PropTypes.node.isRequired, // Permitir JSX como `text`, para poder linkar no card de contatos
};

export default ContactCard;

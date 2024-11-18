import React from 'react';
import Button from '../Buttons/Button'; // Importando o componente de botão
import '../../styles/components/card.scss'

const Card = ({ icon, text, buttonLink, buttonText }) => {
    return (
        <div className="card">
            <div className="icon" style={{ color: "white" }}>{icon}</div>
            <p className="text">{text}</p>
            <Button link={buttonLink} text={buttonText} />
        </div>
    );
};

export default Card;

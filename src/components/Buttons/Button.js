import React from 'react';
import '../../../src/styles/components/button.scss'; // Se quiser adicionar um estilo específico ao botão

const Button = ({ link, text }) => {
    return (
        <a href={link} className="button" target="_blank">
            {text}
        </a>
    );
};

export default Button;

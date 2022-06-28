import React from 'react';
import './CardPequeno.css'

const CardPequeno = (props) => {
    return (
        <div className='smallcard-container'>
            <img src={props.imagem} />
            <p>{props.item} <span>{props.conteudo}</span></p>
        </div>
    )
}

export default CardPequeno;
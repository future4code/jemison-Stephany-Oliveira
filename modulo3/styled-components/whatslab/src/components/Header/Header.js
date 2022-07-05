import React from 'react';
import styled from 'styled-components';

/* Aqui começam os styled components do Header */

const AppHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 800px) {
        width: 100vw;
    }
`;

const Title = styled.h1 `
    font-size: 1.5rem;

    @media screen and (min-width: 800px) {
        font-size: 2rem;
    }
`;

const Logo = styled.img `
    width: 10vw;
    margin: 0 0vw 0 0;

    @media screen and (min-width: 800px) {
        width: 5vw;
        margin: 0 2vw 0 0;
    }
`;

/* Aqui começa o component do Header */

export const Header = (props) => {
    return (
        <AppHeader>
            <Logo src={props.imagem} alt='Logo da Labenu' />
            <Title>{props.titulo}</Title>
        </AppHeader>
    )
}
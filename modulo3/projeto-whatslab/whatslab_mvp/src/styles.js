import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';

// reset.css styled-components edition:

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

// Component Wrapper: é a caixa onde teremos toda a aplicação, também responsável pela centralização.

export const Wrapper = styled.div `
    border: 1px solid black;
    width: 50vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
`;

// Component Box: é a caixa responsável por posicionar os inputs.

export const StyledBox = styled.div `
    display: flex;
    flex-direction: row;
    margin: 4vh 0 1vh 1vw;
`;

// Component InputBox (filho do Box): estilos e ajustes.

export const StyledInput = styled.input `
    padding: 0 0 0 5px;
    font-size: 0.8rem;
`;

// Component SendButton (filho do Box): estilos e ajustes.

export const StyledButton = styled.button`
    padding: 3px;
`;

// Component MessageBox: é a caixa responsável por posicionar e conter o conteúdo das mensagens.

export const MessageWrap = styled.div`
    border: 1px solid gray;
    border-radius: 3px;
    margin: 0 1vw;
    padding: 5px 10px;

`;

// Parágrafo dentro do MessageBox: ajustes e estilos.

export const MessagePG = styled.p`
    font-size: 0.9rem;
`;

// Span dentro do MessageBox: ajustes e estilos.

export const MessageSpan = styled.span`
    font-weight: bold;
`;
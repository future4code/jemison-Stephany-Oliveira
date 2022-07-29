import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
  }
`

export const AppJS = styled.div`
    background-color: white;
    width: 50vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media screen and (max-width: 480px) {
        width: 100vw;
    }
`;

// estilos do Navegacao.js

export const NavegacaoJS = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    width: 50vw;

    button {
        background-color: #6EEB83;
        padding: 8px;
        width: 100px;
        border: 2px solid #6EEB83;
        font-size: 0.8rem;
    }

    button:hover {
        background-color: #6EEB83;
        border: 2px solid green;
    }

    button:active {
        background-color: green;
    }

    @media screen and (max-width: 480px) {
        width: 100vw;

        button {
            width: 80px;
        }
    }
`

export const PageTitle = styled.h1`
    background-color: white;
    margin: 10vh 0 20vh 0;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

// estilos do Cadastro.js =>

export const CadastroJS = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    label {
        //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input {
        background-color: white;
        padding: 10px;
        margin-bottom: 20px;
        width: 300px;
        border-radius: 5px;
        border: 2px solid lightgray;
        font-size: 1rem;
    }

    input:hover {
        border: 2px solid #6EEB83;
    }

    input:focus {
        outline: 1px solid #6EEB83;
    }

    button {
        background-color: #6EEB83;
        padding: 10px;
        width: 300px;
        border: 2px solid #6EEB83;
        font-size: 1rem;
    }

    button:hover {
        background-color: #6EEB83;
        border: 2px solid green;
    }

    button:active {
        background-color: green;
    }
`

// estilos do Usuarios.js

export const Container = styled.div`
    background-color: white;
`

export const UsuariosJS = styled.div`
    width: 25vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin: 0 auto 2vh auto;
    box-sizing: border-box;

    img {
        background-color: white;
        height: 100%;
    }

    p {
        width: 100%;
        height: 100%;
        background-color: white;
        font-size: 1rem;
        border: 2px solid black;
        padding: 10px 0 0 10px;
    }

    p:hover {
        border: 2px solid #6EEB83;
    }

    button {
        background-color: white;
        width: 80px;
        height: 100%;
        border: 2px solid black;
    }

    button:hover {
        border: 2px solid #6EEB83;
    }

    button:active {
        border: 2px solid red;
    }

    @media screen and (max-width: 480px) {
        width: 70vw;
    }
`

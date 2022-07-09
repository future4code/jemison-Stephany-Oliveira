import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

// this global style resets margin/padding.

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
    }`;

// wrapper related styles

export const Wrapper = styled.main`
    width: 60vw;
    border: 1px solid #B5BAB7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfc;
`;

// header related styles

export const HeaderS = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh 0;
    border-bottom: 1px solid #B5BAB7;

    img {
        width: 2vw;
    }

    h1 {
        font-size: 1.7rem;
        margin: 0 0 0 7px;
    }

    .fl {
        color: #FD8003;
    }

    .fw {
        color: #B5BAB7;
    }

    .lw {
        color: #B5EF8A;
    }
`;


// messenger related styles

export const MessengerS = styled.section`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    height: 90vh;

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
        text-align: center;
        margin: 0 5px 4px 0;
        padding: 2px 0;
        border: 1px solid gray;
        border-radius: 4px;
    }

    button {
        padding: 2px 10px;
        border: 1px solid gray;
        border-radius: 4px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0 0vw 5vh 20vw;
    }

    p {
        border: 1px solid gray;
        width: 500px;
        padding: 8px;
        font-size: 0.8rem;
        margin: 1vh 0 0 0;
        border-radius: 10px;
        background-color: white;
    }

    span {
        font-weight: bold;
    }

    button:hover {
        background-color: #FD8003;
        color: white;
    }

    button:active {
        background-color: #FD8003;
        color: white;
    }
`;
import styled from "styled-components";

export const HomepageJS = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25vh;
    align-items: center;
    width: 100%;

    h1 {
        display: none;
    }

    img {
        width: 80%;
    }

    div {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        margin-top: 5vh;
    }

    @media screen and (min-width: 480px) {
        margin: 10vh auto 0 auto;
        width: 50%;
        height: 100%;

        h1 {
            width: 65%;
            display: block;
            color: #4E9F3D;
            font-weight: 1000;
            text-align: center;
            margin-bottom: 2vh;
            border: 1px solid #4E9F3D;
            border-radius: 10px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        img {
            width: 50%;
        }

        div {
            margin-top: 4vh;
        }
    }
`
import styled from "styled-components";

export const LoginPageJS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    .buttonCase {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 2vh;
    }

    h1 {
        text-align: center;
        margin: 7vh 0;
        color: #4E9F3D;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 480px) {
        width: 70%;

        .buttonCase {
            width: 90%;
        }

        form {
            width: 40%;
        }
    }
`
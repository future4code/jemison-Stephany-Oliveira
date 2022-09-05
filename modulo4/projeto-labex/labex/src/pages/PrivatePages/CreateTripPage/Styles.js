import styled from "styled-components";

export const CreateTripPageJS = styled.div`
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

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
            color: #4E9F3D;
            font-size: 1.7rem;
            margin-top: 10vh;
        }

        p {
            color: white;
            text-align: center;
            margin-top: 5vh;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin-top: 5vh;

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
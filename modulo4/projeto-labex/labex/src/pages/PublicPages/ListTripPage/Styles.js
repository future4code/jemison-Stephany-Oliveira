import styled from "styled-components";

export const ListTripPageJS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    .buttonCase {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 2vh;
    }

    h1 {
        color: #4E9F3D;
        font-weight: bold;
        margin-top: 5vh;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 480px) {

        .buttonCase {
            width: 70%;
        }
        
        section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            width: 70%;
        }
    }
`

export const TripCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    margin-top: 4vh;
    width: 80%;
    color: white;
    border: 2px solid #4E9F3D;
    border-radius: 10px;

    .titleClass {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1.3vh;

        span {
            font-size: 11px;
            margin-left: 15px;
            padding: 1px 3px;
            text-transform: lowercase;
            border-radius: 3px;
            color: black;
            background-color: #4E9F3D;
            border: 2px solid #4E9F3D;
        }
    }

    span {
        font-size: 1.1rem;
        font-weight: bold;
    }

    p {
        margin-bottom: 1vh;
    }
`
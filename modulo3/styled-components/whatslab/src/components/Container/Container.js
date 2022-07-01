import React from 'react';
import styled from 'styled-components';

/* Aqui começa o styled component do Container */

const ContainerBG = styled.main`
    width: 100vw;
    height: 91vh;
    background-color: #0C0F0A;

    @media screen and (min-width: 800px) {
        width:100vw;
        height: 90vh;
        background-color: #0C0F0A;
    }
`;

const BoxSender = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5vh 0;

`;

const BoxMessage = styled(BoxSender)`
    width: 98vw;
    height: 85vh;
    align-items: flex-end;
    margin: 0 auto;
    background-color: #98D2eb;
    padding: 0 0 1vh 0;

    @media screen and (min-width: 800px) {
        width: 70vw;
    }
`;

const Labels = styled.label`
    color: white;
    font-weight: 600;

`;

const CustomButton = styled.button`
    font-weight: 600;
`;

/* Aqui começa o component do Container */

export const Container = (props) => {
    return (
        <ContainerBG>
            <BoxSender>
                <Labels>{props.labelSender}</Labels>
                <input></input>
            </BoxSender>
            <BoxMessage>
                <Labels>{props.labelMessage}</Labels>
                <input></input>
                <CustomButton>{props.buttonText}</CustomButton>
            </BoxMessage>
        </ContainerBG>
    )
}
import React from 'react';
import styled from 'styled-components';

/* Aqui começa o styled component do Footer */

const Footer = styled.footer`
    width: 100vw;
    height: 5vh;
    background-color: #fff;

    /* @media screen and (min-width: 800px) {
        width:60vw;
        height: 90vh;
        background-color: #FFFFFF;
    } */
`;

const TextFooter = styled.p`
   font-size: 0.8rem;
   text-align: center;
   margin: 0;
   padding: 1vh 0 1vh 0;
`;

/* Aqui começa o component do Footer */

export const AppFooter = (props) => {
    return (
        <Footer>
            <TextFooter>{props.footerText}</TextFooter>
        </Footer>
    )
}
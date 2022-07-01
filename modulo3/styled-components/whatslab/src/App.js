import React from 'react';
import {Header} from './components/Header/Header'
import {Container} from './components/Container/Container';
import logo from './img/logo.jpg';
import {AppFooter} from './components/Footer/Footer';
import styled from 'styled-components';

/* Aqui começam o styled component do Container */

const Wrapper = styled.div`
  margin: 0;
`;


function App() {
  return (
    <Wrapper>
      <Header imagem={logo} titulo='WhatsLab'/>
      <Container labelSender='Remetente:' labelMessage='Msg:' buttonText='Enviar ' />
      <AppFooter footerText='Todos os direitos reservados @sterx17. Rua Labenu, 1000, São Paulo, SP - 00110-101' />
    </Wrapper>
  );
}

export default App;

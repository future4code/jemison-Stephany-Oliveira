import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import profilePic from './img/rainbow.jpg';
import tpLogo from './img/tp.jpg';
import eqLogo from './img/equativ.jfif';
import emailLogo from './img/email_icon.png';
import addressLogo from './img/address_icon.png';
import arrowIcon from './img/arrow.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={profilePic} 
          nome="Ste" 
          descricao="Oi, eu sou a Ste. Sou um bloquinho de código no mundo gigantesco dos 0 e dos 1. Meu hobby favorito é descobrir algo novo para aprender."
        />
        
        <ImagemButton 
          imagem={arrowIcon} 
          texto="Ver mais"
        />
      </div>

      <CardPequeno className="page-section-container" imagem={emailLogo} item='Email:' conteudo='stephany@labenu.com.br' />

      <CardPequeno className="page-section-container" imagem={addressLogo} item='Endereço:' conteudo='Rua Labenu, 1000' />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={tpLogo} 
          nome="Teleperformance" 
          descricao="Salva-vidas do mar digital, eu vivi 3 anos na TP resgatando usuários do mar dos problemas técnicos" 
        />
        
        <CardGrande 
          imagem={eqLogo}
          nome="Equativ" 
          descricao="Encontrando problemas no código em 3, 2, 1..." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

import './App.css';
import profile from './img/rainbow.jpg';

function App() {
  let titulo = "Oi! Eu sou a Ste!";
  const mostraAlertaBoaNoite = () => {
    alert("Boa noite, visitante(s)!")
  }

  return (
    <main className="app">
      <h1 className="title">{titulo}</h1>
      <img src={profile} className="profile" alt='Foto de Perfil da Pessoa Desenvolvedora' />
      <p>Eu sou a Ste, tenho 23 anos, nasci no Pernambuco e moro em São Paulo desde os 5 anos. Meu maior hobby é aprender, por isso, o Google é o meu melhor amigo. Minha cor favorita é amarelo, HQs são a minha leitura favorita, meu super-heroi preferido é o Homem de Ferro, as prequels de Star Wars me fazem relaxar e comédias de terror são minha tradição de Sexta-Feira 13.</p>
      <button className='clickButton' onClick={mostraAlertaBoaNoite}>Clique Aqui</button>
    </main>
  );
}

export default App;

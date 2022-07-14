import React, {useState} from 'react'
import { FimForm } from './FimForm';
import { SobreEscolaridade } from './SobreEscolaridade';
import { SobreIES } from './SobreIES';

export const DadosGerais = (props) => {
  const {handleStartButton} = props;

  const [nav, setNav] = useState('')

  const updateValueEMinc = (e) => {
    e.preventDefault()
    setNav('EMinc')
  }

  const updateValueEMcom = (e) => {
    e.preventDefault()
    setNav('EMcom')
  }

  const updateValueESinc = (e) => {
    e.preventDefault()
    setNav('ESinc')
  }

  const updateValueEScom = (e) => {
    e.preventDefault()
    setNav('EScom')
  }

  const defineProximaPagina = () => {
    switch (nav) {
      case 'EMcom':
        return <SobreEscolaridade handleNextPage={defineProximaPagina}/>;
      case 'ESinc':
        return <SobreIES handleNextPage={defineProximaPagina} />;
      case 'EScom':
        return <SobreIES handleNextPage={defineProximaPagina}/>;
      default:
        return <FimForm handleNextPage={defineProximaPagina}/>
    }
  }

  return (
    <div>
        <section>
            <h2>Dados Gerais</h2>
            <form>
                <label>Nome:</label>
                <input type='text' />
                <label>Idade:</label>
                <input type='number' />
                <label>E-mail</label>
                <input type='email' />
                <h5>Escolaridade:</h5>
                <button onClick={updateValueEMinc}>Ensino Médio Incompleto</button>
                <button onClick={updateValueEMcom}>Ensino Médio Completo</button>
                <button onClick={updateValueESinc}>Ensino Superior Incompleto</button>
                <button onClick={updateValueEScom}>Ensino Médio Completo</button>
                              
            </form>
            <button onClick={handleStartButton}>Voltar</button>
            {defineProximaPagina()}
        </section>
    </div>
  )
}

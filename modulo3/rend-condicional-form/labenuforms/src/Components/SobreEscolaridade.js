import React, {useState} from 'react'
import { FimForm } from './FimForm';

export const SobreEscolaridade = () => {
  const [nav, setNav] = useState('')

  const updateValueCT = (e) => {
    e.preventDefault()
    setNav('CT')
  }

  const updateValueCI = (e) => {
    e.preventDefault()
    setNav('CI')
  }

  const updateValueNO = (e) => {
    e.preventDefault()
    setNav('NO')
  }

    const displayLastPage = () => {
      if (nav) {
        return <FimForm />
      }
    }

  return (
    <section>
        <h2>Informações Educacionais:</h2>
        <form>
            <label>Por que você não terminou um curso de graduação?</label>
            <input type='text' />
            <label>Você fez algum curso complementar?</label>
            <button onClick={updateValueCT}>Curso Técnico</button>
            <button onClick={updateValueCI}>Cursos de Inglês</button>
            <button onClick={updateValueNO}>Não fiz cursos complementares</button>
            {displayLastPage()}
        </form>
    </section>
  )
}

import React from 'react'

export const Start = (props) => {
    const {handleStartButton} = props;
  return (
    <div>
        <h2>Instruções do Formulário</h2>
        <p>Para participar do processo seletivo, preencha o formulário a seguir.</p>
        <button onClick={handleStartButton}>Começar</button>
    </div>
  )
}

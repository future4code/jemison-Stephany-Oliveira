import React from 'react'

export const ApplicationFormPage = () => {
  return (
    <div>
      <form>
        <label>Nome:</label>
        <input type='text' />
        <label>Idade:</label>
        <input type='number' size='3' />
        <label>Mensagem de Inscrição:</label>
        <input type='text' />
        <label>Profissão:</label>
        <input type='' />
        <label>País:</label>
        <input type='text' />
        <button>Enviar Inscrição</button>
      </form>
    </div>
  )
}

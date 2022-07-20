import React, {useState} from 'react'
import { MessengerS } from '../../styles'

export const Messenger = () => {
  // useState variables
  const [inputUser, setInputUser] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  const [messageBox, setMessageBox] = useState([])

  // message generator engine

  const messageCreator = () => {
    const newMessage = {nomeUsuario: inputUser, mensagem: inputMessage};
    const addNewMessage = [...messageBox, newMessage];
    setMessageBox(addNewMessage)
    setInputUser('')
    setInputMessage('')
  }

  const displayMessage = messageBox.map((message, index) => {
    return <p key={index}><span>{message.nomeUsuario}: </span>{message.mensagem}</p>
  })

  

  return (
    <MessengerS>
        <main>
          <label>Nome de Usuário:</label>
          <input placeholder='Nome de Usuário' type='text' size='16' value={inputUser} onChange={(e) => {e.preventDefault(); setInputUser(e.target.value)}}/>
          <label>Mensagem:</label>
          <input placeholder='Mensagem' size='76' type='text' value={inputMessage} onChange={(e) => {e.preventDefault(); setInputMessage(e.target.value)}}/>
          <button onClick={messageCreator}>Enviar</button>
        </main>
        <div>
          {displayMessage}
        </div>
    </MessengerS>
  )
}

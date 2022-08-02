import axios from 'axios'
import { React, useState } from 'react'
import { CadastroJS, PageTitle, Formulario } from '../../styles'

export const Cadastro = () => {

  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const headers = { headers: { Authorization: 'stephany-emidio-jemison'}}

  const body = {
      "name": inputNome,
      "email": inputEmail
  }

  const criaUsuario = (e) => {
    e.preventDefault()
    axios.post(url, body, headers).then((response) => {
      alert('Usuário criado com sucesso!').catch((error) => {
        alert('Não foi possível criar o usuário. Tente novamente.')
      })
    })

  }



  return (
    <CadastroJS>
        <Formulario>
            <label>Nome</label>
            <input placeholder='Nome' value={inputNome} onChange={(e) => setInputNome(e.target.value)}/>
            <label>E-mail</label>
            <input placeholder='E-mail' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
            <button onClick={criaUsuario}>Enviar</button>
        </Formulario>
    </CadastroJS>
  )
}

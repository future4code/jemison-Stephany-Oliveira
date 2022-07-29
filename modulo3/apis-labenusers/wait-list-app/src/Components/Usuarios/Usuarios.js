import axios from 'axios'
import icon from '../../Assets/icon.png'
import { React, useEffect, useState } from 'react'
import { UsuariosJS, Container } from '../../styles';


export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]) // passo 1: estados da lista

  // passo 3: variaveis da API (URL e Headers)
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
  const headers = { headers: { Authorization: 'stephany-emidio-jemison'}}

  // Requests:

  const pegaTodosUsuarios = () => {
    axios.get(url, headers)
    .then((response) => { setUsuarios(response.data) })
    .catch((error) => { console.log(error.response) })
  }



   const apagaUsuario = (id) => {
      const user = usuarios.filter((item) => item.id !== id)
      axios.delete(url + '/' + `${id}`, headers).then((response) => {
        alert('Usuário deletado com sucesso!')
      }).catch((error) => {
        alert('Não foi possível deletar o usuário. Tente novamente.')
      })
      setUsuarios(user)
    }

    // const handleRemover = (id) => {
    //   const car = carrinho.filter((item) => item.id !== id);
    //   setCarrinho(car);
    //   handlePreco();
    // };

  useEffect (() => { pegaTodosUsuarios() }, [])



  const todosLista = usuarios.map((item, index) => {
    return (
      <UsuariosJS key={index}>
        <img src={icon}/>
        <p>{item.name}</p>
        <button onClick={() => apagaUsuario(item.id)}>DEL</button>
      </UsuariosJS>
    )
  })






  return (
    <Container>
      { todosLista }
    </Container>
  )
}

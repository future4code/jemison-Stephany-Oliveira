import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

// imports da seção Post
import dProfile from './img/rainbow.jpg'
import iProfile from './img/instagram-large.jpeg'
import dPost from './img/sky.jpg'
import iPost from './img/post.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  let post1 = {
    nomeUsuario: 'paulinha',
    fotoUsuario: ['https://picsum.photos/50/50'],
    fotoPost: ['https://picsum.photos/200/150']
  }

  let post2 = {
    nomeUsuario: 'disas.ster',
    fotoUsuario: dProfile,
    fotoPost: dPost
  }

  let post3 = {
    nomeUsuario: 'instagram',
    fotoUsuario: iProfile,
    fotoPost: iPost
  }

  const arrayDeObjetos = [post1, post2, post3]

  const arrayDePostagens = arrayDeObjetos.map((post, index) =>  {
  return console.log(`Usuárie ${post.nomeUsuario} (foto de perfil: ${post.fotoUsuario}) postou a foto ${post.fotoPost} no feed.`)
  
  /* <Post key={index} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} />*/ })

return(
        <MainContainer>
          {arrayDePostagens}
        </MainContainer>
)

}


export default App;

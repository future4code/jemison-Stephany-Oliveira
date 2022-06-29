import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
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
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'disas.ster'}
            fotoUsuario={dProfile}
            fotoPost={dPost}
          />

          <Post
            nomeUsuario={'instagram'}
            fotoUsuario={iProfile}
            fotoPost={iPost}
          />
          
        </MainContainer>
)

}


export default App;

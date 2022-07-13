import React, {useState} from 'react';
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
const PostCreator = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3vh 0;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    margin: 0 0 1vh 0;
    text-align: center;
    border-radius: 4px;
    border: 0.5px solid gray;
  }
  
  button {
    border-radius: 4px;
    border: 0.5px solid gray;
  }

  button:hover {
    background-color: blueviolet;
    color: white;
  }

  button:active {
    background-color: blueviolet;
    color: white;
  }

`;

function App() {
// objetos dos posts já existentes
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

  // código responsável pela renderização do código na tela.

  const [inputUser, setInputUser] = useState('')
  const [inputUserPhoto, setInputUserPhoto] = useState('')
  const [inputPost, setInputPost] = useState('')
  const [postStorage, setPostStorage] = useState([post1, post2, post3])

  const postCreatorEngine = () => {
    const novoPost = {nomeUsuario: inputUser, fotoUsuario: inputUserPhoto, fotoPost: inputPost}
    const novoPostStorage = [...postStorage, novoPost]
    setPostStorage(novoPostStorage)
    setInputUser('')
    setInputUserPhoto('')
    setInputPost('')
  }

  const arrayDePostagens = postStorage.map((post, index) =>  {
  return <Post key={index} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} /> })

return(
        <MainContainer>
          <PostCreator>
            <label>Usuário:</label>
            <input placeholder='Usuário' type='text' value={inputUser} onChange={(e) => {e.preventDefault(); setInputUser(e.target.value)}} />
            <label>Foto de Usuário:</label>
            <input placeholder='Foto de Usuário' type="text" value={inputUserPhoto} onChange={(e) => {e.preventDefault(); setInputUserPhoto(e.target.value)}} />
            <label>Imagem do Post:</label>
            <input placeholder='Imagem do Post' type="text" value={inputPost} onChange={(e) => {e.preventDefault(); setInputPost(e.target.value)}} />
            <button onClick={postCreatorEngine}>Postar</button>
          </PostCreator>
          {arrayDePostagens}
        </MainContainer>
)

}


export default App;

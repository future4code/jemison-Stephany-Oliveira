import React, {useState} from "react";
// Import de estilos:
import { GlobalStyle } from "./styles";
import { Wrapper } from "./styles";
import { StyledBox } from "./styles";
// Import de components:
import { InputBox } from "./components/InputBox/InputBox";
import { SendButton } from "./components/SendButton/SendButton";
import { MessageBox } from "./components/MessageBox/MessageBox";


function App() {
  // input controlado para campo useFor='sender'
  const [inputForSender, setInputForSender] = useState('')

  // input controlado para campo useFor='messageText'
  const [inputForMessageText, setInputForMessageText] = useState('')

  // lazy loading

  

  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const onClickInit = () => {
    let caseMessage
    setShowMessage(!showMessage)
    if (showMessage) {
      caseMessage = <MessageBox clickSend={onShowInit} />
    }
  }

  const onShowInit = () => {
    setShowMessage(false)
    console.log(inputForMessageText)
  }

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  let caseMessage
  
  if (showMessage) {
    caseMessage = <MessageBox clickSend={onShowInit} contentForSender={inputForSender} contentForMessage={inputForMessageText} pbOnChange={onChangeMessage}/>
  }

  
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledBox>
        <InputBox widthField='14' useFor='sender' placeholderID='Usuário' pbInit={inputForSender} pbOnChange={e => {setInputForSender(e.target.value)}} />
        <InputBox widthField='62' useFor='messageText'placeholderID='Mensagem' pbInit={inputForMessageText} pbOnChange={e => {setInputForMessageText(e.target.value)}}/>
        <SendButton psOnClick={onClickInit} />
      </StyledBox>
      
    </Wrapper>
  );
}

export default App;

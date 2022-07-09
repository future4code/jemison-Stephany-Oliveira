// necessary react imports
import React from "react";
// style imports
import { Reset } from "./styles";
import { Wrapper } from "./styles";
// component imports
import { Header } from "./components/Header/Header";
import { Messenger } from "./components/Messenger/Messenger";
// logo imports
import logo from './img/logo.jpg'


function App() {
// code props
  let w = 'W'
  let hats = 'hats'
  let lab = 'Lab'

  return (
    <Wrapper>
      <Reset />
      <Header appLogo={logo} firstLetter={w} firstWord={hats} lastWord={lab}/>
      <Messenger />
    </Wrapper>
  );
}

export default App;

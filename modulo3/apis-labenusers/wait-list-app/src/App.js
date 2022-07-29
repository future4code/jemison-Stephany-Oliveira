import { useState } from "react";
import { Cadastro } from "./Components/Cadastro/Cadastro";
import { Navegacao } from "./Components/Navegacao/Navegacao";
import { Usuarios } from "./Components/Usuarios/Usuarios";
import { AppJS } from "./styles";

function App() {
  // const [tituloDinamico, setTituloDinamico] = useState('Lista de Espera')
  const [nav, setNav] = useState(false)
  const [tituloDinamico, setTituloDinamico] = useState('Lista de Espera')


  const verLista = (e) => {
    e.preventDefault()
    setNav(true)
    setTituloDinamico('Usuarios Cadastrados')
  }

  const botaoVoltar = (e) => {
    e.preventDefault()
    setNav(false)
    setTituloDinamico('Lista de Espera')
  }

    let controle;

    if (nav) {
        controle = <Usuarios />
    } else {
        controle = <Cadastro />
    }


  return (
    <AppJS>
        <Navegacao botaoVoltar={botaoVoltar} verLista={verLista} tituloDinamico={tituloDinamico}/>
        {controle}
    </AppJS>
  )
  
}

export default App;

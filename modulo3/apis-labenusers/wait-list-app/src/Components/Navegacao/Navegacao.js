import React from 'react'
import { PageTitle, NavegacaoJS } from '../../styles'

export const Navegacao = (props) => {
  return (
    <NavegacaoJS>
        <button onClick={props.botaoVoltar}>Voltar</button>
        <PageTitle>{props.tituloDinamico}</PageTitle>
        <button onClick={props.verLista}>Ver Lista</button>
    </NavegacaoJS>
  )
}

import React from 'react'
// Import de estilos:
import {StyledButton} from '../../styles'

export const SendButton = (props) => {
  return (
    <StyledButton onClick={props.psOnClick}>Enviar</StyledButton>
  )
}

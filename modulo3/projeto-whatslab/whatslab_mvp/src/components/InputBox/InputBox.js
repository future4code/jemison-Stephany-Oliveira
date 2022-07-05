import React from 'react';
// Import de estilos:
import {StyledInput} from '../../styles';

export const InputBox = (props) => {
  return (
    <StyledInput size={props.widthField} type="text" id={props.useFor} placeholder={props.placeholderID} value={props.pbInit} onChange={props.pbOnChange}/>
  )
}


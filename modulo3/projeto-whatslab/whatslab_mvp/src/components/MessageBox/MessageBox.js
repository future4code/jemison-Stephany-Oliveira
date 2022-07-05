import React from 'react'
// Import de estilos:
import { MessageWrap } from '../../styles'
import { MessagePG } from '../../styles'
import { MessageSpan } from '../../styles'

export const MessageBox = (props) => {
  return (
    <MessageWrap>
        <MessagePG>
          <MessageSpan>{props.contentForSender}: </MessageSpan>{props.contentForMessage}</MessagePG>
    </MessageWrap>
  )
}

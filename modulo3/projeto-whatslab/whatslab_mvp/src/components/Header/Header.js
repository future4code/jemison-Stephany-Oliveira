import React from 'react'
import { HeaderS } from '../../styles'

export const Header = (props) => {
  return (
    <HeaderS>
            <img src={props.appLogo}/>
            <h1>
                <span className='fl'>{props.firstLetter}</span>
                <span className='fw'>{props.firstWord}</span>
                <span className='lw'>{props.lastWord}</span>
            </h1>
    </HeaderS>
  )
}

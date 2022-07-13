import React, {useState} from 'react'
import { Start } from './Start'
import { DadosGerais } from './DadosGerais'

export const InicioForm = () => {
    const [startButton, setStartButton] = useState(false)

    const startForm = () => {
        setStartButton(!startButton)
    }

    if (startButton) {
        return <DadosGerais handleStartButton={startForm} />
    } else {
        return <Start handleStartButton={startForm} />
    }
}
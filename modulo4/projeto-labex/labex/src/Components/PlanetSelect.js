import React from 'react'
import { CustomSelect } from '../customStyledComponents/Select'

export const PlanetSelect = (props) => {
    return (
        <CustomSelect name={props.name} value={props.value} onChange={props.onChange}>
            <option value="">Escolha o Planeta de Destino</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>            
        </CustomSelect>
    )
}

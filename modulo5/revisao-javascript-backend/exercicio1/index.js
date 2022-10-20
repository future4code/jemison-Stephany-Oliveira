// entrada esperada: número + string => ex: 35, 'F'
// saída esperada: frase

const validate = (item) => {
    if (item.typeof === "Number") {
        return item
    } else {
        
    }
}

const convertToFahrenheitOrKelvin = (temperature, scale) => {
    if (scale === 'F') {
        let fahrenheit = temperature * 1.8 + 32
        console.log(`${temperature}° Celsius é equivalente a ${fahrenheit}° Farenheit.`)
    } else if (scale === 'K') {
        let kelvin = temperature + 273
        console.log(`${temperature}° Celsius é equivalente a ${kelvin}° Kelvin.`)
    } else {
        console.log(`Erro. Parâmetro inválido`)
    }
}

convertToFahrenheitOrKelvin(35, 'k')
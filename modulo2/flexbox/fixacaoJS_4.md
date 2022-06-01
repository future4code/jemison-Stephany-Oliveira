```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let qtdNumeros = arrayDeNumeros.filter(item => item === numeroEscolhido);
    if (qtdNumeros.length > 0) {
      return `O número ${numeroEscolhido} aparece ${qtdNumeros.length}x`
    } else {
      return "Número não encontrado"
    }
}
```
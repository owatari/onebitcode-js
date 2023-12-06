document.getElementById('robot').onclick = function() {
    let number = parseFloat(prompt('Olá, sou um robô especializado em calcular a tabuada. Sou limitado apenas as tabuadas 1 até 20.\n\nInsira o número à ser tabuado.'))
    let tab = ''
    for (let i = 1; i <= 20; i++) {
        tab += number  + ' x ' + i + ' = ' + (number * i) + '.\n'
    }
    alert(tab)
}

document.getElementById('palin').onclick = function() {
    let word = prompt('Olá, sou um robô especializado em buscar  palíndromos. Insira uma palavra direi se ela é ou não um palíndrono.')
    let palin = ''

    for (let i = word.length - 1; i >= 0; i--) {
        palin += word[i]
    }
    if (word.toUpperCase() === palin.toUpperCase()) {
        alert('A palavra ' + word.toUpperCase() + ' é um palíndromo. Ou seja, ela invertida é escrita da mesma maneira.')
    } else {
        alert('A palavra ' + word.toUpperCase() + ' não é um palíndromo.\nEscrita normal: ' + word.toUpperCase() + '\nEscrita invertida: ' + palin.toUpperCase())
    }
}
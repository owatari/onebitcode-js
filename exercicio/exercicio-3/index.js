document.getElementById('convert').onclick = function() {
    let metros = parseFloat(prompt('Insira a medida em metros a ser convertida:'))
    let medida = parseFloat(prompt('Para qual medida deve ser  convertido?\n1 - Milímetro.\n2 - Centímetro.\n3 - Decímetro.\n4 - Decâmetro.\n5 - Hectômetro.\n6 - Quilômetro.'))

    switch (medida) {
        case 1:
            alert(metros + ' metros equivalem à ' + (metros *= 1000) + ' Milímetros.')
            break
        case 2:
            alert(metros + ' metros equivalem à ' + (metros *= 100) + ' Centímetros.')
            break
        case 3:
            alert(metros + ' metros equivalem à ' + (metros *= 10) + ' Decímetros.')
            break
        case 4:
            alert(metros + ' metros equivalem à ' + (metros /= 10) + ' Decâmetros.')
            break
        case 5:
            alert(metros + ' metros equivalem à ' + (metros /= 100) + ' Hectômetros.')
            break
        case 6:
            alert(metros + ' metros equivalem à ' + (metros /= 1000) + ' Quilômetros.')
            break
        default:
            alert('Opção inválida.')
            break
    }
}
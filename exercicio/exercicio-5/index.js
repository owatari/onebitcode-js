document.getElementById('menu').onclick = function() {
    let opt = parseFloat(prompt('Olá operador, como posso lhe ajudar hoje?\n1 - Cadastrar usuário.\n2 - Remover usuário.\n3 - Cadastrar quarto.\n4 - Remover quarto.\n5 - Encerrar programa.'))

    do {
        switch (opt) {
            case 1:
                alert('Você cadastrou um usuário.')
                break
            case 2:
                alert('Você removeu um usuário.')
                break
            case 3:
                alert('Você cadastrou um quarto.')
                break
            case 4:
                alert('Você removeu um quarto.')
                break
            default:
                alert('Opção inválida, tente novamente.')
                break
        }
        opt = parseFloat(prompt('Qual função devo realizar agora?\n1 - Cadastrar usuário.\n2 - Remover usuário.\n3 - Cadastrar quarto.\n4 - Remover quarto.\n5 - Encerrar programa.'))
    } while (opt !== 5)
    alert('O sistema está sendo encerrado...')
}

document.getElementById('control').onclick = function() {
    let quantity = parseFloat(prompt('Olá operador, qual a quantia inicial de dinheiro disponível?'))
    let opt = parseFloat(prompt('Operador, você possui: $' + quantity + '. Gostaria de:\n1 - Adicionar valor.\n2 - Remover valor.\n3 - Encerrar programa.'))

    do {
        switch (opt) {
            case 1:
                quantity += parseFloat(prompt('Quanto dinheiro  você gostaria de adicionar?'))
                break
            case 2:
                quantity -= parseFloat(prompt('Quanto dinheiro  você gostaria de adicionar?'))
                break
            default:
                alert('Opção inválida, tente novamente.')
                break
        }
        opt = parseFloat(prompt('Operador, você possui: $' + quantity + '. Gostaria de:\n1 - Adicionar valor.\n2 - Remover valor.\n3 - Encerrar programa.'))
    } while (opt !== 3)
    alert('O sistema está sendo encerrado...')
}
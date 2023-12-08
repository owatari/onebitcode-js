function getList(array) {
    let list = ''
    console.log(1)
    for (let i = 0; i < array.length; i++) {
        list += (i+1) + 'º - ' + array[i] + '\n'
    }
    return list
}

document.getElementById('wait').onclick = function() {
   const list = []
   let prompiti = parseFloat(prompt('Olá, seja bem-vindo ao sistema de atendimento virtual.' + (list.length === 0 ? '\nNo momento não há nenhum paciente.' : getList(list)) + '\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Encerrar programa'))
   while (prompiti !== 3) {
        switch (prompiti) {
            case 1:
                list.push(prompt('Insira o nome do paciente à aguardar na fila.'))
                getList(list)
                break
            case 2:
                if (list.length <= 0) {alert('Nenhum paciente à ser atendido.'); break}
                alert('O paciente ' + list.shift() + ' sera atendido agora.')
                getList(list)
                break
            default:
                alert('Opção inválida')
                break
        }
        prompiti = parseFloat(prompt('Como posso lhe ajudar agora?' + (list.length === 0 ? '\nNo momento não há nenhum paciente.' : '\nNo momento a fila contem os seguintes pacientes:\n\n' + getList(list)) + '\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Encerrar programa'))
   }

   alert('Encerrando o programa...')
}

document.getElementById('pile').onclick = function() {
   const list = []
   let prompiti = parseFloat(prompt('Olá, seja bem-vindo ao sistema de baralho virtual.' + (list.length === 0 ? '\nNo momento não há nenhuma carta no baralho.' : '\nNo momento há ' + list.length +  ' cartas no baralho.') + '\n1 - Adicionar uma carta.\n2 - Puxar uma carta\n3 - Sair'))
   while (prompiti !== 3) {
        switch (prompiti) {
            case 1:
                list.unshift(prompt('Insira o nome da carta a ser adicionada.'))
                break
            case 2:
                if (list.length <= 0) {alert('Nenhuma carta no baralho.'); break}
                alert('A carta ' + list.shift() + ' foi puxada.')
                break
            default:
                alert('Opção inválida')
                break
        }
        prompiti = parseFloat(prompt('Olá, seja bem-vindo ao sistema de baralho virtual.' + (list.length === 0 ? '\nNo momento não há nenhuma carta no baralho.' : '\nNo momento há ' + list.length +  ' cartas no baralho.') + '\n1 - Adicionar uma carta.\n2 - Puxar uma carta\n3 - Sair'))
   }

   alert('Encerrando o programa...')
}

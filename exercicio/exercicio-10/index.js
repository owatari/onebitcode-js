document.getElementById('start').onclick = function() {
   startProgram(parseFloat(prompt('Olá, seja bem-vindo(a) ao sistema de vagas de emprego. Como posso lhe ajudar?\n\n1 - Listar vagas disponíveis.\n2 - Criar uma nova vaga.\n3 - Visualizar uma vaga.\n4 - Inscrever um cadidato em uma vaga.\n5 - Excluir uma vaga.\n6 - Sair.')))
}

function startProgram(choice) {
    if (choice === 6) {alert('Programa sendo encerrado...'); return}
    switch (choice) {
        case 1:
            jobs.List()
            break
        case 2:
            jobs.Create()
            break
        case 3:
            jobs.Check()
            break
        case 4:
            jobs.Register()
            break
        case 5:
            jobs.Delete()
            break
        case 6:
            break
        default:
            alert('Opção inválida')
            break
    }
    startProgram(parseFloat(prompt('Olá, seja bem-vindo(a) ao sistema de vagas de emprego. Como posso lhe ajudar?\n\n1 - Listar vagas disponíveis.\n2 - Criar uma nova vaga.\n3 - Visualizar uma vaga.\n4 - Inscrever um cadidato em uma vaga.\n5 - Excluir uma vaga.\n6 - Sair.')))
}

let jobs = {
    List() {
        let txt = 'Vagas disponíveis:\n'
        this.vagas.forEach(function (element, index, array) {
            txt += '#' + index + "- Nome: " + element.nome + ' - Candidatos Inscritos: ' + element.subs.length + '\n'
        })
        alert(txt)
    },
    Create() {
        let obj = {nome: prompt('Qual o nome da vaga?'), desc: prompt('Qual a descrição da vaga?'), limit: prompt('Qual a data limite da vaga? (DD/MM/AAAA)'), subs: []}
        confirm('Você gostaria de salvar a seguinte vaga?\n\nNome: ' + obj.nome + '\nDescrição: ' + obj.desc + '\nData Limite: ' + obj.limit) ? this.vagas[this.vagas.length] = obj : alert('Você cancelou a operação.')
    },
    Check() {
        let a = parseFloat(prompt('Informe o índice da vaga a ser consultada.'))
        b = this.vagas[a]
        b ? alert('#' + a + ' - ' + b.nome + '\n\tDescrição: ' + b.desc + '\n\tData Limite: ' + b.limit + '\n\tQuantidade de candidatos inscritos: ' + b.subs.length) : alert('Esta vaga não existe.')
    },
    Register() {
        let obj = {nome: prompt('Qual o nome do candidato?')}
        let a = parseFloat(prompt('Qual o índice da vaga?'))
        if (this.vagas[a]) {
            confirm('Você quer registrar o candidato: ' + obj.nome + ' na vaga: ' + this.vagas[a].nome) ? this.vagas[a].subs[this.vagas[a].subs.length] = obj : alert('Você cancelou a operação.')
        } else {
            alert('Índice incorreto.')
        }
    },
    Delete() {
        let a = parseFloat(prompt('Qual o índice da vaga?'))
        if (this.vagas[a]) {
            confirm('Você quer deletar a vaga: ' + this.vagas[a].nome) ? this.vagas.splice(a, 1) : alert('Você cancelou a operação.')
        } else {
            alert('Índice incorreto.')
        }
    },
    vagas: [],
}

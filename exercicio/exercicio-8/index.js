document.getElementById('register').onclick = function() {
   let mainList = []
   let prom = parseFloat(prompt('Olá, seja bem-vindo ao sistema de cadastro de imóveis.' + (mainList.length === 0 ? '\n\nNo momento não há nenhum imóvel cadastrado.' : 'No momento possuimos ' + mainList.length + ' imóveis cadastrados.') + '\n\n1 - Novo Imóvel\n2 - Consultar imóveis\n3 - Encerrar programa'))
   
   do {
        switch (prom) {
            case 1:
                let list = {}
                console.log(mainList.length)
                list.proprietario = prompt('Insira o nome do proprietario.')
                list.quartos = prompt('Insira a quantidade de quartos.')
                list.banheiros = prompt('Insira a quantidade de banheiros')
                list.garagem = confirm('O imóvel possui garagem.')
                mainList.push(list)
                break
            case 2:
                if (mainList.length <= 0) { alert('Não há imóveis  cadastrados.'); break}
                let imoStr = ''
                for (let i = 0; i < mainList.length; i++) {
                    imoStr += '\n\nImóvel #' + (i+1) + '\n\tNome do proprietário: ' + mainList[i].proprietario + '\n\tNúmero de quartos: ' + mainList[i].quartos + '\n\tNúmero de  banheiros: ' + mainList[i].banheiros + '\n\tPossúi garagem: ' + (mainList[i].banheiros ? 'Sim' : 'Não')
                }
                alert(imoStr)
                break
            case 3:
                alert('Encerrando o programa...')
                break
            default:
                alert('Opção inválida.')
                break
        }
        prom = parseFloat(prompt('O que gostaria de consultar agora?' + (mainList.length === 0 ? '\n\nNo momento não há nenhum imóvel cadastrado.' : 'No momento possuimos ' + mainList.length + ' imóveis cadastrados.') + '\n\n1 - Novo Imóvel\n2 - Consultar imóveis\n3 - Encerrar programa'))
   } while (prom !== 3)
}
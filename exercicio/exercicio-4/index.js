document.getElementById('init').onclick = function() {
    let name = prompt('Olá turista, qual o seu NOME?')
    let visit = confirm(name + ', você já visitou alguma cidade?')
    let cities = ''

    while (visit) {
        cities += (prompt('Qual o nome da cidade que você visitou?')) + '.\n'
        visit = confirm('Você visitou alguma outra cidade?')
    }

    alert(name + ', você visitou as seguintes cidades:\n' + cities)
}
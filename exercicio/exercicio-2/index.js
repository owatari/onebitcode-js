document.getElementById('test').onclick = function() {
    const name1 = prompt('Nome do primeiro veículo:')
    const vel1 = prompt('Velocidade do primeiro veículo:')
    const name2 = prompt('Nome do segundo veículo:')
    const vel2 = prompt('Velocidade do segundo veículo:')
    alert((parseFloat(vel1) > parseFloat(vel2) ? name1 : parseFloat(vel1) === parseFloat(vel2) ? 'Both have the same speed' : name2))
}

document.getElementById('calc').onclick = function() {
    const attackerName = prompt('Nome do pokémon atacante:')
    const attackerDmg = prompt('Dano do pokémon atacante:')
    const defenderName = prompt('Nome do pokémon defensor:')
    let defenderHp = prompt('Vida do pokémon defensor:')
    const defenderDef = prompt('Defesa do pokémon defensor:')
    const defenderShield = confirm('O pokémon defensor tem escudo?')
    let dmgDealt = 0
    if (attackerDmg > defenderDef && !defenderShield) {
        dmgDealt = (attackerDmg - defenderDef)
    } else if (attackerDmg > defenderDef && defenderShield) {
        dmgDealt = (attackerDmg - defenderDef) / 2
    } else if (attackerDmg < defenderDef) {
        dmgDealt = 0
    }
    alert(
        'Nome do pokémon atacante: ' + attackerName + 
        '\nDano do pokémon atacante: ' + attackerDmg + 
        '\nNome do pokémon  defensor: ' + defenderName + 
        '\nVida do pokémon defensor: ' + defenderHp + 
        '\nDefesa do pokémon defensor: ' + defenderDef + 
        '\nPokemon defensor tem escudo: ' + (defenderShield ? 'Possui' : 'Não possui') + 
        '\n----------------------------' + 
        '\nDano causado causado em batalha: ' + dmgDealt + (dmgDealt > 0 ? '\nNova vida do pokémon defensor: ' + (defenderHp - dmgDealt) : '')
    )
}
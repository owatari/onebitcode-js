let devs = []

document.getElementById('techAdd').addEventListener('click', function (ev) {
    ev.preventDefault()
    const div = document.createElement('div')
    const nameLabel = document.createElement('label')
    nameLabel.innerText = 'Nome da Tecnologia: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'newTech'
    nameInput.className = 'save'
    nameInput.id = 'newTech' + document.getElementsByName('newTech').length
    const expLabel = document.createElement('label')
    expLabel.innerText = 'Tempo de Experiência:'

    document.querySelector('form').firstElementChild.insertAdjacentElement("afterend", div)
    div.appendChild(document.createElement('br'))
    div.appendChild(document.createElement('br'))
    div.appendChild(nameLabel)
    nameLabel.appendChild(nameInput)
    div.appendChild(document.createElement('br'))
    div.appendChild(expLabel)
    expLabel.appendChild(document.createElement('br'))

    for (let i = 1; i <= 3; i++) {
        const label = document.createElement('label')
        label.innerText = (i === 1) ? '0 - 2 anos.\n' : (i === 2) ? '3 - 4 anos.\n' : '5+ anos.\n'
        label.htmlFor = 'expTime' + (document.querySelectorAll('input[type=radio]').length + 1)
        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.className = 'expTime' + i
        radio.name = 'expTime' + (i === 1 ? document.querySelectorAll('.expTime1').length + 1 : document.querySelectorAll('.expTime1').length)
        radio.id = 'expTime' + (document.querySelectorAll('input[type=radio]').length + 1)
        radio.value = i

        div.appendChild(radio)
        div.appendChild(label)
    }

    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.id = 'btnRemove'
    btn.innerText = 'Remover Tecnologia'
    btn.addEventListener('click', function (ev) {
        ev.preventDefault()
        this.parentElement.parentElement.getElementsByTagName('div')[1].remove()
    })

    div.appendChild(document.createElement('br'))
    div.appendChild(btn)
    div.appendChild(document.createElement('hr'))
})

document.getElementById('devSave').addEventListener('click', function (ev) {
    ev.preventDefault()
    let obj ={}
    document.querySelectorAll('[class=save]').forEach(function (it){
        obj[it.id] = it.value
    })
    document.querySelectorAll('input[type=radio]').forEach(function (it){
        if (it.checked) {
            obj[it.name] = it.className
        }
    })
    devs.push(obj)

    document.querySelectorAll('input[type=text]').forEach(function (it) {
        it.value = ''
    })
    document.querySelectorAll('input[type=radio]').forEach(function (it) {
        it.checked = false
    })

    if (devs.length > 0) {
        if (document.querySelector('div[id=registered] > ul')) {
            document.querySelectorAll('div[id=registered] > ul').forEach(function (it) {
                it.parentElement.removeChild(it)
            })
        }
        for (let i = 0; i < devs.length; i++) {
            const a = document.createElement('ul')
            const b = document.createElement('h4')
            b.innerText = devs[i].devName
            let x = 0
            document.getElementById('registered').appendChild(a)
            a.appendChild(b)
            while (devs[i]['newTech'+x]) {
                const c = document.createElement('li')
                c.innerText = 'Tecnologia: ' + devs[i]['newTech'+x] + ' - Experiência: ' + (devs[i]['expTime'+(x+1)] === 'expTime1' ? '0 à 2 anos.' : devs[i]['expTime'+(x+1)] === 'expTime2' ? '3 à 4 anos.' : '5 anos ou mais.')
                x += 1
                b.appendChild(c)
            }  
        }
    }
})


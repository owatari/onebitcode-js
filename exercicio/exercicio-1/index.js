document.getElementById("register").onclick = function() {
    let firstName = prompt('Your name')
    let lastName = prompt('Your last name')
    let study = prompt('Your area')
    let birth = prompt('Year of Birth')
    let currentDate = new Date()
    alert('Your name is ' + firstName + ' ' + lastName + ', you are ' + (currentDate.getFullYear() - birth) + ' years old and your study area is: ' + study)
}

document.getElementById('calc').onclick = function() {
    let num1 = prompt('First Number')
    let num2 = prompt('Second Number')
    alert(
        num1 + ' + ' + num2 + ' equals ' + (parseFloat(num1) + parseFloat(num2)) + '\n' +
        num1 + ' - ' + num2 + ' equals ' + (parseFloat(num1) - parseFloat(num2)) + '\n' +
        num1 + ' * ' + num2 + ' equals ' + (parseFloat(num1) * parseFloat(num2)) + '\n' +
        num1 + ' / ' + num2 + ' equals ' + (parseFloat(num1) / parseFloat(num2))
    )
}
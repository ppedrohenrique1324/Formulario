
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordTwo = document.getElementById('passwordTwo')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})


function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordTwoValue = passwordTwo.value.trim()
}

if (usernameValue === '') {
    errorValidation(username, 'Preencha esse campo');
} else {
    successValidation(username);
}

if (emailValue === '') {
    errorValidation(email, 'Preencha esse campo')
} else {
    successValidation(email)
}


function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(small)

    small.innertext = message

    formControl.classeName = 'form-control error'
}
function sucessValidation(input) {

    const formControl = input.parentElement;

    formControl.classeName = 'formControl sucess'
}
if (emailValue === '') {
    errorValidation('email, Preencha esse campo')
} else {
    sucessValidation(email)
}


if (passwordValue === '') {
    errorValidation(passaword, 'Prencha esse campo')

} else if (passawordvalue.length < 8) {
    errorValidation(passaword, 'A senha deve ter + de 8 caracteres')
} else {
    sucessValidation(passaword)
}

function errorValidation(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    if (small) {  // Verifica se o elemento small existe
        small.innerText = message
    }
    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

let username = document.getElementById('username')
let password = document.getElementById('password')
let passError = document.querySelector('.pass span')
let logIn = document.querySelector('.login')
let form = document.querySelector('form')

username.addEventListener('change', () => {
    checkUsername(username, 2)
})

password.addEventListener('change', () => {
    checkPassword(password, 7)
})


let checkUsername = (el, morethan = 1) => {
    let value = el.value
    let parent = el.parentElement
    let isUsernameType = /^[A-Za-z][A-Za-z0-9]*$/.test(value)
    if (value === '') {
        parent.classList.add('error')
    } else if (value.length > morethan && isUsernameType) {
        parent.classList.remove('error')
    } else {
        parent.classList.add('error')
    }
}


let checkPassword = (el, morethan = 7) => {
    let value = el.value
    let parent = el.parentElement

    if (value === '' || value.length <= morethan) {
        parent.classList.add('error')
        // passError.innerText = ''
        passError.innerText = 'Password Must Be Longer Than 7 Characters'
    } else if (value.length > morethan) {
        parent.classList.remove('error')
    } else {
        parent.classList.add('error')
    }
}



logIn.addEventListener('click', (e) => {
    e.preventDefault()

    checkUsername(username, 2)
    checkPassword(password, 7)

    let errors = form.querySelectorAll('.error')
    errors = [...errors]

    if (!errors[0]) {
        window.location.pathname = 'Smartacademy-front-js/profile.html'
    }
})
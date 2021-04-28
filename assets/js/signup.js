let form = document.querySelector('form')
let firstName = document.getElementById('name')
let lastName = document.getElementById('last_name')
let userName = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPass = document.getElementById('conf_pass')
let agreeInput = document.getElementById('check')


firstName.addEventListener('change', () => {
    checkLength(firstName)
})

lastName.addEventListener('change', () => {
    checkLength(lastName, 2)
})

userName.addEventListener('change', () => {
    checkUsername(userName, 2)
})

email.addEventListener('change', () => {
    checkEmail(email)
})

password.addEventListener('change', () => {
    checkLength(password)
})

confirmPass.addEventListener('change', () => {
    checkRepeatPassword(confirmPass, password)
})


const checkLength = (el, morethan = 1) => {
    let value = el.value
    let parent = el.parentElement
    if (value === '') {
        parent.classList.add('invalid')
        parent.classList.remove('invalid-shown')
    } else if (value.length > morethan) {        
        parent.classList.remove('invalid')
        parent.classList.remove('invalid-shown')
    } else {
        parent.classList.add('invalid')
        parent.classList.add('invalid-shown')
    }
}

const checkUsername = (el, morethan = 1) => {
    let value = el.value
    let parent = el.parentElement
    let isUsernameType = /^[A-Za-z][A-Za-z0-9]*$/.test(value)
    if (value === '') {
        parent.classList.add('invalid')
        parent.classList.remove('invalid-shown')
    } else if (value.length > morethan && isUsernameType) {        
        parent.classList.remove('invalid')
        parent.classList.remove('invalid-shown')
    } else {
        parent.classList.add('invalid')
        parent.classList.add('invalid-shown')
    }
}

const checkEmail = (el) => {
    let value = el.value
    let parent = el.parentElement
    let isEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(value)
    if (value === '') {
        parent.classList.add('invalid')
        parent.classList.remove('invalid-shown')
    } else if (isEmail) {        
        parent.classList.remove('invalid')
        parent.classList.remove('invalid-shown')
    } else {
        parent.classList.add('invalid')
        parent.classList.add('invalid-shown')
    }
}

const checkRepeatPassword = (el, passwordToCheck) => {
    let value = el.value
    let passToCheckValue = passwordToCheck.value
    let parent = el.parentElement
    if (value === '') {
        parent.classList.add('invalid')
        parent.classList.remove('invalid-shown')
    } else if (value === passToCheckValue) {        
        parent.classList.remove('invalid')
        parent.classList.remove('invalid-shown')
    } else {
        parent.classList.add('invalid')
        parent.classList.add('invalid-shown')
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkLength(firstName)
    checkLength(lastName, 2)
    checkUsername(userName, 2)
    checkEmail(email)
    checkLength(password)
    checkRepeatPassword(confirmPass, password)

    let invalids = form.querySelectorAll('.invalid')
    invalids = [...invalids]

    if (!invalids[0] && agreeInput.checked) {
        if (window.location.pathname.includes('Smartacademy-front-js')) {
            window.location.pathname = 'Smartacademy-front-js/profile.html'
        } else {
            window.location.pathname = '/profile.html'
        }
    } else {
        invalids.forEach((invalid) => {
            invalid.classList.add('invalid-shown')
        })
    }
})


const arrow = document.querySelector('.down_arrow')
const dropDown = document.querySelector('.dropdown')
const addBtn = document.querySelector('.add')
const addTodo = document.querySelector('.todo_background')
const todoBack = document.querySelector('.todo_back')
const closeDiv = document.querySelector('.closeDiv')
const maximizeMenu = document.querySelector('.burger_menu')
const body = document.querySelector('body')
const minimizeMenu = document.querySelector('.display_menu')
const addTodoForm = document.getElementById('add_todo_form')
const addInput = document.querySelector('.addInput')
const pagUl = document.querySelector('.pagination ul')
const leftArrowPag = document.querySelector('.left_arrow')
const rightArrowPag = document.querySelector('.right_arrow')
// document.querySelector('.profile_username').innerText = username



arrow.addEventListener('click', (e) => {
    e.target.matches('.dropdown')
    dropDown.classList.toggle('selected')
})

addBtn.addEventListener('click', () => {
    addTodo.classList.add('selected')
})


closeDiv.addEventListener('click', () => {
    addTodo.classList.remove('selected')
    addInput.value = ''
})

todoBack.addEventListener('click', () => {
    addTodo.classList.remove('selected')
    addInput.value = ''
})

minimizeMenu.addEventListener('click', () => {
    body.classList.add('toggledMenu')   
})

maximizeMenu.addEventListener('click', () => {
    body.classList.remove('toggledMenu')
})


addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
})

const tbody = document.querySelector('tbody')

let todos
let currentPage = 1

const useTodos = async () => {
    todos = await getTodos()
    let isInt = Number.isInteger(todos.length / 10)

    let pages = isInt ? todos.length / 10 : Math.floor(todos.length / 10 + 1)
    
    console.log(todos[1])

    insertTodosInDOM(currentPage)
    
    for(let i = 1; i <= pages; i++) {
        const pagLi = document.createElement('li')
        pagLi.innerText = i
        pagLi.addEventListener('click', () => {
            document.querySelector('.pagination li.active').classList.remove('active')
            pagLi.classList.add('active')
            currentPage = Number(pagLi.innerText)
            insertTodosInDOM(currentPage)
        })
        pagUl.appendChild(pagLi)       
    }

    document.querySelector('.pagination li').classList.add('active')

}


const insertTodosInDOM = crpg => {
    tbody.innerHTML = ''
    for(let i = (crpg - 1) * 10; i < crpg * 10; i++) {      // i = 0; i < 10         // i = 10; i < 20
        if (!todos[i]) return
        let isCompleted = todos[i].completed
        let innerhtml = `
            <td>${todos[i].title}</td>
            <td class="complete">
                <span class="complete_state_svg"></span>
                <p>${isCompleted ? 'Completed' : 'Incomplete'}</p>
            </td>
            <td>jora</td>
            <td>${new Date(Date.now()).toLocaleDateString()}</td>
            <td>${new Date(Date.now()).toLocaleDateString()}</td>
            <td class="edit_delete">
                <div class="edit_bar">
                <div class="edit">Edit</div>
                <div class="delete">Delete</div>
                </div>
            </td>
        `
        let tr = document.createElement('tr')
        if (isCompleted) tr.classList.add('completed')
        tr.innerHTML = innerhtml
        tbody.appendChild(tr)

        let deleteBtn = tr.querySelector('.delete')

        deleteBtn.addEventListener('click', () => {
            tr.remove()
        })
    }
}



useTodos()

leftArrowPag.addEventListener('click', () => {
    let activeLi = document.querySelector('.pagination li.active')
    if (!activeLi || !activeLi.previousElementSibling) return
    activeLi.previousElementSibling.classList.add('active')
    activeLi.classList.remove('active')
    currentPage = Number(activeLi.previousElementSibling.innerText)
    insertTodosInDOM(currentPage)
})

rightArrowPag.addEventListener('click', () => {
    let activeLi = document.querySelector('.pagination li.active')
    if (!activeLi || !activeLi.nextElementSibling) return
    activeLi.nextElementSibling.classList.add('active')
    activeLi.classList.remove('active')
    currentPage = Number(activeLi.nextElementSibling.innerText)
    insertTodosInDOM(currentPage)
})


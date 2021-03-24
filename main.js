var ul = document.getElementById('ul')
var inputName = document.getElementById('name')
var inputPrice = document.getElementById('price')
var btn = document.getElementById('btn')
var form = document.getElementById('form')


var cart = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit()
})

var handleSubmit = () =>{
    var getInput = createInput()
    cart.push(getInput)

    // var oldLis = ul.querySelectorAll('li')
    // oldLis.forEach((each) => {
    //     each.remove()
    // })
    ul.innerHTML = ''
    ul.setAttribute('data-totalprice', 0)
    renderArray()
    console.log(cart)
    inputName.value = ''
    inputPrice.value = ''
}

var createInput = () => {
    var inputNameValue = inputName.value
    var inputPriceValue = inputPrice.value

    return {
        name: inputNameValue,
        price: Number(inputPriceValue)
    }
}


var renderArray = () => {
    cart.forEach((item) => {
        let i = cart.indexOf(item)
        var innerText = `
        <h3 class="name">Name: <span>${item.name}</span></h3>
        <h3 class="price">Price: <span>${item.price}</span></h3>
        <div class="delete">X</div>`

        var li = document.createElement('li')
        li.innerHTML = innerText

        ul.appendChild(li)

        ul.setAttribute('data-totalprice', Number(ul.getAttribute('data-totalprice')) + item.price)

        let deletebtn = li.querySelector('.delete')

        var cartItemPrice = cart[i].price
        deletebtn.addEventListener('click', () => {
            li.remove()
            ul.setAttribute('data-totalprice', Number(ul.getAttribute('data-totalprice')) - cartItemPrice)
            // cart.splice(i, 1)
            cart = cart.filter((filitem) => {
                return filitem != item
            }) 
        })
        
    })

}


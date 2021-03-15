// task 1

var name = "Smartacademy"

var reversedName = ""

for(var i = name.length - 1; i >= 0; i--){
    reversedName += name[i]
}

console.log(reversedName)


// task 2

var a = "123456789"

var digit = a.split('')

var newNumb = digit.map((i) => Number(i) ** Number(i));

console.log(newNumb)

// task 3




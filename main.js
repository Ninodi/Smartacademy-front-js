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

var b = "123456789"

var arrayNums = b.split('')

let result = []

arrayNums.forEach(each => {
    let arrayOfEach = []
    arrayNums.forEach(insideEach =>{
        let powered = Number(each) ** Number(insideEach)
        arrayOfEach.push(powered)
    })
    result.push(arrayOfEach)
})

console.log(result)


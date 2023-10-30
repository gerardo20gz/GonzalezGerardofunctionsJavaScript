//funcion retornar el numero mayor  

function getLergerInt(number1, number2) {
    if (number1 > number2) {
        return `el numero mayor es ${number1}`
    }else{
        return `el numero mayor es ${number2}`
    }
    
}

let numeroMayor = getLergerInt(7,12)
console.log(numeroMayor)
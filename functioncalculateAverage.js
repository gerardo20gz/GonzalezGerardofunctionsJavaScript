//funcion promedio de un arreglo 
function calculateAverage(numbers) {
    let longitud =  numbers.length
    let suma = 0  
   for (let i = 0; i < numbers.length; i++) {
       suma += numbers[i]   

    }
    return suma/longitud
}

const numeros = [1,2,3,4,5,6]
let promedio = calculateAverage(numeros)
console.log(promedio)

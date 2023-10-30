const limite = 8

function fibonacciSequence(limit) {

    if(limit == 0){
        return 0
    }else if(limit == 1){
       return 1
    }else{
        return fibonacciSequence(limit-1)+fibonacciSequence(limit-2)
    }
    
}

for (let i = 0; i <=limite; i++) {
let numero = fibonacciSequence(i)
console.log(numero)
    
}
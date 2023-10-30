function power(base, exponent) {
    //return Math.pow(base,exponent)
    if (exponent == 0){
         return 1
    }else{
         return base ** exponent
     }
}

let resultado =  power(2,7)
console.log(resultado)
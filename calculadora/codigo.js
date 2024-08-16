

let num1 = parseInt((prompt("ingrese numero 1")))
let num2 = parseInt((prompt("ingrese numero 2")))
let operacion = (prompt("ingrese operacion (+, -, *, /) "))
let resultado = calculadora(num1,num2, operacion);

function calculadora(num1,num2,operacion) {

    if (operacion =="+") {
        console.log(num1+num2)
    } if (operacion =="-"){
        console.log(num1-num2)
    } if (operacion =="*"){
        console.log(num1*num2)
    } if (operacion =="/"){
        console.log(num1/num2)
    }
}



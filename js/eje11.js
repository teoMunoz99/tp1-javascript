// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num;

num = parseInt(prompt("Digite el numero:"));

if(num % 2 === 0){
    console.log("El numero es divisible por:");
    console.log("2");
    if(num % 3 ===0){
        console.log("3");
    }
    if(num % 5 ===0){
        console.log("5");
    }
    if(num % 7 ===0){
        console.log("7");
    }
}else if(num % 3 === 0){
    console.log("El numero es divisible por:");
    console.log("3");
    if(num % 5 ===0){
        console.log("5");
    }
    if(num % 7 ===0){
        console.log("7");
    }
}else if(num % 5 === 0){
    console.log("El numero es divisible por:");
    console.log("5");
    if(num % 7 ===0){
        console.log("7");
    }
}else if(num % 7 === 0){
    console.log("El numero es divisible por 7");
}else{
    console.log("El numero ingresado no es divisible por 2, 3, 5 o 7");
}
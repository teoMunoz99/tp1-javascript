// 8.- Escribe un programa que pida un número y diga si es divisible por 2.

let num, resto;

num = parseInt(prompt("Digite el numero:"));

resto = num % 2;

if(resto === 0){
    document.write("El numero es divisible por 2");
}else{
    document.write("El numero no es divisible por 2");
}
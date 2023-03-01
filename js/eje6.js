// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1, num2;

num1 = parseInt(prompt("Digite el primer numero:"));
num2 = parseInt(prompt("Digite el segundo numero:"));

if( num1 === num2 ){
    document.write("Los numeros son iguales");
}else if(num1 > num2){
    document.write("El mayor es:" + num1);
}else{
    document.write("El mayor es:" + num2);
}
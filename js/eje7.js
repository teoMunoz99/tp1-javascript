//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1, num2, num3;

num1 = parseInt(prompt("Digite el primer numero:"));
num2 = parseInt(prompt("Digite el segundo numero:"));
num3 = parseInt(prompt("Digite el tercer numero:"));

if(num1 === num2 && num2 === num3){
    document.write("Los numeros son iguales");
}else{
    if(num1 > num2){
        if(num1>num3){
            document.write("El mayor es:" + num1);
        }else{
            document.write("El mayor es:" + num3);
        }
    }else if(num2 > num3){
        document.write("El mayor es:" + num2);
    }else{
        document.write("El mayor es:" + num3);
    }
}
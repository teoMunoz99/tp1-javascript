/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)*/

let contador, vocal = 0, frase = window.prompt('Ingrese una frase:'); // uso la variable vocal como bandera

for (contador = 0; contador < frase.length; contador++) {
    if (frase.charAt(contador) == "a" || frase.charAt(contador) == "e" || frase.charAt(contador) == "i" || frase.charAt(contador) == "o" || frase.charAt(contador) == "u") {
        console.log(frase.charAt(contador));
        vocal++;
    }
}

if(vocal === 0){
    console.log("La frase no contiene vocales");
}


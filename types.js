/*Imprimir impares 1-20 */
console.log("ejercicio 1");
for(var i=1; i<20; i+=2){
    console.log(i);
}
console.log("ejercicio 2");
/*Disminuir múltiplos de 3 */
for(var z=0; z<100; z++){
    if( z%3 === 0){
        console.log(z);
    }
    else{
    }
}
/*Imprime la secuencia */
console.log("ejercicio 3")
var x= 4;
while(x>-4){
    console.log(x);
    x -=1.5;
}

/*Sigma*/
console.log("ejercicio 4")
su = 0;
sum= 0;
while(su<=100){ 
    sum+= su ;
    su ++ ;
}
console.log(sum);
/*Factorial */
console.log("ejercicio 5")
numb = 1;
product = 1;
while(numb<=12){
    product *= numb;
    numb ++;
}
console.log(product);
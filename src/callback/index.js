function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

//Prueba de la funcion "setTimeout"

setTimeout(function(){
    console.log('Hola JavaScript');
},2000)

//La función setTimeout es un callback por definición
//La función debe pasar tres argumentos, una función, un tiempo de ejecución y los  argumentos que va a recibir la función que se le esta pasando.

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout (gretting, 2000, 'Carlos');
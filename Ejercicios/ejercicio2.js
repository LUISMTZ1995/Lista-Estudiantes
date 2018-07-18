console.log('Hola Mundo');
console.log(document.getElementById('square-test'));
//document.getElementById('square-test').addEventListener('click',function(){
//    document.getElementById('square-test').setAttribute('class', 'grande');
//});
//document.getElementById('square-test')
//document.getElementById('square-test').setAttribute('class', 'red-background');

//let valor1= 2;
//let valor2= 3;

//let sumaValores = valor1 + valor2;
// const valor1= 2;
// const valor2= 3;


// //const sumaValores = valor1 + valor2 + valor3 + valor4;
// console.log(sumaValores(valor1, valor2));

// const valor3= 4;
// const valor4= 5;
// console.log(sumaValores);

//console.log(sumaValores);
//const nombre = 'Luis';
//const saludo = `Hola${nombre}`;
//console.log(saludo);
//const texto1 = `hola${nombre}aaaasasasasas${valor2}}`;
//const texto2 = 'mundo';
//console.log( texto1, texto2);
//console.log( texto1 + texto2);
//var verdadero = true;
//var falso = false;

//console.log(verdadero , falso);

//let noDefinido;
//let nulo = null;

//console.log(noDefinido , nulo);

// const carro = {
//     color: 'rojo',
//     'carro-color': 'rojo',
//     dobleTraccion: false,
//     puertas: 4
// };
// carro.ventanas = 3;
// //console.log(carro, carro.color, carro['carro-rojo']);
// carro = 2;
// console.log(carro);
const carro0 = {
color: 'rojo',
dobleTraccion: false,
puertas: 4
}
const carro1 = {
    color: 'azul',
    dobleTraccion: true,
    puertas: 4
}
const carro2 = {
color: 'negro',
dobleTraccion: false,
puertas: 4
}
const carro3 = {
color: 'rojo',
dobleTraccion: true,
puertas: 2
}
const carro4 = {
color: 'amarillo',
dobleTraccion: false,
puertas: 2
}
const carro5 = {
color: 'amarillo',
dobleTraccion: false,
puertas: 2
}
// console.log(carro0, carro1, carro2, carro3, carro4);
var carros = [carro0, carro1, carro2, carro3, carro4];
// console.log(carros[2]);
// console.log(carros.length);
// carros.push(carro5);
// console.log( carros, carros.length);
// console.log(carros[0])
// console.log(carros[1])
// console.log(carros[2])
// console.log(carros[3])
// console.log(carros[4])
// console.log(carros[5])
// for(let i = 0; i< carros.length; i++){
//     console.log(carros[i]);
// }
/*carros.forEach(function(item, index, self){
    console.log(item);
    console.log(index);
    console.log(self);
    console.log('=========');
})*/
var numeros = [122, 6, 18, 43];
numeros.forEach(function(item, index){
    numeros[index] = modificar(item, function(valor){
        return valor / 2;
    });
    // numeros[index] = modificar(item / 2, function(sasasa){
    //     console.log(item);
    //     console.log(sasasa);
    //     console.log('=========');

    // });
});
console.log(numeros);
carros.forEach(function(carro){
    carro = modificar(carro, function(valor){
        valor.color = 'rojo';
        return valor;
    });
    console.log(carro)
});
function modificar(valor, modificador){
    return modificador(valor);
}
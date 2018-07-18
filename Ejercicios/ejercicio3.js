const squareEjercicio = document.getElementById('square-test');
const squareEjercicio2 = document.getElementById('square-log');
const boton = document.getElementById('reset');
squareEjercicio.addEventListener('click',function(evento){
    const span = document.createElement('span');
    span.innerText = evento.target.style.background;
    console.dir(span);
    //console.log(evento.target);
    //evento.target.style.background = 'brown';
    if(evento.target.style.background ==='brown'){
        evento.target.style.background = 'blue';
    }else{
        evento.target.style.background = 'brown';
    }
    squareEjercicio2.appendChild(span);
});
// function boton(){
//     location.reload();
// }
boton.addEventListener('click',function(evento){
    squareEjercicio2.innerText = null;
    squareEjercicio.style.background = 'white';
});
//document.getElementById('square-test').setAttribute('class', 'red-background');
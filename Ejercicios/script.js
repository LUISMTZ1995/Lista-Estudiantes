'use strict';
(() => {
    const bAppend = appendLI('becados');
    const aAppend = appendLI('asesorias');
    const rAppend = appendLI('reprobados');
    const alumnosState = alumnosService({alumnos:[]});
    // fetch('/cars')
    // .then((res)=> {
    //     return res.json()
    // })
    // .then((cars)=> {
    //     console.log(cars);
    //     const carsNames = cars.map((car)=>{
    //         return{
    //             nombre:car.name,
    //             precio: car.dollar_value * 18
    //         }
    //     });
    //     console.log(carsNames);
    // })
    fetch('/alumnos')
    .then((res)=> {
        return res.json()
    })
    .then((alumnos)=> {
        //alumnos.forEach(function(imprimirAlumnos){});
        document.getElementById('becados').innerHTML= '';
        document.getElementById('asesorias').innerHTML= '';
        document.getElementById('reprobados').innerHTML= '';
        alumnos.forEach(alumno => {
            // bAppend(alumno.nombre);
            // aAppend(alumno.nombre);
            // rAppend(alumno.nombre);
            if(alumno.promedio <= 30){
                rAppend(alumno.nombre);
            }
            if(alumno.promedio > 30 && alumno.promedio < 80){
                aAppend(alumno.nombre);
            }
            if(alumno.promedio >= 80 || alumno.promedio > 30 && alumno.destacado === true){
                bAppend(alumno.nombre);
            }
        }); 
        });
    
    //    console.log(estudiantesNames);
    
    // function imprimirAlumnos(alumnos){
    //     document.getElementById('becados').innerHTML= '';
    //     alumnos.forEach(alumno => {
    //         bAppend(alumno.nombre);
    //     });
    // }
    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();

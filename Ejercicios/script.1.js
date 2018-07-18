'use-strict';
(function(global){
    const stateGenerator = (initialState)=>{
        const state = initialState;
        return{
            getState: ()=> ({...state}),
            agregaAlumno:(alumno) => {state.alumnos.push(alumno)}
        }
    }
    global.window.stateGenerator = stateGenerator;
})(window);
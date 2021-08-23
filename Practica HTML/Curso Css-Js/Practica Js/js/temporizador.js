
// para que no se rompa si no hay que poner al final del html 
window.onload=function() {
    var temporizador ;
    var boton = document.getElementById('boton');
    function temporizador(){
        temporizador = setTimeout(function(){
            console.log ("ejecutando temporizador")
        }
    ),2000}
// tiempo en milisegundos
    boton.addEventListener('click',function(){
    console.log("boton pulsado");
    temporizador();
})
}

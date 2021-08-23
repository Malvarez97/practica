// documen Object manager

window.onload=function() {
    var boton =document.getElementById('boton');
    // por nombre de clase 
    var parrafos =document.getElementsByClassName('parrafo');
    parrafos[1].style.backgroundColor = "yellow";
    // por etiqueta
    var item = document.getElementsByTagName('li');
    item[1].innerHTML = "lo cambio";
    var elementos=Array.from(item);
    elementos.forEach(elemento=> console.log(elemento));
    // por identificador
    var titulo= document.getElementById('titulo');
    titulo.innerHTML='Otro titulo';
    boton.addEventListener('click',function(){
        console.log("pulsaste el boton");



    })



}
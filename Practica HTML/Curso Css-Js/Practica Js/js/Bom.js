// Browser Object Manager
window.onload= function(){
    // ventana navegagor
    console.log('Alto='+window.innerHeight);
    console.log('Ancho='+window.innerWidth);

    console.log('Alto='+screen.height);
    console.log('Ancho='+screen.width);
    // url actual
    console.log(window.location);
    // redirigir 
   // window.location.href = "https://www.google.com/";
    // abrir ventana emergente
    function abrirventana(url){
        window.open(url,"","width=400","height=600");
    }
    abrirventana("https://www.google.com/")
}
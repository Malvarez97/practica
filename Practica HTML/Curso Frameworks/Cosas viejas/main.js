var nombre = "hola";
var altura= 190;

document.write(nombre+altura);

var datos=document.getElementById("texto");
datos.innerHTML= ` 
<h1> a caja de datos </h1>
<h2>  descripcion a caja de datos </h2>  `
;

// ejemplo de JSON 
var coche ={
    modelo: 'Ford Focus',
    vel_maxima : 500,
    antiguedad : 0,
    mostrardatos(){
        console.log(coche)
    }
} ;
coche.mostrardatos();

// Promesas 
var saludar = new Promise ((resolve,reject) => {
    setTimeout(() =>{
        let saludo ="hola paadre";
        saludo =false;// para que retorne el error 
        if (saludo){
            resolve(saludo);
        }
        else{ 
        reject("no hay saludo")
        }
    },2000);// espero 2000 milisegundos 
});
saludar.then(resultado => { alert(resultado);})
// mando un error que no se recibio nada 
.catch(err => {
    alert(error);
});
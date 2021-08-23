const numeros = [];
const colores =['rojo','naranja','azul'];
console.log(colores);
// creo array con valores iguales
const seis =new Array(4).fill(6);
console.log(seis);
// añadir valores 
seis.push(10);
seis.push(12);
// eliminar primero 
seis.shift();
// mostrar
for (let i=0; i<seis.length;i++){
    console.log(seis[i]);
    console.log(seis.slice(1,3));
}
// otra formas de recorrer
for (color of colores){
    console.log(color);
}
for(i in colores){
    document.write("\n",i);
    document.write(colores[i]);
}
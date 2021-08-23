console.log("Indica el numero de linea \n");
console.log("1.cargar\n");
console.log("2.imprimir\n");
console.log("3.salir\n");
opcion =parseInt(prompt("dame una opcion"));
switch(opcion){
    case 1 :
        console.log("cargando");
        break;
    case 2 :
        console.log("imprimiendo");
        break;
    case 3 :
        console.log("me fui ");
        break;
    default :
        console.log("no pusiste la opcion correcta");
        break;
}
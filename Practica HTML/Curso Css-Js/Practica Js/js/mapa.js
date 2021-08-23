const numeros =[1,2,3];

const duplica = numeros.map(function(numero){
    return numero * 3;
} );
console.log(duplica);

// extraer solo numeros que cumplen con alguna condicion 
const pares = numeros.filter(function(numero){
    return numero<=2;
})
console.log(pares)

let suma =(num1,num2)=> num1+num2;
console.log(suma(5,6));

const escero =numero=>{
    if (numero == 0){
        return true;
    }
    return false;
}
console.log(escero(0));

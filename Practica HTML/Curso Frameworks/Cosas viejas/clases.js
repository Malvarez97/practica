class Coche {
    constructor(anio ){
        this.modelo=anio;
        this.vel_max=0;
    }
    aumentarVelocidad (){ this.vel_max =this.vel_max+5};

}
var coche1=new Coche(2020);
console.log(coche1);
coche1.aumentarVelocidad();
console.log(coche1);
document.write("<h1> velocidad:"+coche1.vel_max);
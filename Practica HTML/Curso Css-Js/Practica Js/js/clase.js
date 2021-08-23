class Coche{

    constructor(marca,motor,color){
        this.marca=marca;
        this.motor=motor;
        this._color=color;
        this._velocidad=0;
    }
    get Velocidad(){
        return this._velocidad;
    }
    set cambiacolor(color){
        this._color=color;
    }
}

class coche_rapidp extends Coche{
    constructor(marca,motor,color){
        super(marca,motor,color);
        this._velocidad=1000000;
    }

}

const Auto=new coche_rapidp("Seat","Falcon","Rojo");
console.log(Auto.Velocidad)
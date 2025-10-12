export default class cl_Vendedor{
    constructor (cedula,montoTotalVentas,sueldoBase){
        this.cedula=cedula;
        this.montoTotalVentas=montoTotalVentas;
        this.sueldoBase=sueldoBase;
    }
    set cedula(c){
        this.cedula=c;
    }
    get cedula(){
        return this._cedula;
    }
    set montoTotalVentas(m){
        this.montoTotalVentas=m;
    }
    get montoTotalVentas(){
        return this._montoTotalVentas;
    }
    set sueldoBase(s){
        this.sueldoBase=s;
    }
    get sueldoBase(){
        return this._sueldoBase;
    }

//principal.js
comision (){
    return this.montoTotalVentas*20/100
}
sueldoFinal(){
    return this.sueldoBase+this.comision();
}
//cierre de la clase
}

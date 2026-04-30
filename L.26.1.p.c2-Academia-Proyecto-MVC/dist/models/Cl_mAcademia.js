export default class Cl_mAcademia {
    constructor() {
        this.recaudadoTotal = 0;
        this.cntIngles = 0;
        this.cntComputacion = 0;
        this.cntIA = 0;
        this.cntMenorEdad = 0;
        this.cntAdulto = 0;
        this.cntTerceraEdad = 0;
        this.inscritosTotal = 0;
        this.acEdades = 0;
        this.cntMayoresEdad = 0;
    }
    procesarInscrito(ins) {
        this.recaudadoTotal += ins.pagoFinal();
        this.acEdades += ins.calcularEdad();
        this.inscritosTotal++;
        const edad = ins.calcularEdad();
        if (edad >= 18)
            this.cntMayoresEdad++;
        switch (ins.tipoCurso) {
            case 1:
                this.cntIngles++;
                break;
            case 2:
                this.cntComputacion++;
                break;
            case 3:
                this.cntIA++;
                break;
        }
        if (edad < 18)
            this.cntMenorEdad++;
        else if (ins.sexo === "F" && edad > 50)
            this.cntTerceraEdad++;
        else if (ins.sexo === "M" && edad > 60)
            this.cntTerceraEdad++;
        else
            this.cntAdulto++;
    }
    totalRecaudado() { return this.recaudadoTotal; }
    cantIngles() { return this.cntIngles; }
    cantComputacion() { return this.cntComputacion; }
    cantIA() { return this.cntIA; }
    cantMenorEdad() { return this.cntMenorEdad; }
    cantAdulto() { return this.cntAdulto; }
    cantTerceraEdad() { return this.cntTerceraEdad; }
    totalInscritos() { return this.inscritosTotal; }
    cantMayoresEdad() { return this.cntMayoresEdad; }
    porcIngles() {
        return this.inscritosTotal === 0 ? 0 : (this.cntIngles / this.inscritosTotal) * 100;
    }
    porcComputacion() {
        return this.inscritosTotal === 0 ? 0 : (this.cntComputacion / this.inscritosTotal) * 100;
    }
    porcIA() {
        return this.inscritosTotal === 0 ? 0 : (this.cntIA / this.inscritosTotal) * 100;
    }
    porcMenorEdad() {
        return this.inscritosTotal === 0 ? 0 : (this.cntMenorEdad / this.inscritosTotal) * 100;
    }
    porcAdulto() {
        return this.inscritosTotal === 0 ? 0 : (this.cntAdulto / this.inscritosTotal) * 100;
    }
    porcTerceraEdad() {
        return this.inscritosTotal === 0 ? 0 : (this.cntTerceraEdad / this.inscritosTotal) * 100;
    }
    promedioEdad() {
        return this.inscritosTotal === 0 ? 0 : this.acEdades / this.inscritosTotal;
    }
}

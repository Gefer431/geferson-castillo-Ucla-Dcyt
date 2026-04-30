import Cl_mInscrito from "./Cl_mInscrito.js";

export default class Cl_mAcademia {
    private recaudadoTotal: number;
    private cntIngles: number;
    private cntComputacion: number;
    private cntIA: number;
    private cntMenorEdad: number;
    private cntAdulto: number;
    private cntTerceraEdad: number;
    private inscritosTotal: number;
    private acEdades: number;
    private cntMayoresEdad: number;   // ✅ contador mayores de edad

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

    procesarInscrito(ins: Cl_mInscrito): void {
        this.recaudadoTotal += ins.pagoFinal();
        this.acEdades += ins.calcularEdad();
        this.inscritosTotal++;

        const edad = ins.calcularEdad();
        if (edad >= 18) this.cntMayoresEdad++;

        switch (ins.tipoCurso) {
            case 1: this.cntIngles++; break;
            case 2: this.cntComputacion++; break;
            case 3: this.cntIA++; break;
        }

        if (edad < 18) this.cntMenorEdad++;
        else if (ins.sexo === "F" && edad > 50) this.cntTerceraEdad++;
        else if (ins.sexo === "M" && edad > 60) this.cntTerceraEdad++;
        else this.cntAdulto++;
    }

    totalRecaudado(): number { return this.recaudadoTotal; }
    cantIngles(): number { return this.cntIngles; }
    cantComputacion(): number { return this.cntComputacion; }
    cantIA(): number { return this.cntIA; }
    cantMenorEdad(): number { return this.cntMenorEdad; }
    cantAdulto(): number { return this.cntAdulto; }
    cantTerceraEdad(): number { return this.cntTerceraEdad; }
    totalInscritos(): number { return this.inscritosTotal; }
    cantMayoresEdad(): number { return this.cntMayoresEdad; }   

    porcIngles(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntIngles / this.inscritosTotal) * 100;
    }
    porcComputacion(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntComputacion / this.inscritosTotal) * 100;
    }
    porcIA(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntIA / this.inscritosTotal) * 100;
    }
    porcMenorEdad(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntMenorEdad / this.inscritosTotal) * 100;
    }
    porcAdulto(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntAdulto / this.inscritosTotal) * 100;
    }
    porcTerceraEdad(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntTerceraEdad / this.inscritosTotal) * 100;
    }
    promedioEdad(): number {
        return this.inscritosTotal === 0 ? 0 : this.acEdades / this.inscritosTotal;
    }
}
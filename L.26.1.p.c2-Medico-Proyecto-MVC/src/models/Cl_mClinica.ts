import Cl_mPaciente from "./Cl_mPaciente.js";

export default class Cl_mClinica {
    private recaudadoTotal: number = 0;
    private cntProcedimiento: number = 0;
    private cntConsulta: number = 0;
    private cntControl: number = 0;
    private cntDescuento: number = 0;
    private pacientesTotal: number = 0;
    private acPeso: number = 0;      // nuevo

    procesarPaciente(pac: Cl_mPaciente): void {
        const pago = pac.pagoFinal();
        this.recaudadoTotal += pago;
        this.pacientesTotal++;
        this.acPeso += pac.peso;     // sumar peso

        switch (pac.tipoAtencion) {
            case 1: this.cntProcedimiento++; break;
            case 2: this.cntConsulta++; break;
            case 3: this.cntControl++; break;
        }
        if (pac.descuento() > 0) this.cntDescuento++;
    }

    // Getters existentes
    totalRecaudado(): number { return this.recaudadoTotal; }
    cantProcedimiento(): number { return this.cntProcedimiento; }
    cantConsulta(): number { return this.cntConsulta; }
    cantControl(): number { return this.cntControl; }
    totalPacientes(): number { return this.pacientesTotal; }
    cantDescuento(): number { return this.cntDescuento; }

    porcProcedimiento(): number {
        if (this.pacientesTotal === 0) return 0;
        return (this.cntProcedimiento / this.pacientesTotal) * 100;
    }
    porcConsulta(): number {
        if (this.pacientesTotal === 0) return 0;
        return (this.cntConsulta / this.pacientesTotal) * 100;
    }
    porcControl(): number {
        if (this.pacientesTotal === 0) return 0;
        return (this.cntControl / this.pacientesTotal) * 100;
    }
    porcDescuento(): number {
        if (this.pacientesTotal === 0) return 0;
        return (this.cntDescuento / this.pacientesTotal) * 100;
    }
    promedioPeso(): number {               // nuevo
        return this.pacientesTotal === 0 ? 0 : this.acPeso / this.pacientesTotal;
    }
}
export default class Cl_mClinica {
    constructor() {
        this.recaudadoTotal = 0;
        this.cntProcedimiento = 0;
        this.cntConsulta = 0;
        this.cntControl = 0;
        this.cntDescuento = 0;
        this.pacientesTotal = 0;
        this.acPeso = 0; // nuevo
    }
    procesarPaciente(pac) {
        const pago = pac.pagoFinal();
        this.recaudadoTotal += pago;
        this.pacientesTotal++;
        this.acPeso += pac.peso; // sumar peso
        switch (pac.tipoAtencion) {
            case 1:
                this.cntProcedimiento++;
                break;
            case 2:
                this.cntConsulta++;
                break;
            case 3:
                this.cntControl++;
                break;
        }
        if (pac.descuento() > 0)
            this.cntDescuento++;
    }
    // Getters existentes
    totalRecaudado() { return this.recaudadoTotal; }
    cantProcedimiento() { return this.cntProcedimiento; }
    cantConsulta() { return this.cntConsulta; }
    cantControl() { return this.cntControl; }
    totalPacientes() { return this.pacientesTotal; }
    cantDescuento() { return this.cntDescuento; }
    porcProcedimiento() {
        if (this.pacientesTotal === 0)
            return 0;
        return (this.cntProcedimiento / this.pacientesTotal) * 100;
    }
    porcConsulta() {
        if (this.pacientesTotal === 0)
            return 0;
        return (this.cntConsulta / this.pacientesTotal) * 100;
    }
    porcControl() {
        if (this.pacientesTotal === 0)
            return 0;
        return (this.cntControl / this.pacientesTotal) * 100;
    }
    porcDescuento() {
        if (this.pacientesTotal === 0)
            return 0;
        return (this.cntDescuento / this.pacientesTotal) * 100;
    }
    promedioPeso() {
        return this.pacientesTotal === 0 ? 0 : this.acPeso / this.pacientesTotal;
    }
}

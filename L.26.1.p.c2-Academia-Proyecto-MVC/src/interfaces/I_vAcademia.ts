export interface I_vAcademia {
    onNuevoInscrito(callback: () => void): void;
    reportarEstadisticas(
        total: number,
        cantIng: number,
        cantComp: number,
        cantIA: number,
        porcIng: number,
        porcComp: number,
        porcIA: number,
        cantMenor: number,
        cantAdulto: number,
        cantTercera: number,
        porcMenor: number,
        porcAdulto: number,
        porcTercera: number,
        cantMayores: number,   
        promedioEdad: number
    ): void;
}
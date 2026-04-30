export interface I_vClinica {
    onNuevoPaciente(callback: () => void): void;
    reportarEstadisticas(
        total: number,
        totProc: number, totCons: number, totCtrl: number,
        porcProc: number, porcCons: number, porcCtrl: number,
        porcDesc: number,
        promedioPeso: number   
    ): void;
}
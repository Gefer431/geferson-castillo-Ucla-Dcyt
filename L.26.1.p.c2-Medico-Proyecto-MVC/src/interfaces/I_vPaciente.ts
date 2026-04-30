export interface I_vPaciente {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string;
    get sexo(): string;
    get fechaNacimiento(): string;
    get tipoAtencion(): number;
    get peso(): number;        // nuevo

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;
    limpiarFormulario(): void;
    mostrarMensaje(texto: string): void;

    agregarAFila(nombre: string, apellido: string, tipo: number, pago: number): void;
}
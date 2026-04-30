export interface I_vInscrito {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string;
    get sexo(): string;
    get fechaNacimiento(): string;
    get tipoCurso(): number;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;
    limpiarFormulario(): void;
    mostrarMensaje(texto: string): void;

    agregarAFila(nombre: string, apellido: string, tipoCurso: number, pago: number): void;
}
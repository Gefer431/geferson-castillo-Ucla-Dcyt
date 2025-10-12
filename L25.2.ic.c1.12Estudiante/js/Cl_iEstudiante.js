export default class Cl_iEstudiante{
    leerCedula(){
        return promt ("Cedula: ");
    }
    leerNota1(){
        return promt ("Nota 1: ");
    }
    leerNota2(){
        return promt ("Nota 2: ");
    }
    leerNota3(){
        return promt ("Nota 3: ");
    }
    repEstudiante(nF,r){
        return `NotaFinal;${nF}
        <br>Resultado:${r}`;
    }
}
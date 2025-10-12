
import Cl_Estudiante from "./Cl_Estudiante";
import Cl_iEstudiante from "./Cl_iEstudiante";

let iEstudiante=new Cl_iEstudiante,
  c=iEstudiante.leerCedula(),
  n1=iEstudiante.leerNota1(),
  n2=iEstudiante.leerNota2(),
  n3=iEstudiante.leerNota3(),

  estudiante=new Cl_Estudiante(c,n1,n2,n3),

  salda=document.getElementById("salida");

  salida.innerHTML=iEstudiante.repEstudiante(
    estudiante.notaFinal(),estudiante.resultado()
  );
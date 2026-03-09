import Cl_personas from "./Cl_personas.js";
import Cl_censo from "./Cl_censo.js";

const registro = new Cl_censo();

const personas = [
  { n: "Luis", e: "15" },
  { n: "Ana", e: "19" },
  { n: "José", e: "21" },
  { n: "Carmen", e: "17" },
  { n: "Rosa", e: "18" },
  { n: "José", e: "22" },
  { n: "María", e: "17" },
  { n: "Luz", e: "19" },
  { n: "Rafael", e: "23" },
  { n: "Liz", e: "15" },
  { n: "Marcos", e: "20" },
  { n: "Leo", e: "16" },
];

personas.forEach((data) => {
  let personas = new Cl_personas(data.n, +data.e);
  registro.procesarPersonas(personas);
});

let salida: HTMLElement | null = document.getElementById("salida");
if (salida) {
  salida.innerHTML = `
    Cantidad de personas: ${registro.totalPersonas()}<br>
    Cantidad de Mayores: ${registro.totalMayores()}<br>
    Porcentaje de personas Mayores: ${registro.porcentajeMayores()}
  `;
} else console.log(`No existe el div "salida"`);

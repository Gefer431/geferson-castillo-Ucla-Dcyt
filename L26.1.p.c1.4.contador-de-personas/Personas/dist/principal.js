import Cl_personas from "./Cl_personas.js";
import Cl_grupo from "./Cl_grupo.js";

const registro = new Cl_grupo();

const personas = [
    { n: "Luisa", s: "F" }, { n: "Ana", s: "F" }, { n: "José", s: "M" },
    { n: "Carmen", s: "F" }, { n: "Rosa", s: "F" }, { n: "José", s: "M" },
    { n: "María", s: "F" }, { n: "Luz", s: "F" }, { n: "Rafael", s: "M" },
    { n: "Liz", s: "F" }, { n: "Marcos", s: "M" }, { n: "Leo", s: "M" }
];

personas.forEach(data => {
    let p = new Cl_personas(data.n, data.s);
    registro.procesarPersonas(p);
});

const salida = document.getElementById("salida");
salida.innerHTML = `
    Cantidad de personas: ${registro.totalPersonas()}<br>
    Cantidad de hombres: ${registro.totalHombres()}<br>
    Cantidad de mujeres: ${registro.totalMujeres()}
`;
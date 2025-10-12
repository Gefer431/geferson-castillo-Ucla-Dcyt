//principal.js
import Cl_Vendedor from './Cl_Vendedor.js'
import Cl_iVendedor from './Cl_iVendedor.js'

let iVendedor = new Cl_iVendedor();
//lee la cedula y la guarda en c
c=iVendedor.leerCedula(),
m=iVendedor.leerMontoTotalVentas(),
sV=iVendedor.leerSueldoBase(),

Vendedor=new Cl_Vendedor
(c,m,sB),

salida=document.getElementById
("salida");
salida.innerHtml=iVendedor.repVendedor
  (vendedor.cedula,
    vendedor.comision(),
    vendedor.sueldoFinal()
  )

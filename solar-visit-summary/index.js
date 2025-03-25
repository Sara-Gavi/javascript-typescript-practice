// Lista simulada de visitas técnicas
const visitas = [
  { cliente: "Sara Gavilán", tipo: "Fotovoltaica", incidencia: false },
  {
    cliente: "Juanito Gómez",
    tipo: "Fotovoltaica con batería",
    incidencia: true,
  },
  { cliente: "Ana Soler", tipo: "Autoconsumo compartido", incidencia: false },
  { cliente: "Pedro Duque", tipo: "Fotovoltaica", incidencia: true },
  { cliente: "Lucía Montañas", tipo: "Mantenimiento", incidencia: false },
];

// Funcion para generar el resumen automático de las visitas

function generarResumen(visitas) {
  const resumen = {
    total: visitas.length,
    tipos: {},
    conIncidencias: 0,
  };

  visitas.forEach((v) => {
    resumen.tipos[v.tipo] = (resumen.tipos[v.tipo] || 0) + 1;
    if (v.incidencia) resumen.conIncidencias++;
  });
  return resumen;
}

// mostrar resumen en consola
const resultado = generarResumen(visitas);

console.log("resumen de visitas tecnicas:");
console.log(`Total de visitas: ${resultado.total}`);
console.log("Por tipo de instalación:");
for (let tipo in resultado.tipos) {
  console.log(`-${tipo}: ${resultado.tipos[tipo]}`);
}
console.log(`Con incidencia: ${resultado.conIncidencias}`);

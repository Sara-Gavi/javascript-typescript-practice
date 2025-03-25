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
}

//Función para crear el Rover con su posición inicial
function inicializarRover(x, y, direccion, tamañoMapa, obstaculos = []) {
  return {
    x: x, // guardamos la posición horizontal (columna)
    y: y, // guardamos la posición vertical (fila)
    direccion: direccion, // La dirección en la que mira ('N', 'S', 'E', 'W')
    tamañoMapa: tamañoMapa, // Guardamos tamaño del mapa (ejemplo: [5,5])
    obstaculos: obstaculos, // Guardamos los obstaculos (ejemplo: [{x:2, y:2}])
  };
}

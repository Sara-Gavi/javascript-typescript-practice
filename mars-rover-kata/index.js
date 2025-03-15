// Función para crear el Rover con su posición inicial
function inicializarRover(x, y, direccion, tamañoMapa, obstaculos = []) {
  return {
    x: x, // Guardamos la posición horizontal (columna)
    y: y, // Guardamos la posición vertical (fila)
    direccion: direccion, // Guardamos la dirección en la que mira ('N', 'S', 'E', 'W')
    tamañoMapa: tamañoMapa, // Guardamos el tamaño del mapa (ejemplo: [5,5])
    obstaculos: obstaculos, // Guardamos los obstáculos (ejemplo: [{ x: 2, y: 2 }])
  };
}

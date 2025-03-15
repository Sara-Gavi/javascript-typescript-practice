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

// Crear un Rover en (0,0), mirando al Norte ('N'), en un mapa de 5x5 con un obstáculo en (2,2)
let rover = inicializarRover(0, 0, "N", [5, 5], [{ x: 2, y: 2 }]);

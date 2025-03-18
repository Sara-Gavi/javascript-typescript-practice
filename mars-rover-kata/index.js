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

// Crear un Rover en (0,0), mirando al Norte ('N'), en un mapa de 5x5 con un obstaculo en (2,2)

let rover = inicializarRover(0, 0, "N", [5, 5], [{ x: 2, y: 2 }]);

console.log("Bienvenidas al gestor de tareas");

// Declarar la estructura de una tarea usando una interfaz

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

// Array para almacenar las tareas
let tasks: Task[] = [];

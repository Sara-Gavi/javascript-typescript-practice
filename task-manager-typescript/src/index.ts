console.log("Bienvenidas al gestor de tareas");

// Declarar la estructura de una tarea usando una interfaz

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

// Array para almacenar las tareas
let tasks: Task[] = [];

// Función para añadir uan nueva tarea
function addTask(name: string): void {
  const newTask: Task = {
    id: tasks.length + 1,
    name: name,
    completed: false,
  };
}

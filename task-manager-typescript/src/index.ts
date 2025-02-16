import * as fs from "fs"; //Importar el módulo fs para leer y escribir en archivos

console.log("Bienvenidas al gestor de tareas");

// Declarar la estructura de una tarea usando una interfaz

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

// Array para almacenar las tareas
let tasks: Task[] = [];

// Función para cargar las tareas desde el archivo tasks.json

function loadTasks(): void {
  if (fs.existsSync("tasks.json")) {
    //Comprueba que el archivo tasks json existe
    const data = fs.readFileSync("tasks.json", "utf-8"); //lee el archivo como un texto
    tasks = JSON.parse(data); // convierte el texto JSON en un array de tareas
    console.log("tareas cargadas", tasks);
  } else {
    console.log("no se encontró el archivo tasks.json, se creará uno nuevo ");
  }
}

//Función para guardar las tareas en el archivo tasks.json
function saveTasks(): void {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2)); //convierte tasks a JSON y lo guarda
  console.log("tareas guardadas en tasks.json");
}

//Llamar a LoadTasks al inicio del programa para cargar las tareas
loadTasks();

// Función para añadir uan nueva tarea
function addTask(name: string): void {
  const newTask: Task = {
    id: tasks.length + 1,
    name: name,
    completed: false,
  };

  tasks.push(newTask);
  console.log(`Tarea añadida: ${newTask.name}`);
  saveTasks(); // Guardar las tareas cada vez que añadimos una nueva
}

//Añadir tarea de prueba
addTask("Aprender Typescript");
addTask("Dormir, por favor");

// mostrar todas las tareas
console.log("Lista de tareas:", tasks);

// Función para marcar una tarea como completada

function completeTask(id: number): void {
  const task = tasks.find((t) => t.id === id);

  if (task) {
    task.completed = true;
    console.log(`tarea completada:) ${task.name}`);
    saveTasks(); //Guardar las tareas después de marcar una completada
  } else {
    console.log(`tarea con ID ${id} no encontrada`);
  }
}

//Probar la funcion para completar la tarea con ID 1
completeTask(1);
//Mostrar todas las tareas actualizadas
console.log("Lista de tareas actualizadas:", tasks);

// Función para eliminar una tarea por su ID
function deleteTask(id: number): void {
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    console.log(`Tarea eliminada: ${deletedTask[0].name}`);
    saveTasks(); // guardar las tareas despues de eliminar una
  } else {
    console.log(`Tarea con ID ${id} no encontrada.`);
  }
}

// Probar la función para eliminar la tarea con ID 2
deleteTask(2);

// Mostrar las tareas restantes
console.log("Lista de tareas después de eliminar:", tasks);

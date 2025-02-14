"use strict";
console.log("Bienvenidas al gestor de tareas");
// Array para almacenar las tareas
let tasks = [];
// Función para añadir uan nueva tarea
function addTask(name) {
    const newTask = {
        id: tasks.length + 1,
        name: name,
        completed: false,
    };
    tasks.push(newTask);
    console.log(`Tarea añadida: ${newTask.name}`);
}
//Añadir tarea de prueba
addTask("Aprender Typescript");
addTask("Dormir, por favor");
// mostrar todas las tareas
console.log("Lista de tareas:", tasks);
// Función para marcar una tarea como completada
function completeTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`tarea completada:) ${task.name}`);
    }
    else {
        console.log(`tarea con ID ${id} no encontrada`);
    }
}
//Probar la funcion para completar la tarea con ID 1
completeTask(1);
//Mostrar todas las tareas actualizadas
console.log("Lista de tareas actualizadas:", tasks);

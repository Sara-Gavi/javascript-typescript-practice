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

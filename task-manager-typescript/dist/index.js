"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs")); //Importar el módulo fs para leer y escribir en archivos
console.log("Bienvenidas al gestor de tareas");
// Array para almacenar las tareas
let tasks = [];
// Función para cargar las tareas desde el archivo tasks.json
function loadTasks() {
    if (fs.existsSync("tasks.json")) {
        //Comprueba que el archivo tasks json existe
        const data = fs.readFileSync("tasks.json", "utf-8"); //lee el archivo como un texto
        tasks = JSON.parse(data); // convierte el texto JSON en un array de tareas
        console.log("tareas cargadas", tasks);
    }
    else {
        console.log("no se encontró el archivo tasks.json, se creará uno nuevo ");
    }
}
//Función para guardar las tareas en el archivo tasks.json
function saveTasks() {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2)); //convierte tasks a JSON y lo guarda
    console.log("tareas guardadas en tasks.json");
}
//Llamar a LoadTasks al inicio del programa para cargar las tareas
loadTasks();
// Función para añadir uan nueva tarea
function addTask(name) {
    const newTask = {
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
function completeTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`tarea completada:) ${task.name}`);
        saveTasks(); //Guardar las tareas después de marcar una completada
    }
    else {
        console.log(`tarea con ID ${id} no encontrada`);
    }
}
//Probar la funcion para completar la tarea con ID 1
completeTask(1);
//Mostrar todas las tareas actualizadas
console.log("Lista de tareas actualizadas:", tasks);
// Función para eliminar una tarea por su ID
function deleteTask(id) {
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        console.log(`Tarea eliminada: ${deletedTask[0].name}`);
        saveTasks(); // guardar las tareas despues de eliminar una
    }
    else {
        console.log(`Tarea con ID ${id} no encontrada.`);
    }
}
// Probar las funciones
addTask("Entrenar");
completeTask(1);
deleteTask(2);
// Mostrar las tareas restantes
console.log("Lista final de tareas:", tasks);

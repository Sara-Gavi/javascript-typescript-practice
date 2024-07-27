// Filtrar usuarios activos
// Transformar la lista de usuarios activos para que solo contenga el nombre y la edad de cada usuario
//lISTA DE USUARIOS, cada uno representado por un objeto con la siguiente estructura:
/*
{
    id: Number,
    name: String,
    age: Number,
    isActive: boolean
} */

const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 22, isActive: true },
  { id: 4, name: "David", age: 35, isActive: true },
  { id: 5, name: "Eve", age: 28, isActive: false },
];

//1.FILTRAR USUARIOS ACTIVOS

const activeUsers = users.filter((user) => user.isActive);

// TRANSFORMAR LISTA DE USUARIOS PARA QUE SOLO TENGA EL NOMBRE Y LA EDAD
const transformeUsers = users.map((user) => ({
  name: user.name,
  age: user.age,
}));

console.log(transformeUsers);

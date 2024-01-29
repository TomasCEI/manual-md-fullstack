La función `filter()` devuelve un nuevo array con **todos los elementos** que cumplan la condición implementada por la función dada.

```js
const numeros = [5, 12, 8, 130, 44];
const items = numeros.filter((numero) => numero > 10);
console.log(items); // [12, 130, 44]

const personas = [
  { nombre: "Juan", edad: 23 },
  { nombre: "Pedro", edad: 18 },
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 9 },
  { nombre: "Maria", edad: 30 },
];
const mayoresDeEdad = personas.filter((persona) => persona.edad >= 18);
console.log(mayoresDeEdad);
/* [
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pedro', edad: 18 },
    { nombre: 'Maria', edad: 30 }
]*/
```

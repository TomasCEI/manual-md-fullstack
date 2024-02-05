# Spread

Partiendo del punto que tenemos 2 grupos de tipos de datos:

-  **Primitivos:** string, number, boolean, null, undefined
-  **De Referencia:** object, array, function

El operador spread (`...`) nos permite trabajar con los tipos de datos **De Referencia o Compuestos**. Expandiendo un objeto o un array en lugares donde se esperan cero o más argumentos.

1. Uso en Objetos y Arrays:

Al tener un objeto o array, si intentamos realizar una copia del mismo utilizando `const arrayCopia= arrayOriginal`, lo que estamos haciendo es copiar la referencia al objeto o array original. Por lo que si modificamos la copia, también modificamos el original.

```js
// Ejemplo de Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = obj1; // copia la referencia
obj2.a = 3; // se modifican ambos
console.log(obj1); // { a: 3, b: 2 }
console.log(obj2); // { a: 3, b: 2 }

// Ejemplo de Arrays
const arr1 = [1, 2, 3];
const arr2 = arr1; // copia la referencia
arr2[0] = 4; // se modifican ambos
console.log(arr1); // [4, 2, 3]
console.log(arr2); // [4, 2, 3]
```

Al utilizar el operador `Spread`, podemos realizar una copia de un objeto o array sin copiar la referencia, si no todos sus elementos

-  En el caso de los objetos, nos permite copiar todas las propiedades de primer nivel de un objeto a otro.
-  En el caso de los arrays, nos permite copiar todos los elementos de un array a otro.

```js
// Ejemplo de Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // copia el objeto
obj2.a = 3; // se modifican solo obj2
console.log(obj1); // { a: 1, b: 2 }
console.log(obj2); // { a: 3, b: 2 }

// Ejemplo 2
let Alumno = { nombre: "Timmy" };
let nuevo = { ...Alumno };
Nuevo.edad = 33;
console.log(Alumno); // {nombre: 'Timmy', edad: 33}
console.log(Nuevo); // {nombre: 'Timmy', edad: 33}

// Ejemplo de Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // copia el array
arr2[0] = 4; // se modifican solo arr2
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 2, 3]

// Ejemplo 2
let semana = ["Lunes"];
let otra = [...semana]; // ['Lunes'];
otra = [...otra, "Martes"]; // ['Lunes', 'Martes'];
otra = [...otra, "Miércoles"]; // ['Lunes', 'Martes', 'Miercoles'];
otra = ["Domingo", ...otra]; // ['Domingo', 'Lunes', 'Martes', 'Miercoles'];
```

-  Nota 1: es una copia superficial, si el objeto o array tiene elementos anidados, estos no se copiarán, si no que usaran la misma referencia de sus elementos hijos.
-  Nota 2: Un método sencillo de duplicar un objeto o array de multiples niveles es utilizando `JSON.parse(JSON.stringify(objeto))`, pero este método no es recomendable para objetos con funciones, fechas, expresiones regulares, `undefined` o `NaN`.

2. Uso en funciones:

```js
// Ejemplo de función
function saludo(param1, param2) {
   console.log([param1, param2]); // ["Hola", "Adios"]
}
saludo("Hola", "adios");

// si uso el spread, "desparrama" todos mis valores en un array
function saludo(...datos) {
   console.log(datos); //  ["Hola", "Adios"]
}
saludo("Hola", "Adios");
```

## Spread en Componentes JSX

En React, podemos utilizar el operador de propagación `spread` (desparramar) para pasar multiples props a un componente. Esto nos permite pasar un objeto con todas las propiedades que posee el componente sin tener que nombrar cada una de ellas.

```js
// Ejemplo
const props = {
   prop1: "valor1",
   prop2: "valor2",
   prop3: "valor3",
};
// método tradicional
<Componente prop1={prop1} prop2={prop2} prop3={prop3} />

// utilizando spread
<Componente {...props} />

```

En el ejemplo anterior, estamos pasando todas las propiedades del objeto `props` al componente `Componente`. Esto nos permite pasar todas las propiedades de un objeto como props a un componente.

Mas ejemplos:

```js
// Ejemplo 2
const users = [
   { "id": 1, "firstName": "John", "age": 30, "isAdmin": true },
   { "id": 2, "firstName": "Jane", "age": 25, "isAdmin": false },
   { "id": 5, "firstName": "Jim", "age": 33, "isAdmin": true },
];

export default function Lista() {
   return (
      <ul>
         {users.map((user) => (
            <>
               {/* <User key={index} firstName={firstName} age={age} /> */}
               <User key={user.id} {...user} />
            </>
         ))}
      </ul>
   );
}

const User = ({ firstName, age, isAdmin }) => {
   return (
      <li>
         <h1>{firstName}</h1>
         <p>Mi edad es {age}</p>
         {isAdmin && <p>Soy admin</p>}
      </li>
   );
};
```

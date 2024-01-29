## Pop()

El método `pop()` elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

```js
let frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let ultimoElemento = frutas.pop();

console.log(ultimoElemento); // "bananas"
console.log(frutas); // (4) ["manzana", "naranja", "tomate", "uvas"]
```

## Push()

El método `push()` es uno de los mas comunes, y añade uno o más elementos al final de un array y _devuelve la nueva longitud del array_.

```js
let frutas = ["manzana", "naranja", "uvas"];
let nuevaLongitud = frutas.push("pera", "ciruela");

console.log(nuevaLongitud); // 5
console.log(frutas); // (5) ["manzana", "naranja", "uvas", "pera", "ciruela"]
```

## Shift()

El método` shift()` elimina el primer elemento del array y lo retorna. Este método _modifica la longitud del array_.

```js
let frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let elementoQuitado = frutas.shift();

console.log(elementoQuitado); // "manzana"
console.log(frutas); // (4) ["naranja", "tomate", "uvas", "bananas"]
```

## Unshift()

Por otro lado, el método `unshift()` añade uno o más elementos al inicio del array, y devuelve _la nueva longitud del array_.

```js
let frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let nuevaLongitud = frutas.unshift("pera", "ciruela");

console.log(nuevaLongitud); // 7
console.log(frutas); // (7) ["pera", "ciruela", "manzana", "naranja", "tomate", "uvas", "bananas"]
```

## Splice()

El método `splice()` cambia el contenido de un array eliminando, creando o reemplazando elementos del vector. _Modifica el vector original_.
Recibe 3 parámetros:

- El índice del vector donde se va a realizar la operación
- La cantidad de elementos a eliminar
- Los elementos a agregar

```js
let frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let frutasEliminadas = frutas.splice(2, 2, "pera", "ciruela");

console.log(frutasEliminadas); // (2) ["tomate", "uvas"]
console.log(frutas); // (5) ["manzana", "naranja", "pera", "ciruela", "bananas"]

let lenguajes = ["python", "java", "javascript", "php", "c++", "c#"];
lenguajes.splice(0, 1); // quita el primer elemento (python)
lenguajes.splice(-1, 1); // quia el último elemento (c#)
lenguajes.splice(2, 2); // quita 2 elementos a partir del índice 2 (php y c++)
lenguajes.splice(-1, 0, "C", "Cobol"); // agrega 2 elementos al final  (C y Cobol)
```

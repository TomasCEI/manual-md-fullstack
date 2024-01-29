## ForEach

El método `forEach()` recorre cada item de un array, y ejecuta la función indicada dentro del mismo.

```js
const letras = ["a", "b", "c"];

// recorremos el array e imprimios por consola cada valor.
letras.forEach(function (letra) {
  console.log(letra);
});
```

## Modificar elemtnos con ForEach

La función interna del `forEach` puede recibir un 2ndo valor, que es el `índice` del elemento actual. Esto es útil para acceder y hacer modificaciones a los elementos del vector original.

```js
const letras = ["a", "b", "c"];
letras.forEach(function (letra, indice) {
  console.log(letra, indice);
  letras[indice] = letra.toUpperCase();
});

console.log(letras); // (3) ["A", "B", "C"]
```

## Map

Si deseamos generar una copia de la lista, podemos utilizar el método `map()`, quien crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
const numeros = [1, 2, 3, 4, 5];
const nuevaLista = numeros.map(function (numero) {
  return numero * 2;
});

console.log(numeros); //  (5) [1, 2, 3, 4, 5]
console.log(nuevaLista); // (5) [2, 4, 6, 8, 10]
```

Para ambos casos, podemos utilizar una `función flecha` para simplificar el código:

```js
const letras = ["a", "b", "c"];
letras.forEach((letra) => console.log(letra));

const numeros = [1, 2, 3, 4, 5];
const nuevaLista = numeros.map((numero) => numero * 2);
```

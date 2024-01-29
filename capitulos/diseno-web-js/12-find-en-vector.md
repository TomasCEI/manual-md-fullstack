La función `find()` devuelve el valor del **primer** elemento del array que cumple la función de prueba proporcionada. En caso contrario devuelve `undefined`.

```js
const numeros = [5, 12, 8, 130, 44];

const item = numeros.find((numero) => numero > 10);
console.log(item); // 12
```

Los `vectores` o `arrays` son listas de elementos que se pueden guardar en una variable. Se declaran con corchetes `[]` y los elementos se separan con comas `,`. Los elementos pueden ser de cualquier tipo, incluso otros vectores.

```js
let vector = [1, 2, 3, 4, 5];
let vector2 = ["hola", "mundo", 2, true, { nombre: "juan" }];
let vector3 = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]];
```

### Acceder a los elementos de un vector

Cada elemento del vector tiene un índice. El índice es un número que indica la posición del elemento en el array. El primer elemento tiene índice 0, el segundo índice 1, y así sucesivamente.

![img css-js-html](uploads/imgs/array-1.jpg)

Podemos acceder a los elementos de un vector usando el índice entre corchetes `[]`.

```js
let vector = ["ford", "volkswagen", "toyota", "GM", "Tesla"];
console.log(vector[0]); // ford
console.log(vector[1]); // volkswagen
console.log(vector[4]); // tesla
```

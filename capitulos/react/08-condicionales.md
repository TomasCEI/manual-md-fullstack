Antes que nada repasaremos que tipos de datos son verdaderos y cuales son falsos. Ante la duda siempre lo pueden testear con una condición simple como la siguiente, reemplazando el valor **XXX** por el valor que quieran testear.

```js
// Truthy y Falsy
if (XXX) {
   // 1, -1, 0.1, -0.1, "hola", " ", "false", true, [], [1,2,3], {}, {a:1}
   console.log("True (Truthy)");
} else {
   // 0, "", false, null, undefined, NaN
   console.log("False (Falsy)");
}
```

## Condicionales y Ternarias

En React, podemos utilizar condicionales para mostrar elementos de forma dinámica. Para poder hacer esto, debemos utilizar el operador ternario `?` para evaluar una condición y devolver un elemento si la condición es verdadera y otro si es falsa.

```js
// Ejemplo de condicional simple
const edad = 18;
{
   edad >= 18 ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con variables
const esMayor = true;
{
   esMayor ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con funciones

const esMayor = (edad) => edad >= 18;
{
   esMayor(18) ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con objetos

const persona = { nombre: "Juan", edad: 25 };
{
   persona.edad >= 18 ? <h1>Eres mayor de edad</h1> : <h1>Eres menor de edad</h1>;
}

// Ejemplo de condicional con arrays

const frutas = ["Manzana", "Pera", "Uva"];
{
   frutas.length > 0 ? <h1>Hay frutas</h1> : <h1>No hay frutas</h1>;
}
```

Además de las operaciones ternarias tenemos las operaciones lógicas `&&` que nos permiten evaluar condiciones y devolver un elemento si la condición es verdadera. Esto se utiliza normalmente para cuando no necesitamos un `else`.

```js
// Ejemplo de condicional con operador lógico AND
const esMayor = true;
{
   esMayor && <h1>Eres mayor de edad</h1>;
}
```

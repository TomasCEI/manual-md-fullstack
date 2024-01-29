### Strings:

Un string es un texto. Se puede escribir con comillas simples, dobles.
puedo utilizar la operacion "typeof val" para saber el tipo de dato de una variable

```js
"Hola CEI";
"Hola CEI"; // recomendado, excepto cuando tengo textos con ' , por ejemplo "I'm a teacher"

typeof "Hola CEI"; // "string"
typeof 25; // "number"
typeof "25"; // string
```

### Conversión automática:

En algunos casos (a veces deseados y a veces no), JS convierte automáticamente sus valores de number a string. Esto se llama "coerción de tipo" (type coercion) y ocurre en los siguientes casos. Observen el 3ero donde se puede evitar esto mediante el uso de paréntesis:

- 25 + "25" // "2525"
- '$' + 25 + 25 // "$2525"
- '$' + (25+25) // "$50"

### ejercicio:

- imprimir el valor en una sola linea de código: "$28.94" sumando 20.95 + 7.99 [ '$'+ (2095+799)/100 ]
- imprimir el valor 'Items (2): $28.94' contando los items y sumando 20.95 + 7.99 [ 'Items ('+(1+1)+'): $'+ (2095+799)/100 ]
- crear un alert() con el valor anterior 'Items (2): $28.94'

En un string puede haber:

1.  letras (a,b,c)
2.  numeros (1,2,3)
3.  símbolos (%, $, #)
4.  caracteres de escape (\', \", \n)

Probar el siguiente mensaje multilinea:

```js
alert("hola \nCEI");
```

## Backticks (template strings)

Los backticks (``) son una nueva forma de escribir strings que tiene 3 ventajas:

- **Multilinea:** permite escribir en varias líneas
- **Interpolación:** permite realizar operaciones dentro del string (interpolación) utilizando `${ variables }` o `${ cálculo }`
- El resultado de la variable y operaciones se calculan y se inserta en un string. Si observan el código fueente el resultado será un string común entre comilas simples.

```js
`Hola CEI mi edad es ${2023 - 1984}``Hola 
    Profe`; // hola \nProfe
```

<div class="ejercicios">
    <h3>Ejercicios</h3>

1. Convertir nuestro código **'Items ('+(1+1)+'): $'+ (2095+799)/100** a template string usando interpolación

   ```js
   // Resultado:
   `Items (${1 + 1}): $${(2095 + 799) / 100}`;
   ```

2. Si pido un **cafe de 1,99$** y un **bocadillo de chivito 5,50$**. Usando matemáticas, calcular el costo total de la compra, e imprimirlo en un popup Multi-Linea que me diga el valor y el mensaje:

   ```
           Costo Total: 7.49$
           Muchas gracia, vuelve pronto!
   ```

</div>

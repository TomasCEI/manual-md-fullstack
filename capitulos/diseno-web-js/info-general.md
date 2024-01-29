# Javascript de Cero

HTML es el contenido de la página (textos, imagenes, botones)

CSS es la presentación de la página (colores, tamaños, posiciones)

JS es la interacción de la página (animaciones, validaciones, efectos)



en cualquier sitio web, podemos abrir la consola de desarrollador con F12 o Ctrl+Shift+I o Command+Option+I

Abrir consola y probar directamente:

alert("Hola CEI");

Terminología:
- instrucciones de código
- JS Lenguaje de programación, otros ejemplos: Python, Java, PHP

Matemáticas:
```js
    2+2
    10-3
    2*2
    4/2
    4%2
    2**2
```

Modificar la página web:
```js
    document.body.innerHTML = "Hola CEI";
```



## leccion 1: Introducción a JavaScript y sintaxis básica
syntaxis:
- reglas que debemos seguir cuando escribimos código
- CaseSensitive: no es lo mismo mayúsculas que minúsculas
- las instrucciones finalizan con ";"


Ejercicios entre todos:
1. usar alert para escribir "Buenos días!" en una ventana
2. Usando matemáticas, calcular 10 + 5, 20-5, 2+2-5.
3. usa "document.body.innerHTML" para escribir "Buenos días en la página web
4. Escribe tu nombre en la página web.
5. Limpia la página web dejandola en blanco.


## leccion 2: Números y matemáticas

orden de operaciones:
- de izq a derecha en caso de mismo nivel de jerarquía (+ y -), (* y /)
- PEMDAS: paréntesis, exponentes, multiplicación, división, adición, sustracción
- 1% = 1/100 = 0.01 => 25 * 0.01 = 0.25
- calcular el impuesto de 10% de 1 pelota (20.95) + 2 remeras(7.99) [ debería dar aprox 3.69]

Problemas de Flotantes:
- 2,3,4 = integers 
- 2.2, 3.4, 4.5 = floats
- problema en JS y otros lenguajes: 0.1 + 0.2 = 0.30000000000000004
- Al realizar calculos de dinero se recomienda calcular en centavos, y luego dividir por 100.
    valor de remera (7.99) + pelota (20.95), se debe calcular en CENTAVOS en vez de euros, luego dividir por 100

### Redondeo:

 - Math.round(2.3) = 2 // si es menor a .5 redonde hacia abajo, si no hacia arriba
 - Math.round(2.7) = 3
 - Math.floor(2.7) = 2
 - Math.ceil(2.3) = 3
- Calcular impuestos (10%) de  1 pelota + 1 remera redondeando según corresponda. => Math.round((2095+799)* 0.1) /100

### Ejercicios entre todos:
 - Calcular el total en un resto: costo de 1 sopa (10$), 3 hamburgueas (8$) y 1 helado (5$)
 - Calcular el total en un resto: yo y 2 amigos fuimos al resto de arriba, cuanto pagamos por persona? 
 - Calcular el precio de 1 tostadora (18,50$) y 2 remeras (7,50$)
 - Calcular el 10% de la compra anterior 
 - Calcular el 25% de la compra anterior 
 - Utilizando google, veamos como convertir de Celsius a Fahrenheit y viceversa:

    Fahrenheit = (Celsius * 9/5) + 32

    Celsius = (Fahrenheit - 32) * 5/9

 - Si etamos a 25 grados Celsius, a cuantos grados Fahrenheit estamos? [77]
 - Si estamos a 86 grados Fahrenheit, a cuantos grados Celsius estamos? [30]
 - Si estamos a -5 grados Celsius, a cuantos grados Fahrenheit estamos? [23]
  

### Strings:

Un string es un texto. Se puede escribir con comillas simples, dobles.
puedo utilizar la operacion "typeof val" para saber el tipo de dato de una variable

```js
    "Hola CEI"
    'Hola CEI'   // recomendado, excepto cuando tengo textos con ' , por ejemplo "I'm a teacher"

    typeof "Hola CEI" // "string"
    typeof 25 // "number"
    typeof '25' // string
```

### Conversión automática:
- JS convierte automáticamente de number a string
- 25 + "25"     // "2525"
- '$' + 25 + 25 // "$2525"
- '$' + (25+25) // "$50"

ejercicio: 
- imprimir el valor en una sola linea de código: "$28.94" sumando 20.95 + 7.99 [ '$'+ (2095+799)/100 ]
- imprimir el valor 'Items (2): $28.94' contando los items y sumando 20.95 + 7.99 [ 'Items ('+(1+1)+'): $'+ (2095+799)/100 ]
- crear un alert() con el valor anterior 'Items (2): $28.94'

En un string puede haber:
 1. letras (a,b,c)
 2. numeros (1,2,3)
 3. símbolos (%, $, #)
 4. caracteres de escape (\', \", \n)

 alert('hola \nCEI');


caso de backticks (template strings)
 - Multilinea: permite escribir en varias líneas
 - Interpolación: permite realizar operaciones dentro del string (interpolación) con ${}
 - el resultado de la variable  y operaciones se calculan y se inserta en un string

```js
    `Hola CEI mi edad es ${2023-1984}`
    `Hola 
    Profe`   // hola \nProfe
```

### ejercicio: 
- Convertir nuestro código 'Items ('+(1+1)+'): $'+ (2095+799)/100   a template string usando interpolación ${} [ `Items (${1+1}): $${(2095+799)/100}` ]
- Si pido un cafe de 1,99$ y un bocadillo de chivito 5,50$. Usando matemáticas, calcular el costo total de la compra, e imprimirlo en un popup multi linea que me diga el valor y el mensaje:
         
         Costo Total: 7.49$
         Muchas gracia, vuelve pronto!


### JS en HTML:
- Se puede ejecutar en etiquetas `<script></script>` deberían ponerse en el head ya que es parte del código invisible, pero por convención se ponen al final, ya que necesito que se cargue previamente el HTML en caso de querer seleccionar elementos del `DOM` que veremos mas adelante.
- Se puede ejecutar en archivos externos .js `<script src="js/script.js"></script>`
- se puede ejecutar en linea `<button onclick="alert('Felicidades!');"></button>` pero primero se ejecutará el de `<script></script>` del documento, y luego el de `onclick=""` en caso de hacer click en el elemento.

### Commentarios:

Como en otros lenguajes puedo realziar comentarios. Se usan para explicar el código, o para deshabilitar código.

```js
// comentario de una linea

/*
    comentario de 
    varias lineas 
*/

/**
* 
*  Bloque de comentarios 
* 
*/

/** --------------------------------
 * 
 *  Bloque de comentarios 
 * 
 * --------------------------------*/

// Comentarios ASCII ART!
// https://fsymbols.com/es/arte-de-texto/

/*
                   _  _                       _
                  (_)(_)                     | |
  __ _  ___   ___  _  _  ______   __ _  _ __ | |_
 / _` |/ __| / __|| || ||______| / _` || '__|| __|
| (_| |\__ \| (__ | || |        | (_| || |   | |_
 \__,_||___/ \___||_||_|         \__,_||_|    \__|


 __________________▄▄▄▀▀▀▀▀▀▀▄
_______________▄▀▀____▀▀▀▀▄____█
___________▄▀▀__▀▀▀▀▀▀▄___▀▄___█
__________█▄▄▄▄▄▄_______▀▄__▀▄__█
_________█_________▀▄______█____█_█
______▄█_____________▀▄_____▐___▐_▌
______██_______________▀▄___▐_▄▀▀▀▄
______█________██_______▌__▐▄▀______█
______█_________█_______▌__▐▐________▐
_____▐__________▌_____▄▀▀▀__▌_______▐_____________▄▄▄▄▄▄
______▌__________▀▀▀▀________▀▀▄▄▄▀______▄▄████▓▓▓▓▓▓▓███▄
______▌____________________________▄▀__▄▄█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄
______▐__________________________▄▀_▄█▓▓▓▓▓▓▓▓▓▓_____▓▓____▓▓█▄
_______▌______________________▄▀_▄█▓▓▓▓▓▓▓▓▓▓▓____▓▓_▓▓_▓▓__▓▓█
_____▄▀▄_________________▄▀▀▌██▓▓▓▓▓▓▓▓▓▓▓▓▓__▓▓▓___▓▓_▓▓__▓▓█
____▌____▀▀▀▄▄▄▄▄▄▄▄▀▀___▌█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓__▓________▓▓___▓▓▓█
_____▀▄_________________▄▀▀▓▓▓▓▓▓▓▓█████████████▄▄_____▓▓__▓▓▓█
_______█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▄▄___▓▓▓▓▓█
_______█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓███▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓█
________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓█▓▓██░░███████░██▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓█
________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓░░░░░█░░░░░██░░░░██▓▓▓▓▓▓▓▓▓██▓▓▓▓▌
________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓███░░░░░░░░____░██░░░░░░░██▓▓▓▓▓▓▓██▓▓▌
________▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░░________░░░░░░░░░██████▓▓▓▓▓█▓▌
________▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░___▓▓▓▓▓░░░░░░░███░░███▓▓▓▓▓█▓▌
_________█▓▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░___▓▓█▄▄▓░░░░░░░░___░░░░█▓▓▓▓▓█▓▌
_________█▓▓▓▓▓▓▓▓▓▓▓▓▓█░░█░░░___▓▓██░░░░░░░░▓▓▓▓__░░░░█▓▓▓▓██
_________█▓▓▓▓▓▓▓▓▓▓▓▓▓█░███░░____▓░░░░░░░░░░░█▄█▓__░░░░█▓▓█▓█
_________▐▓▓▓▓▓▓▓▓▓▓▓▓▓█░█████░░░░░░░░░░░░░░░░░█▓__░░░░███▓█
__________█▓▓▓▓▓▓▓▓▓▓▓▓█░░███████░░░░░░░░░░░░░░░▓_░░░░░██▓█
__________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░███████░░░░░░░░░░░░░░_░░░░░██▓█
__________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░███████░░░░░░░░░░░░░░░░░░░██▓█
___________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░░███████░░░░░░░░░░░█████░██░
___________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░░░░__███████░░░░░███████░░█░░
___________█▓▓▓▓▓▓▓▓▓▓▓▓▓█░░░░░░█▄▄▄▀▀▀▀████████████░░█░
___________▐▓▓▓▓▓▓▓▓▓▓▓▓█░░░░░░██████▄__▀▀░░░███░░░░░█
___________▐▓▓▓▓▓▓▓▓▓▓▓█▒█░░░░░░▓▓▓▓▓███▄░░░░░░░░░░░____________▄▄▄
___________█▓▓▓▓▓▓▓▓▓█▒▒▒▒█░░░░░░▓▓▓▓▓█░░░░░░░░░░░______▄▄▄_▄▀▀____▀▄
__________█▓▓▓▓▓▓▓▓▓█▒▒▒▒█▓▓░░░░░░░░░░░░░░░░░░░░░____▄▀____▀▄_________▀▄
_________█▓▓▓▓▓▓▓▓▓█▒▒▒▒█▓▓▓▓░░░░░░░░░░░░░░░░░______▐▄________█▄▄▀▀▀▄__█
________█▓▓▓▓▓▓▓▓█▒▒▒▒▒▒█▓▓▓▓▓▓▓░░░░░░░░░____________█_█______▐_________▀▄▌
_______█▓▓▓▓▓▓▓▓█▒▒▒▒▒▒███▓▓▓▓▓▓▓▓▓▓▓█▒▒▄___________█__▀▄____█____▄▄▄____▐
______█▓▓▓▓▓▓▓█_______▒▒█▒▒██▓▓▓▓▓▓▓▓▓▓█▒▒▒▄_________█____▀▀█▀▄▀▀▀___▀▀▄▄▐
_____█▓▓▓▓▓██▒_________▒█▒▒▒▒▒███▓▓▓▓▓▓█▒▒▒██________▐_______▀█_____________█
____█▓▓████▒█▒_________▒█▒▒▒▒▒▒▒▒███████▒▒▒▒██_______█_______▐______▄▄▄_____█
__█▒██▒▒▒▒▒▒█▒▒____▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒____▒█▓█__▄█__█______▀▄▄▀▀____▀▀▄▄█
__█▒▒▒▒▒▒▒▒▒▒█▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▓▓█▓▓▌_▐________▐____________▐
__█▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒_______█▓▓▓█▓▌__▌_______▐_____▄▄____▐
_█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒_____█▓▓▓█▓▓▌__▌_______▀▄▄▀______▐
_█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████▓▓█▓▓▓▌__▀▄_______________▄▀
_█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒██▓▓▓▓▓▌___▀▄_________▄▀▀
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒█▓▓▓▓▓▀▄__▀▄▄█▀▀▀
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▓▓▓▓██▄▄▄▀
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
_█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▄▄▄▄▄
_█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒██▄▄
__█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒█▄
__█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
__█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
___█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▌
____█▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░▒▒▌
____█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████████████▒▒▒▒▒█▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒░▒▌
_____█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______▐▒▒▒▒█▒▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▌
______█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒█▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
_______█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒█▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
_________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
_________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒▒░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀
__________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▒░░░▒▒▒▒▒░░░░░░░░▒▒▒█▀▀▀
___________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░█▀
____________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀
_____________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▒▒▒▒▒▒▒▒▒▒▒▒█▀
_____________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______▀▀▀███████▀▀
______________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
_______________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
_________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
__________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒█
___________________█▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒█
___________________█▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒█
___________________█████████▒▒▒▒▒▒▒▒▒▒▒█
____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
_____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▌
_____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▌
______________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▌
_______________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░█
________________________█▒▒▒▒▒▒▒▒▒▒▒░░░█
__________________________██▒▒▒▒▒▒░░░█▀
_____________________________█░░░░░█▀
_______________________________▀▀▀▀

 */
```

### Consola y Console.log
El `console.log` es una herramienta fundamental en el uso de Javascript. Nos permite imprimir en la consola del navegador información que nos puede ser útil para debuggear nuestro código o para mostrar información al usuario.

Escribir javascript directamente en las etiquetas no figura pero puedo redirigir esta información a la consola, con la función `console.log()`:

```js
    2+2 // no figura  en consola

    console.log(2+2);
    console.error("Soy un error");
    console.warn("Soy un warning");
    console.table(["juan","maria", "pedro"]);
    console.table({"name":"Josefa","edad":25});
```


### Variables:

 - contenedores donde podremos guardar información
 - se asigna información con el "=" de derecha a izq.
 - no puedo usar caracteres especiales(@!#%&) ni espacios.
 - no puedo empezar con números
 - no puedo usar palabras reservadas (var, let, const, function, etc)
 - SI puedo usar $ y _ (pero se suelen utilizar para casos especiales como librerías).
 - el standard para variables es camelCase (primera letra minúscula, y las siguientes palabras con mayúscula)
 - kebab-case si se usa en HTML y CSS pero NO en JS. Porque equivale a restar
 - sanke_case no se suele utilzar en JS, pero se puede según preferencias.
 - por defecto y para seguridad se recomienda utilizar "const" y solo let/var a los elementos que van a cambiar.
 - se puede utilizar "typeof" con variables para ver que es.

```js

    let nombre = "Juan";
    console.log(typeof nombre);


    let edad = 25;
    let altura = 1.75;
    let tf_estudiante = true;
    let A_usuarios = ["Juan", "Pedro", "María"];
    let obj_usuario = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        direcciones: [{
            calle: "Av. Siempre Viva",
            numero: "742",
            pisos: ["piso1", "piso2", "piso3"]
        },{
            calle: "Av. Siempre Viva",
            numero: "742"
        },{
            calle: "Av. Siempre Viva",
            numero: "742"
        }];
    };
```

### shortcuts para actualización:
```js

    var resultado=5;

    resultado=resultado+2;
    resultado +=2;

    resultado++; // sumar 1
    resultado--; // restar 1



    += 2 variable = variable + 2;
    -= 2 variable = variable - 2;
    *= 2 variable = variable * 2;
    /= 2 variable = variable / 2;
    ++ variable = variable + 1;
    -- variable = variable - 1;
```





### ejercicio:
 crear un carrito de compras con 3 productos (bocadillo, cafe, tostadas) y agregar los botones:

Botones para cada producto:
 - Agrega a carrito
 - Agregar 2 a carrito 
 - Agregar 3 a carrito 
 - Borrar de Carrito  (-1)

 Botones comaprtidos:
 - Vaciar carrito
 - Mostrar cantidad de items por consola y por alert.

total: 14 botones

Debe mostrar por consola y en pantalla (Con alert) la cantidad de productos en el carrito.
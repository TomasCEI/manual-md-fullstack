Las expresiones regulares son una secuencia de caracteres que forman un patrón de búsqueda. Se utilizan para buscar, reemplazar o validar cadenas de texto. Son muy útiles para la manipulación de cadenas de texto, y se utilizan en muchos lenguajes de programación y herramientas de procesamiento de texto.

## Definir una expresión regular

Se puede utilizar un constructor `const regex = new RegExp('pattern')` o una notación literal `/pattern/`. La notación literal es más común y más fácil de leer, pero si deseamos utilizar variables dentro de nuestro patrón, es mejor utilizar el constructor.


```javascript
// Usando el constructor RegExp
const regex1 = new RegExp('patrón');
// Escribiendo la expresión regular directamente
const regex2 = /patrón/;

// Usando el constructor RegExp para incluir una variable
const miNombre = "Lucía";
const regex3 = new RegExp("soy :"+miNombre);
```

## Flags en expresiones regulares

Las expresiones regulares pueden tener banderas que modifican su comportamiento. Algunas de las banderas más comunes son:

- `i`: Ignora mayúsculas y minúsculas.
- `g`: Encuentra todas las coincidencias, no solo la primera.
- `m`: Multilínea, permite que `^` y `$` coincidan con el principio y el final de cada línea y no solo en frente de toda la cadena.

Las banderas se agregan al final de la expresión regular, después de la barra de cierre. Por ejemplo, `/patrón/gi`. Y se pueden combinar entre ellas.

## Metacaracteres en expresiones regulares

Los metacaracteres son caracteres especiales que tienen un significado especial en una expresión regular. Algunos de los metacaracteres más comunes son:

- `.`: Cualquier carácter, excepto nueva línea.
- `^`: Coincide con el inicio de la cadena.
- `$`: Coincide con el final de la cadena.
- `+`: Coincide con 1 o más repeticiones del carácter anterior.
- `?`: Coincide con 0 o 1 repetición del carácter anterior.
- `|`: Operador OR, coincide con uno u otro patrón.

```javascript

const regex5 = /^hola/; // empieza por hola
const texto = "Hola mundo\nHola amigos\nAdiós mUndo";
const coincidencias = texto.match(/^Hola/gm);
console.log(coincidencias); // ["Hola", "Hola"]

const regex6 = /mundo$/; // termina por mundo
const coincidencias2 = texto.match(/m.ndo$/gm);
console.log(coincidencias2); // ["mundo", "mundo"]
```

## Clases de caracteres en expresiones regulares

Las clases de caracteres son un conjunto de caracteres que se pueden utilizar para buscar coincidencias. Algunas de las clases de caracteres más comunes son:

- `\d`: Cualquier dígito.
- `\w`: Cualquier carácter alfanumérico.
- `\s`: Cualquier espacio en blanco.
- `\D`: Cualquier carácter que no sea un dígito.
- `\W`: Cualquier carácter que no sea alfanumérico.
- `\S`: Cualquier carácter que no sea un espacio en blanco.

Podemos definir también la cantidad de caracteres que queremos buscar utilizando llaves `{}`. Por ejemplo, `/hola{2}/` buscará `hola` seguido de dos `a`. o `/\w{2,4}/` buscará todas las palabras que tengan entre 2 y 4 caracteres.

```javascript

// buscar todas las palabras de mas de 5 letras
const regex7 = /\w{5,}/g;
const coincidencias3 = texto.match(regex7);
console.log(coincidencias3); // ["mundo", "amigos", "Adiós"]
```

## Uso de corchetes en expresiones regulares

Los corchetes se utilizan para buscar un conjunto de caracteres. Por ejemplo, `/[aeiou]/` buscará cualquier vocal. Podemos utilizar un guion para buscar un rango de caracteres, por ejemplo, `/[a-z]/` buscará cualquier letra minúscula.

```javascript

// buscar todas las palabras que empiecen por H o A
const regex8 = /[HA]\w+/g;
const coincidencias4 = texto.match(regex8);
console.log(coincidencias4); // ["Hola", "Hola", "Adiós"]

// buscar todas las palabras sin números ni caracteres especiales
const regex9 = /^[a-zA-Z]+$/g;
const texto2 = "Hola mundo\nHola amigos\nAdiós mUndo\n1234";
const coincidencias5 = texto2.match(regex9);
console.log(coincidencias5); // ["Hola", "mundo", "Hola", "amigos", "Adiós", "mUndo"]

// buscar solo números
const regex10 = /[0-9]/g;
const coincidencias6 = texto2.match(regex10);
console.log(coincidencias6); // ["1", "2", "3", "4"]
```

## Métodos de las expresiones regulares

Las expresiones regulares tienen varios métodos que podemos utilizar para buscar coincidencias en una cadena de texto. Algunos de los métodos más comunes son:

- `test()`: Devuelve `true` si la cadena de texto cumple con el patrón.
- `exec()`: Devuelve un array con la primera coincidencia.

## Métodos de texto para utilizar expresiones regulares

- `parrafo.replace(regex, 'nuevo valor')`: Reemplaza las coincidencias por un texto.
- `parrafo.search(regex)`: Devuelve la posición de la primera coincidencia.
- `parrafo.match(regex)`: Devuelve un array con todas las coincidencias.

```javascript

const text= "Hola, en mi mundo, todo el mundo es feliz";
const regex11 = /mundo/;
console.log(regex11.test(texto)); // true
console.log(regex11.exec(texto)); // ["mundo", index: 6, input: "Hola, en...]
const regex12 = /mundo/g;
console.log(texto.replace(regex12, "planeta")); // "Hola, en mi planeta, todo el planeta es feliz"
```

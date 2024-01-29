Al igual que al escribir textos, tenemos algunas reglas como finalizar una oración con un "." e iniciar con la primer letra en Mayúscula, en JavaScript también se aplican reglas que debemos seguir cuando escribimos código.

### Primeras Reglas de Sintaxis:

-  JavaScrip es CaseSensitive: no es lo mismo mayúsculas que minúsculas. Ej: `nombre` es distinto a `Nombre` o `NOMBRE`
-  las instrucciones finalizan con `;` excepto en el caso particular de los `{}` que veremos mas adelante. Ej: `2+2;` o `console.log("Hola a Todos");`

## Llaves {} y Corchetes []

![corchetes y llaves](./uploads/imgs/corchetes-1.jpg)

En JavaScript, los `corchetes []` y las `llaves {}` se utilizan para diferentes propósitos. Aquí hay una breve explicación de cuándo usar cada uno:

### Corchetes: para [ Listas de items ]

-  Se utilizan para definir arreglos (arrays). Los corchetes contienen una lista ordenada de elementos separados por comas.
-  Se utilizan para acceder a elementos específicos en un arreglo utilizando su índice. El índice comienza desde 0 para el primer elemento.
-  También se utilizan en la declaración de literales de arrays.

Ver la sección de Vectores/Arrays para mas información [aquí](#vectores)

```js
// Declaración de un arreglo
var miArreglo = [1, 2, 3, 4];

// Acceso al segundo elemento del arreglo
var segundoElemento = miArreglo[1];
```

### Llaves: para { bloques de código } o para { crear objetos }

Se utilizan para definir objetos (objects). Los objetos en JavaScript son colecciones no ordenadas de pares clave-valor, donde las claves son cadenas y los valores pueden ser cualquier tipo de dato, incluyendo otros objetos.
Se utilizan para definir bloques de código en estructuras de control de flujo como if, else, for, while, etc.
También se utilizan para declarar literales de objetos.

```js
// Declaración de un objeto
var miObjeto = {
   nombre: "Juan",
   edad: 25,
   ciudad: "Ejemploville",
};

// Bloque de código con llaves
if (miObjeto.edad > 18) {
   console.log("La persona es mayor de edad");
}

var miCoche = {
   marca: "Toyota",
   modelo: "Corolla",
   color: "Azul",
   velocidadMaxima: 180,
};
```

### Ejercicios entre todos:

1. usar alert para escribir "Buenos días!" en una ventana
2. Usando matemáticas, calcular 10 + 5, 20-5, 2+2-5.
3. usa `document.body.innerHTML` para escribir "Buenos días en la página web
4. Escribe tu nombre en la página web.
5. Limpia la página web dejandola en blanco.

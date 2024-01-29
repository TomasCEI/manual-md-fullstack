## Set Timeout y Set Interval

Si deseamos ejecutar una función después de un cierto tiempo, podemos usar `setTimeout` o `setInterval`. Estas funciones se suelen utilizar para casos como por ejemplo:

-  guardar datos automáticamente en una base de datos cada cierto tiempo
-  mostrar un mensaje de error después de un cierto tiempo
-  mostrar un mensaje de bienvenida después de un cierto tiempo
-  demorar la ejecución de una función para que no se ejecute inmediatamente

### Set Timeout

Podemos utilizar el método `setTimeout` para ejecutar una función después de un cierto tiempo. El primer argumento es la función que queremos ejecutar, y el segundo argumento es el tiempo en milisegundos (1 segundo = 1000 milisegundos).

```js
function saludarAlumnos() {
   console.log("Ya pasaron 5 segundos, Hola a todos!");
}
setTimeout(saludarAlumnos, 5000); // ejecutar función en 5 segundos

setTimeout(() => {
   console.log("Hola, le gane a la consulta anterior");
}, 3000); // ejecutar función en 3 segundos
```

### Set Interval

También existe el método `setInterval` que funciona de la misma manera, pero cada vez que se ejecuta vuelve a generar un nuevo timeout creando un ciclo infinito.
Algunos

```js
function saludarAlumnos() {
   console.log("Hola a todos cada 2 segundos!");
}
setInterval(saludarAlumnos, 2000);
```

Puedes guardar tus timeouts o intervals en una variable para poder cancelarlos más tarde:

```js
const myInterval = setInterval(saludarAlumnos, 2000);

function paraIntervalo() {
   // detiene tanto intervalos como timeouts
   clearTimeout(myInterval);
}
```

### Actividades:

Realizar una página web con una imágen de portada.

Actividades para diseño web:

1. Cambiar la imágen de portada cada 5 segundos utilizando setInterval
2. Dar un mensaje de bienvenida intermitente que aparezca y desaparezca cada segundo.
3. Alterar el color de fondo de pantalla cada cierto tiempo.
4. Haz un contador de 10 segundos en cuenta regresiva, al finalizar el timmer "Felicite al usuario"
5. En pantalla generar 2 botones "activiar adds" / "desactivar adds". Al activarlos, crear un popup cada 5 segundos y que el mismo tenga una cruz para cerrarlo. Si el usuario hace click en "desactivar adds" el popup deberá dejar de aparecer.

Actividades para Javascript:

6. Crear un reloj digital que muestre la hora actualizada cada segundo.
7. Crear un reloj analógico que muestre la hora actualizada cada segundo.

# Petición / Request

La obtención de información de un servidor (HTML, CSS, JS, imagenes, tipografías, datos).  
Puede ser sincrónica o asíncrona.  
En JS principalmente se utilizan de manera asíncrona. Se les solía llamar `AJAX` (Asynchronous JavaScript And XML) aunque hoy en día se utiliza principalmente para traer información JSON en vez de XML.  
Ahora la llamamos `fetch` por su método javascript: fetch(). También existe un método más antiguo y menos común llamado `XMLHttpRequest` (XHR) por llevar un poco mas de complejidad en su uso.
- Se utilizan para enviar datos a un servidor (formularios)
- Se utilizan para recibir datos de manera asíncrona (contenido de RRSS, noticias, APIs, etc)
- hay librerías como `axios` basadas en promesas.

## Que es una Request?

Es un OBJETO de JS usado para pedir recursos/datos a una URL

```js	
let opciones = {
    method: 'GET', // POST, PUT, DELETE, etc
    mode: 'cors', // no-cors, same-origin, cors
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({nombre: "Homero", edad: 38}) // cuerpo de la petición
}
let peticion = new Request("miUrl.com/datos", opciones);
```

# Respuesta / Response
La respuesta es la información que nos devuelve el servidor. Recibimos una Promise que nos devuelve un objeto `Response` del cual podemos obtener la información que necesitamos con su método `.json()` o `.text()` entre otros (blob, formData, arrayBuffer)

```js
let opciones = { "status": 200, "statusText": "success!"}
let miRespuesta = new Response('{"nombre": "Homero", "edad": 38}', opciones);
console.log(miRespuesta); // devuelve el objeto response 
console.log(miRespuesta.json()); // devuelve una promesa con el objeto JSON
```


# Promesa
Una promesa es un valor con métodos asociados (then, catch, finally) el cual nos promoete que recibiremos un valor en el futuro. 
Las promesas tienen 2 callbacks: resolve y reject.

```js
let miPromesa = new Promise((resolve, reject) => {
    if (true) {
        resolve("Exito!");
    } else {
        reject("Fracaso!");
    }
});

miPromesa.then((datos) => {
    console.log(datos); // Exito!
}).catch((error) => {
    console.log(datos); // Fracaso!
}).finally(() => {
    console.log("Terminó la promesa"); // finalizó con exito o fracaso
});
```

Tiene 3 estados:
 - **Pending:** Estado inicial, ni cumplido ni rechazado
 - **Fulfilled:** La operación se ha cumplido
 - **Rejected:** La operación no se ha cumplido

 Las promesas pueden encadenar múltiples métodos ".then()" para manejar los datos que se van obteniendo. Para ello todos nuestros then() deben tener un return para que el siguiente then() pueda recibir los datos.

 ```js
let promesa = new Promise((resolve, reject) => {resolve("Exito!")})
    .then(data => {
        console.log("data es:", data)
        return data
    })
    .then(data => {
        console.log("data2 es:", data)
    })
```


# FETCH

El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una `promesa` que resuelve en un objeto Response.

```js
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        // response es un objeto Response que devuelve otra promesa.
        return response.json()
        })
    .then(data => {
        console.log(data)
    })
```

Los fetch poseen un 2ndo argumento opcional que es un objeto con opciones para la petición.

```js


let controller = new AbortController();

const opciones = {
    method: 'POST', // GET, POST, PUT, DELETE, etc
    headers: {
        'Content-Type': 'application/json'
    },
    signal: controller.signal, // para abortar la petición
    body: JSON.stringify({nombre: "Homero", edad: 38})
    // body: new FormData() // para enviar un formulario
}
fetch('https://jsonplaceholder.typicode.com/todos', opciones)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch( (err )=> {
        console.log(err)
    })
    .finally(() => {
        console.log("Terminó la promesa");
        controller.abort(); // cierra el puerto en nuestro backend (se cierra automáticamente a los 30 segundos)
    })
```
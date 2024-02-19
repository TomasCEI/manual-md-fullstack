# que es Json?
Es un formato de texto estructurado y ligero (JavaScript Object Notation). No deja de ser un string.
Se utiliza en 
- obtención de datos de APIs, GraphQL
- Archivos de configuración (ej: package.json)
- Interacciones con websockets.

Características:
- Comienzan y terminan con llaves o corchetes
- se utiliza la sintaxis de key:value
- sus valores pueden ser strings, números, booleanos, arrays, objetos, null.
- todas las comillas son dobles
- no soporta comentarios
- no respeta necesariamente el orden de elementos

Ejemplos:
```js
const userData = {
    nombre: "Homero",
    edad: 38,
    casado: true,
    hijos: true,
    mascotas: ["Bola de Nieve", "Ayudante de Santa", "Tenazas"],
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    }
}
```

Convertir de un objeto JS a un "string JSON" se lo llama `stringify`
Convertir de un "string JSON" a un objeto JS se lo llama `parse`    

Ejemplo:
```js
const stringParaEnviarJSON = JSON.stringify(userData);
console.log(stringParaEnviarJSON); // '{"nombre":"Homero","edad":38,"casado":false,"hijos":null,"mascotas":["Bola de Nieve","Ayudante de Santa","Tenazas"],"direccion":{"calle":"Av. Siempre Viva","numero":123}}'

const objetoRecibidoJS = JSON.parse(stringParaEnviarJSON);
console.log(objetoRecibidoJS); // {nombre: "Homero", edad: 38, casado: false, hijos: null, mascotas: Array(3), …}
```
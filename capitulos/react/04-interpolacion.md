# Interpolación

La interpolación es una técnica que nos permite insertar valores de variables o expresiones de JavaScript dentro de un string. En React, la interpolación se utiliza para insertar valores de variables o expresiones de JavaScript dentro de los return de nuestros elemento JSX.

```js
// Números
const numero = 10;
<h1>{numero}</h1>;

// Strings
const texto = "Hola Mundo";
<h1>{texto}</h1>;

// Expresiones
const suma = 10 + 5;
<h1>{suma}</h1>;

// Variables
const nombre = "Juan";
<h1>{`Hola ${nombre}`}</h1>;

// Funciones
const saludar = (nombre) => `Hola ${nombre}`;
<h1>{saludar("Juan")}</h1>;

// Objetos
const persona = { nombre: "Juan", edad: 25 };
<h1>{`Nombre: ${persona.nombre}, Edad: ${persona.edad}`}</h1>;

// Arrays
const frutas = ["Manzana", "Pera", "Uva"];
<h1>{frutas.join(", ")}</h1>;
<h1>{`Frutas: ${frutas.join(", ")}`}</h1>;

// Operaciones
const precio = 100;
const descuento = 10;
<h1>{`Precio: ${precio - descuento}`}</h1>;

// Ternarios
const edad = 18;
<h1>{edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}</h1>;
```

## Interpolación en Componentes JSX

En React, también podemos utilizar la interpolación para enviar propiedades en nuestros componentes. Para poder hacer esto, debemos encerrar el código JS entre llaves `{}`. Donde podremos incluir operaciones, variables, strings, etc.

Tipos de valores dentro de una interpolación:

```js
// Números
<Componente propiedad={10} />
// Strings
<Componente propiedad="valor" />
<Componente propiedad={"valor"} />
// Booleano
<Componente propiedad={true} />
// Variables
<Componente propiedad={variable} />
// Arrays
<Componente propiedad={["valor1", "valor2"]} />
// Props con uso de spread
<Componente {...props} />
```

### Buenas prácticas:

Al querer enviar strings o booleanos como props, no es necesario utilizar las llaves `{}`. Incluso, si el valor de nuestro Booleano es `false`, no es necesario enviarlo como prop.

```js
// Booleanos True
<Componente miBooleano={true} />
<Componente miBooleano /> //   <--- Buena práctica

// Booleanos False
<Componente miBooleano={false} />
<Componente />

// String (Buena práctica usar el string sin llaves {} )
<Componente miString={"Hola Mundo"} />
<Componente miString="Hola Mundo" /> // <---  Buena práctica
```

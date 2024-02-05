## Componentes Funcionales

Los componentes funcionales son funciones de JavaScript que reciben un objeto de propiedades y devuelven un elemento de React.

1. En la parte superior de nuestro componente, importaremos las dependencias necesarias para crear nuestro componente (css, imágenes, otros componentes, etc).
2. Luego, crearemos una función que devuelva un elemento de React. Esta función se llamará igual que nuestro componente.
3. Dentro de la función se encuentran nuestros Hooks (useState, useEffect, etc) y el return con el elemento de React que queremos devolver.
4. Exportamos nuestro componente para poder utilizarlo en otros archivos.
5. Al utilizar JSX, podemos escribir JS dentro de HTML y viceversa. Para poder hacer esto, debemos encerrar el código JS entre llaves `{}`. Donde podremos incluir operaciones, variables, strings, etc. A esto se le llama interpolación.

```js
// Ejemplo "src/Componente.jsx"

// imports
import React, { useState, useEffect } from "react";
import {} from "./ruta"; // otros imports
import {} from "./ruta"; // otros imports

// Componente (Función)
function Componente() {
   // Hooks
   const [] = useState();
   useEffect();

   // Render
   return (
      <>
         <h1>Mi componente</h1>
      </>
   );
}

// export
export default Componente;
```

También podemos crear distintos componentes en un mismo archivo y exportar cada uno de ellos.

```js
// Ejemplo "src/Componente.jsx"

// Componente1 Primario
// este se importará utilizando el código
// import Componente1 from "./Componente";
export default const Componente = () => {
   // Render
   return <h1>Mi componente</h1>;
};

// Componente2 Secundario
// este se importará utilizando el código
// import { Componente2 } from "./Componente";
export const Componente2 = () => {
   // Render
   return <h1>Mi componente 2</h1>;
};
```

Existen 2 tipos de componentes:

-  Stateless: No tienen useState simplemente son funciones que aceptan props.
-  Stateful: Tienen useState y useEffect, y manipulan los datos.

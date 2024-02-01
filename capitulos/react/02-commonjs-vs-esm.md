## ¿Qué son los Modulos?

En JavaScript, los módulos se refieren a pequeños programas que se pueden reutilizar en otros programas. Son una parte importante de cualquier lenguaje de programación, ya que proporcionan una forma de reutilizar el código, mantenerlo organizado y fácil de usar.

En ecosistemas donde predomina la utilización de NodeJS (por ejemplo, proyectos con Express), es frecuente encontrarse proyectos utilizando **CommonJS**, mientras que en los Navegadores, y en las librerías de FrontEnd se utiliza más **ES Modules**.

De a poco se está migrando todo a ES Modules, pero todavía hay muchos proyectos que utilizan CommonJS. En ambos casos podremos exportar e importar módulos, pero la sintaxis es un poco diferente.

### CommonJS

Archivo donde quiero exportar los componentes

```js
// Exportación por defecto
module.exports = componente;
// Exportación de múltiples elementos
module.exports = { componente1, componente2, componente3 };
```

Archivo donde quiera importar los componentes

```js
const componente = require("./ruta"); // importar un elemento por defecto
const { componente1, componente2, componente3 } = require("./ruta"); // importar múltiples elementos
const {
   componente1: alias1,
   componente2: alias2,
   componente3: alias3,
} = require("./ruta"); // importar múltiples elementos con alias
```

### ES Modules

Archivo donde quiero exportar los componentes

```js
// Exportación por defecto
export default componente;
// Exportación de múltiples elementos
export { componente1, componente2, componente3 };
```

Archivo donde quiera importar los componentes

```js
import componente from "./ruta"; // importar un elemento por defecto
import { componente1, componente2, componente3 } from "./ruta"; // importar múltiples elementos
import {
   componente1 as alias1,
   componente2 as alias2,
   componente3 as alias3,
} from "./ruta"; // importar múltiples elementos con alias
```

Si nuestro proyecto va a utilizar ES Modules, debemos agregar en el **package.json** la siguiente línea:

```json
// archivo package.json
{
   // ...
   "type": "module"
}
```

Para utilizar ES Modules en el Navegador, debemos agregar el atributo `type="module"` en el tag `<script>`.

```html
<script type="module" src="main.js"></script>
```

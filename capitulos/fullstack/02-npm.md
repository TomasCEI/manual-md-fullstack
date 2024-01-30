## Que es?

NPM es el sistema de gestión de paquetes por defecto para _Node.js_. Existen otros empaquetodres como lo son **yarn**, **pnpm**, **bun**, etc.
Estos nos permiten gestionar Módulos: Instalarlos, eliminarlos, actualizarlos siempre dentro de la carpeta **node_modules**.

## Entornos

Cuando instalamos un paquete, podemos hacerlo de 3 formas distintas:

```bash
# Producción (Sólo en el proyecto y se añade en el Final)
npm i nombre-paquete

# Global (En todo el ordenador, usar en todas las carpetas y proyectos)
npm i nombre-paquete --global
npm i nombre-paquete -g

# Desarrollo (Sólo en el proyecto, mientras trabajamos)
npm i nombre-paquete --save-dev
npm i nombre-paquete -D
```

Las librerías de producción son las que se enviaran al navegador. Por ejemplo "font-awesome" o "bootstrap", "jquery", etc. Las mismas se instalaran en "dependencies" dentro de package.json

Las librerías globales son las que usamos en todo el ordenador. Por ejemplo "nodemon", "eslint", "babel", "sass", etc. Las mismas se instalaran en modo "global" y no se enviaran al navegador, solo funcionarán en el entorno de desarrollo.

Las librerías de desarrollo son las que usaremos para trabajar, por ejemplo "nodemon", "eslint", "babel", "sass", etc. Las mismas se instalaran en "devDependencies" dentro de package.json y no se enviaran al navegador, solo funciarán en el entorno de desarrollo.

## Versiones

podemos instalar distintas versiones de un mismo paquete. Tenemos que tener cuidado y leer los manuales de las librerías que utilizamos, ya que ellas nos indicaran las versiones compatibles con sus paquetes.

```bash
# Instalamos la versión "nombre-paquete":"^1.0.0" actualizable
npm i nombre-paquete@1.0.0

# o la última versión
npm i nombre-paquete@latest

# Exactamente la versión "nombre-paquete":"2.3.1" exacta, NO actualizable
npm i nombre-paquete@2.3.1 -E
```

El package.json nos mostrará los paquetes instalados en alguna de las siguientes variantes:

```js
"dependencies": {
    "nombre-paquete": "^1.2.0" // Actualizable a 1.X.Y
    "nombre-paquete": "~1.2.0" // Actualizable a 1.2.X
    "nombre-paquete": "1.0.0" // Exacta
    "nombre-paquete": ">1.0.0" // todas las versiones mayores a 1.0.0
    "nombre-paquete": "<1.0.0" // todas las versiones menores a 1.0.0
    }
```

## Paquetes instalados

Podemos visualizar una lista de todos mis paquetes globales utilizando el comando **npm list -g --depth 0**:

```bash
npm list -g --depth 0

# -g o --global nos muestra los paquetes globales
# --depth 0 indica que NO muestra las dependencias, sólo los paquetes principales

C:\Users\Admin\AppData\Roaming\npm
├── gulp-cli@2.3.0
├── netlify-cli@16.4.2
├── npm-check-updates@16.7.13
├── npm@9.7.2
├── pm2@5.3.0
├── pnpm@8.11.0
├── typescript@5.0.2
├── wscat@5.2.0
└── yarn@1.22.19
```

## Desinstalar un paquete:

```js bash
// Para paquetes Locales
npm uninstall nombre-paquete

// Para paquetes globales
npm uninstall nombre-paquete --global
```

## Package.json

Es un archivo que contiene toda la información de nuestro proyecto, incluyendo los paquetes del entorno de producción, de desarrollo. Scripts, desciprción general. Se puede crear manualmente o con el comando **npm init**.

Tener en cuenta!!, el ejemplo siguiente posee comentarios para clarificación, pero un archivo JSON **NO** puede tener comentarios.

```js
{
    // descripción general del proyecto
   "name": "nombre-proyecto",
   "version": "1.0.0",
   "description": "Descripción del proyecto",
   // archivo principal del proyecto
   "main": "index.js",
   // nuestros scripts, que se ejecutan con "npm run nombre-script"
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node index.js",
      "build": "node index", // crear proyecto en modo de producción
      "dev": "nodemon index.js", // ejecutar proyecto en desarrollo
      "saludar": "cowsay Hola Mundo",
      "parrot": "parrotsay Hola Mundo"
   },
   "keywords": [],
   "author": "Nombre Apellido",
   "license": "ISC",
   // dependencias de producción
   "dependencies": {
      "express": "^4.17.1"
   },
    // dependencias de desarrollo
   "devDependencies": {
      "nodemon": "^2.0.7",
      "cowsay": "^1.6.0",
      "parrotsay": "^0.1.0"
   }
}

```

## En conclusión

Para crear un proyecto de 0, utilizamos los siguientes pasos:

1. Iniciar el proyecto con **npm init -y**
2. Instalamos dependencias como por ejemplo nodemon: **npm i nodemon -D**
3. Definir los scripts `"build":"node index"` y `"dev":"nodemon index"` en el **package.json**
4. Escribir nuestro código en **index.js**
5. Ejecutar el proyecto en modo desarrollo con **npm run dev**
6. Para de ejecutar el proyecto en modo desarrollo con **Ctrl + C**

Ejemplo de código JS:

```js
// Script index.js
const cowsay = require("cowsay");

console.clear();

console.log(
   cowsay.say({
      text: "Mi primer programa con Node.js",
      e: "oO",
      T: "U ",
   })
);

/*
 ________________________________
< Mi primer programa con Node.js >
 --------------------------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
*/
```

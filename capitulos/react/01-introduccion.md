React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

Entre sus funciones principales se encuentran:

-  Creación de **Componentes Reutilizables**.
-  Utilización de **JSX** para la creación de interfaces de usuario. Es una extensión de la sintaxis de JavaScript que permite escribir código HTML dentro de JavaScript y que reemplaza al tradicional `React.createElement()` de vanilla JS.
-  Reactividad de los estados de los componentes.
-  Se pueden trabajar con **Clases** (métodos de ciclo de vida) o con **Funciones** (hooks). En este curso vamos a trabajar con `Funciones y hooks` ya que es la metodología más moderna.

### Creación con VITE + React

Se puede crear de distintas maneras, por ejemplo mediante el uso de `create-react-app` (versión mas antigua) y `vite` (la más actual).
En el caso de utilizar un framework de React como lo es NextJs, no es necesario crear un proyecto con Vite ya que NextJs tiene su propio sistema de compilación.

```bash
npm create vite@latest
# seguir los pasos:
# eligiendo nombre del proyecto
# React como librería
# Javascript como lenguaje.

cd mi-proyecto
npm install
npm run dev
```

### Estructura de carpetas

```bash
mi-proyecto             // nombre del proyecto
├── node_modules        // dependencias
├── public              // archivos de acceso público
└── src                 // código fuente de mi proyecto (js, jsx, css, etc)
    ├── assets          // archivos estáticos (imágenes, videos, etc)
    ├── components      // carpeta con componentes
    ├── ...             // otros archivos
    ├── App.jsx         // componente principal
    └── main.jsx        // archivo principal
├── .gitignore          // archivos ignorados por git
├── vite.config.js      // configuración de vite
├── ...                 // otras configuraciones
├── package-lock.json   // dependencias con versiones exactas
├── package.json        // Configuración del proyecto + lista de dependencias
└── index.html          // archivo principal
```

### React Developer Tools

Es un plugin de Chrome que nos permite inspeccionar los componentes de React en el navegador y así poder ver el estado de los componentes, las props, el árbol de componentes, etc.

Link de descarga: [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

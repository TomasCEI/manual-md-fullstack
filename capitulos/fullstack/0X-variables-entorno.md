

# Que son?

Son valores que se pueden configurar en el sistema operativo y que pueden ser accedidos por las aplicaciones que se ejecutan en ese sistema. Estas variables se utilizan para configurar el entorno de ejecución de una aplicación, como por ejemplo, la URL de una base de datos, el puerto en el que se ejecuta un servidor, o el nivel de log de una aplicación.

# Por que son necesarias?

Necesarias para configurar el entorno de ejecución de una aplicación de forma dinámica, sin tener que modificar el código fuente de la aplicación. Esto permite que una aplicación pueda ejecutarse en diferentes entornos sin tener que modificar su código fuente, lo que facilita su despliegue y mantenimiento.

## Carga de variables desde Linux y Windows

Hay una pequeña diferencia de como se utilizan las variables de enotorno en nuestro archivo `package.json` en Linux y Windows.

Si nuestro OS es de windows debemos utilizar el siguiente comando:

```bash
"start": "set NODE_ENV=development && node index.js"
```

mientras que si nuestro OS es Linux debemos utilizar el siguiente comando:

```bash
"start": "NODE_ENV=development node index.js"
```


## Uso de variables desde .env en Express (paquete DOTENV)

El paquete dotenv nos permite cargar variables de entorno desde un archivo .env. Para instalarlo, ejecutamos el siguiente comando:

```bash
npm i dotenv --save
```

Luego, en nuestro archivo principal, importamos el paquete y lo configuramos para que cargue las variables de entorno desde el archivo .env:

```javascript
// método CommonJS
require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000
}

// método ES6
import dotenv from 'dotenv';
dotenv.config();


export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000
}
```

## Uso de variables de entorno en Vite React

Para utilizar variables de entorno en Vite, debemos crear un archivo `.env` en la raíz de nuestro proyecto. En este archivo, podemos definir nuestras variables de entorno de la siguiente manera:

```bash
VITE_API_URL=https://api.example.com
VITE_API_KEY=1234567890
```

Luego, en nuestro código, podemos acceder a estas variables de entorno de la siguiente manera:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
```

Recuerda que en VITE, todas las variables de entorno deben comenzar con `VITE_` para que sean accesibles en el código.


### Ejemplo de uso

Link de interes y manual de uso con ejemplos:

[Explicación - creación y ejemplos](https://www.victorvr.com/tutorial/variables-de-entorno-con-nodejs)
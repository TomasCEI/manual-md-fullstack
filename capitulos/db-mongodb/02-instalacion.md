## Instalación en Windows
 
La instalación en windows es bastante mas sencilla. Debemos descargar el instalador `Community Server` de la página oficial de MongoDB.

 [Descargar MongoDB Community](https://www.mongodb.com/try/download/community)

 Dejar tildada la opción para también instalar `MongoDB Compass`. Si no lo hacemos, podemos descargarlo desde la página oficial de MongoDB.

### Posibles errores

Si al intentar conectarnos a la DB de Mongo, nos devuelve ECOONREFUSED, es posible que el servicio de Mongo no esté iniciado. Para ello, podemos abrir una terminal de Simbolo de Sistema (con click derecho ejecutar como administrador) y ejecutar el siguiente comando: `net start MongoDB`.

## Instalación en Mac

La instalación bajo Mac es mas compleja. Para ellos nos ayudaremos de `Homebrew` para instalar MongoDB. El tutorial oficial lo pueden encontrar en esta web: [Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Instalación de Command Line Tools de Xcode
El primer paso es instalar X-Code (necesario para instalar Homebrew). Para ello abrimos una terminal y ejecutamos el siguiente comando:

```bash
xcode-select --install
```
Sigue las instrucciones en pantalla para completar la instalación.

### Instala HomeBrew:

Una vez que las Command Line Tools de Xcode estén instaladas, puedes proceder a instalar Homebrew. Para ello, ejecuta el siguiente comando en la terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Este comando descargará e instalará Homebrew en tu sistema. Verificar la instalación ejecutando `brew --version`

### Instalar MongoDB con Homebrew:

Una vez que Homebrew esté instalado, puedes instalar MongoDB con el siguiente comando:

```bash
brew tap mongodb/brew
brew update
brew install mongodb-community@7.0
```

### Iniciar MongoDB:

Para iniciar MongoDB, ejecuta el siguiente comando:

```bash
brew services start mongodb-community@7.0
```

y para detenerlo:
    
```bash
brew services stop mongodb-community@7.0
```


Para verificar de que se ha instalado correctamente, ejecuta el siguiente comando `mongo --version`.

Esto mostrará la versión de MongoDB instalada en tu sistema. Con estos pasos, deberías tener MongoDB instalado y funcionando en tu Mac.

### Descargar MongoDB Compass para Mac

Para descargar MongoDB Compass, puedes hacerlo desde la página oficial de MongoDB. [Descargar MongoDB Compass](https://www.mongodb.com/try/download/compass). Hay 2 versiones, y debes elegir la que corresponda al CHIP de tu ordenador. Para ver que CHIP posee tu MAC (Intel vs M1) debes ir a la manzana en la esquina superior izquierda de tu pantalla, y seleccionar `Acerca de este Mac` o en la terminal ejecutar `uname -m`.


### Posibles errores

Cuando hayamos terminado de instalarlo, es posible que debamos ejecutar el servicio desde la misma terminal.

Problemas al escribir MongoDB:
Si existe algún problema cuando escribes `mongo`, lo que tenemos que hacer dentro de la carpeta oculta "User/local" tenemos que activar los permisos de escritura a todos los archivos con el perfil "everyone". Para ello, ejecutamos el siguiente comando:

```bash
cd /usr/local
sudo chmod -R a+w *
```
o  bien

```bash
sudo chown -R $USER /usr/local
```





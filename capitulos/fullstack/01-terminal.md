## Terminal, Que es?

Es una herramienta que nos permite mediante comandos interactuar con el sistema operativo (windows, linux, mac, etc).

Nos permite gestionar archivos, carpetas, procesos, y hasta editar nuestro código. Cada sistema operativo tiene su propa terminal.

## Para que sirven?

Las terminales vamos a utilizarla entre otras cosas para las siguientes tareas:

-  Sistema de gestión de dependencias como NPM
-  Trabajar con Bundling, testing y frameworks
-  Crear y gestionar aplicaciones mediante el CLI (Command Line Interface)
-  Uso de GIT (ej: git push, git pull, git commit, etc)

## Movimientos entre directorios:

```bash

 cd nombre-carpeta # Entrar a una carpeta
 cd nombre-carpeta/nombre-carpeta # Entrar a una carpeta dentro de otra carpeta
 cd .. # Salir de una carpeta
 cd ../.. # Salir de dos carpetas
 cd / # Ir a la raíz del sistema
 cd "Mi carpeta" # Entrar a una carpeta con espacios en el nombre (no recomendado)
 D: # Cambiar de unidad al disco D (Windows)
```

## Crear y eliminar carpetas:

```bash

 mkdir nombre-carpeta # Crear una carpeta
 rmdir nombre-carpeta # Eliminar una carpeta
 rm -rf nombre-carpeta # Eliminar una carpeta y todo su contenido

```

## Ver contenido de una carpeta

Los siguientes son comandos para Linux y Mac. (en Windows cambia un poco la sintaxis)

```bash
 ls # Ver el contenido de una carpeta
 ls -a # Ver el contenido de una carpeta incluyendo los archivos ocultos
 ls -l # Ver el contenido en formato largo (mas información)
 ls -la # Combina -l y -a
```

## limpiar pantalla y cortar un proceso

```bash
clear # Limpiar la pantalla

ctrl + c # Cortar un proceso
```

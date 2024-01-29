<h1>Soy intro Javascript HTML</h1>

Son contenedors en memoria (RAM) para almacenar información. 

<h3>Comentarios</h3>

```js
    /* Podemos comentar de esta manera, al igual que en CSS... */
    //...pero también tendremos esta para comentarios cortos de una línea
```



<h3>Variables</h3>


En `JavaScript` tenemos variables de distintos tipos, pero *no* es necesario declararlas con un tipo de dato específico, ya que el lenguaje es de `tipado dinámico`.  
Esto quiere decir que el tipo de dato de la variable se determina en tiempo de ejecución.  

Todas las variables de JavaScript deben identificarse con nombres únicos.  Estos nombres únicos se denominan identificadores.  
Los identificadores pueden ser nombres cortos (como x e y) o nombres más descriptivos (edad, suma, volumen total).  

### Reglas de nombres de variables

- Los nombres pueden contener letras, dígitos, guiones bajos y signos de dólar.
- Los nombres deben comenzar con una letra.
- Los nombres también pueden comenzar con $ y _ (pero se suelen utilizar para casos especiales como librerías).
- Los nombres distinguen entre mayúsculas y minúsculas (y e Y son variables diferentes).
- Las palabras reservadas (como las palabras clave de JavaScript) no se pueden utilizar como nombres.


### Tipos de Variables

```js
    var tf_seleccionado= true; // Booleano (verdadero o falso)

    var nombre="Juan"; // Variable de texto / String

    var x = 5; // Variable de Tipo numérico (entero o decimal)

    var A_usuarios = ["Juan", "Pedro", "María"]; // Variable de Tipo Array

```


<h3>Variables del tipo Función y Objeto</h3>

```js
    var myFunction = function() {
        return "Hola";
    }; // Variable de Tipo Función

    var Obj_user = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        direccion: {
            calle: "Av. Siempre Viva",
            numero: "742"
        },
        saludar =  function() { alert("Hola"); }
    }; // Variable de Tipo Objeto
```
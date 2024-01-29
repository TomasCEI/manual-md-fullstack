## Variables:

 - contenedores donde podremos guardar información
 - se asigna información con el '`=`' de derecha a izq.
 - no puedo usar caracteres especiales(`@!#%&`) ni espacios.
 - no puedo empezar con números o operadores (`+,-,*,/`)
 - no puedo usar palabras reservadas (`var, let, const, function, etc`)
 - SI puedo usar `$` y `_` (pero se suelen utilizar para casos especiales como librerías).
 - el standard y recomendación para definir variables es `camelCase` (primera letra minúscula, y las siguientes palabras con mayúscula)
 - `kebab-case` se ustiliza en HTML y CSS pero NO en JS. Porque equivale a restar
 - `sanke_case` no se suele utilzar en JS, pero se puede según preferencias.
 - por defecto y para seguridad se recomienda utilizar `const` para definir las variables, y solo utilizar `let` o `var` a los elementos que van a cambiar su valor.
 - se puede utilizar "`typeof`" con variables para ver que tipo de variable es.

```js

    let nombre = "Juan";
    console.log(typeof nombre);


    let edad = 25;
    let altura = 1.75;
    let tf_estudiante = true;
    let A_usuarios = ["Juan", "Pedro", "María"];
    let obj_usuario = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        direcciones: [{
            calle: "Av. Siempre Viva",
            numero: "742",
            pisos: ["piso1", "piso2", "piso3"]
        },{
            calle: "Av. Siempre Viva",
            numero: "742"
        },{
            calle: "Av. Siempre Viva",
            numero: "742"
        }];
    };
```

### Shortcuts para actualizar variables:

Los shortcuts son atajos para actualizar variables. Por ejemplo:
```js

    let resultado=5; // definimos nuestra variable

    resultado=resultado+2; // actualizamos el valor sumandole 2.
    resultado +=2; // este es equivalente a la linea de arriba

    resultado++; // sumar 1
    resultado--; // restar 1
```


Ejemplos con otras operaciones:
```js
    miValor += 2; // variable = variable + 2;
    miValor-= 2; // variable = variable - 2;
    miValor*= 2; // variable = variable * 2;
    miValor/= 2; // variable = variable / 2;
    miValor++; // variable = variable + 1;
    miValor--; // variable = variable - 1;
```

### Actividad:
 crear un carrito de compras con 3 productos (bocadillo, cafe, tostadas) y agregar los botones:

Botones para cada producto:
 - Agrega a carrito
 - Agregar 2 a carrito 
 - Agregar 3 a carrito 
 - Borrar de Carrito  (-1)

 Botones comaprtidos:
 - Vaciar carrito
 - Mostrar cantidad de items por consola y por alert.

total de botones: 14

Debe mostrar por **consola** y en **pantalla** (Con el uso de `alert()`) la cantidad de productos en el carrito.
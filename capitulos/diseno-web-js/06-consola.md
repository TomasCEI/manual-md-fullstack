### Consola y Console.log
El `console.log` es una herramienta fundamental en el uso de Javascript. Nos permite imprimir en la consola del navegador información que nos puede ser útil para debuggear nuestro código o para mostrar información al usuario.

Escribir javascript directamente en las etiquetas no figura pero puedo redirigir esta información a la consola, con la función `console.log()`:

Recuerda que podemos abrir la consola de desarrollador con `F12` o `Ctrl+Shift+I` o `Command+Option+I`

```js
    2+2 // no figura  en consola

    console.log(2+2);
    console.error("Soy un error");
    console.warn("Soy un warning");
    console.table(["juan","maria", "pedro"]);
    console.table({"name":"Josefa","edad":25});
```

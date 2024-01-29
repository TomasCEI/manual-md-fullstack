# Javascript de Cero


![img css-js-html](uploads/imgs/html-css-js.png)

- HTML es el contenido de la página (textos, imagenes, botones)
- CSS es la presentación de la página (colores, tamaños, posiciones)
- JS es la interacción de la página (animaciones, validaciones, efectos)



Terminología:
- instrucciones de código
- JS Lenguaje de programación, otros ejemplos: Python, Java, PHP

### Actividad

en cualquier sitio web, podemos abrir la consola de desarrollador con `F12` o `Ctrl+Shift+I` o `Command+Option+I`

Abrir consola y probar el siguiente código:
```js
    alert("Hola CEI");
```

Probar algunas operaciones  Matemáticas:
```js
    2+2
    10-3
    2*2
    4/2
    4%2
    2**2
```

Modificar el contenido de nuestra página web:
```js
    document.body.innerHTML = "Hola CEI";
```


## JS en archivos HTML:
- Se puede ejecutar en etiquetas `<script></script>` deberían ponerse en el head ya que es parte del código invisible, pero por convención se ponen al final, ya que necesito que se cargue previamente el HTML en caso de querer seleccionar elementos del `DOM` que veremos mas adelante.
- Se puede ejecutar en archivos externos .js `<script src="js/script.js"></script>`
- se puede ejecutar en linea `<button onclick="alert('Felicidades!');"></button>`. Tener en cuenta que primero se ejecutará el código que se encuentre entre etiquetas `<script></script>` del documento, y luego el de `onclick=""` en caso de hacer click en el elemento.

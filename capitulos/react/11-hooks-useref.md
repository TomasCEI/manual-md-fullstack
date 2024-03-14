El Hook `useRef` nos permite acceder a un nodo del DOM o a un valor mutable que no se pierde entre renderizaciones. Es útil para guardar referencias a elementos del DOM, como por ejemplo, para acceder a un input o para medir el tamaño de un elemento.



UseRef devuelve un objeto mutable cuya propiedad `current` es inicializada con el argumento pasado (`initialValue`). El objeto devuelto persistirá durante todo el ciclo de vida del componente.

### Ejemplo useRef para almacenar un valor mutable

Es importante destacar que el objeto devuelto por useRef persistirá durante todo el ciclo de vida del componente, lo que significa que su valor se mantendrá intacto incluso cuando el componente se vuelva a renderizar. Esto es útil cuando necesitamos almacenar datos que no deben provocar una nueva renderización cuando cambian.

```js
import { useRef } from "react";

function MyComponent() {
    const counterRef = useRef(0);

    const incrementCounter = () => {
        counterRef.current++;
        console.log("Counter value:", counterRef.current);
    };

    return (
        <>
            <button onClick={incrementCounter}>Increment Counter</button>
        </>
    );
}
```

En este ejemplo, hemos creado una referencia llamada "counterRef" y la hemos inicializado con el valor 0. Luego, hemos creado una función llamada "incrementCounter" que incrementa el valor de la referencia "counterRef" y lo imprime en la consola. Al hacer click en el botón "Increment Counter", el valor de la referencia "counterRef" se incrementará y se imprimirá en la consola, pero el componente no se volverá a renderizar, ya que el valor de la referencia no está en el estado del componente.

### Ejemplo Acceso a un elementos del DOM

```js
import { useRef } from "react";

function MiComponente() {

    // Es como hacer esto: const inputElement = {current: "Nodo del Dom"}. 
    // Podemos acceder al elemento utilizando ".current"
    const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

```

En este ejemplo hemos creado un input, y hemos creado su referencia llamada "inputElement". Al hacerle click al botón "Focus Input", el input se enfocará, ya que poseemos una referencia del mismo en el DOM.





### Ejemplo useRef para medir el tamaño de un elemento

```js
import { useRef, useEffect } from "react";

function MyComponent() {
    const divRef = useRef(null);

    useEffect(() => {
        // Obtener el tamaño del elemento al montar el componente
        console.log("Div ancho:", divRef.current.offsetWidth);
    }, []);

    return (
        <div ref={divRef}>Este es mi elemento a medir</div>
    );
}
```

En este ejemplo, hemos creado una referencia llamada "divRef" y la hemos asignado a un div. Luego, hemos utilizado un efecto para obtener el ancho del div al montar el componente. El valor del ancho del div se imprimirá en la consola al montar el componente.
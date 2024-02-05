Los hooks son funciones que nos permiten agregar estado y otras características de React a los componentes funcionales.

El Hook `useState` nos permite añadir estado a nuestro componente.
Cada vez que realicemos un cambio en el estado, el componente se volverá a renderizar.
El hook useState devuelve un array con dos elementos:

-  El primer elemento es el valor del estado.
-  El segundo elemento es una función que nos permite actualizar ese estado.

Podemos definir el valor inicial del estado como argumento del hook useState.

En el siguiente ejemplo, creamos un contador que se incrementa cada vez que se hace click en el botón.

```js
// Ejemplo de Componente "src/Contador.jsx"

export const Contador = () => {
   // Hooks
   const [count, setCount] = useState(0); // count inicia en 0

   // Render
   return (
      <div>
         <p>Has hecho click {count} veces</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
   );
};
```

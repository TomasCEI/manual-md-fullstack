Los hooks son funciones que nos permiten agregar estado y otras características de React a los componentes funcionales. Se pueden considerar como los **Super Poderes** de react. Cada Hook resuelve un problema común en React, y nos permite reutilizar lógica de estado y efectos entre componentes.

![img](uploads/imgs/react-hooks.png)

Algunos de ellos son: `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, `useRef`, entre otros. Hasta podremos crear nuestros porpios **Custom Hooks**.

El Hook `useState` es el mas importante y mas utilizado de los Hooks. Ya que nos permite añadir estado a nuestro componente.
Cada vez que realicemos un cambio en el estado, el componente se volverá a renderizar.

![img](uploads/imgs/react-hooks-usestate.png)

El hook `useState` devuelve un array con dos elementos:

-  El primer elemento es el valor del estado, y debe considerarse como de **Solo Lectura**.
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

El Hook `useEffect` nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
El hook useEffect recibe dos argumentos:

-  El primero es una función que se ejecutará cuando se monte, desmonte o actualice el componente.
-  El segundo es un array con las dependencias del hook. Si el array está vacío, la función se ejecutará solo cuando se monte y desmonte el componente. Si el array contiene elementos, la función se ejecutará cuando se monte, desmonte o actualice el componente, pero solo si los valores de las dependencias han cambiado.

En el siguiente ejemplo, creamos un componente que muestra un mensaje cuando se monta y se desmonta.

```js
// Ejemplo de Componente "src/Mensaje.jsx"

export const Mensaje = () => {
   // Hooks
   useEffect(() => {
      console.log("El componente se ha montado");

      // Limpieza opcional al desmontar el componente
      return () => {
         console.log("El componente se ha desmontado");
      };
   }, []);

   // Render
   return <p>Mensaje</p>;
};
```

En el siguiente ejemplo, creamos un componente que muestra un mensaje cada vez que actualizo el estado de mi variable `count`.

```js
// Ejemplo de Componente "src/Mensaje.jsx"
export const Mensaje = () => {
   // Hooks
   const [count, setCount] = useState(0);
   useEffect(() => {
      console.log("El componente se ha actualizado");
   }, [count]);

   // Render
   return (
      <div>
         <p>Has hecho click {count} veces</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
   );
};
```

Existen muchas formas de gestionas las Props en un componente funcional, pero la más común es desestructurar las props en el argumento de la función. De esta forma, podemos acceder a las props directamente sin tener que usar `props.prop1` o `props.prop2`.

```js
const NombreComponente = (props) => {
   // Deconstruimos las props
   const { prop1, prop2 } = props;

   // Usamos la sprops
   return (
      <div>
         <h1>{prop1}</h1>
         <p>{prop2}</p>
      </div>
   );
};
```

incluso si son pocas, se pueden deconstruir dentro del mismo paréntesis de la función.

```js
const NombreComponente = ({ prop1, prop2 }) => {
   return (
      <div>
         <h1>{prop1}</h1>
         <p>{prop2}</p>
      </div>
   );
};
```

En caso de no recibir una prop, podemos asignar un valor por defecto. De esta manera me aseguro de tener siempre un valor disponible para esa prop.

```js
const NombreComponente = ({ prop1 = "valor por defecto", prop2 }) => {
   return (
      <div>
         <h1>{prop1}</h1>
         <p>{prop2}</p>
      </div>
   );
};
```

## Prop de Children

En React, podemos pasar un **prop especial** llamado `children` que nos permite pasar elementos hijos a un componente. De esta forma, podemos anidar componentes dentro de otros componentes.

```js
return (
   <ComponentePadre color="Red">
      <p>Hijo de Componente Padre</p>
   </ComponentePadre>
);

const ComponentePadre = ({ children, color }) => {
   return (
      <div color={color}>
         <h1>Componente Padre</h1>
         {children} {/* Aquí se renderiza el hijo */}
      </div>
   );
};
```

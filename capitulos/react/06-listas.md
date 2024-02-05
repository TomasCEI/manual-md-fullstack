# Listas en JSX

En React, podemos utilizar listas para mostrar elementos de forma dinámica. Para poder hacer esto, debemos utilizar el método `map` para recorrer un array y devolver un nuevo array con los elementos que queremos mostrar.

**Importante:** Cada elemento de la lista debe tener un atributo `key` único. En el caso de objetos, los mismos suelen tener un id único, pero en el caso de arrays, podemos utilizar el índice del array como `key`.

```js
// Ejemplo de Lista de arrays simple
const frutas = ["Manzana", "Pera", "Uva"];
{
   frutas.map((fruta, index) => <li key={index}>{fruta}</li>);
}

// Ejemplo de Lista de objetos
const personas = [
   { id: 1, nombre: "Juan", edad: 25 },
   { id: 2, nombre: "Maria", edad: 30 },
   { id: 3, nombre: "Carlos", edad: 20 },
];

// Ejemplo Sin componente y sin deconstructing
{
   personas.map((persona) => (
      <li key={persona.id}>
         {persona.nombre} - edad: {persona.edad}
      </li>
   ));
}

// Ejemplo Sin componente y con deconstructing
{
   personas.map(({ id, nombre, edad }) => (
      <li key={id}>
         {nombre} - edad: {edad}
      </li>
   ));
}

// Ejemplo Con componente y sin deconstructing
{
   personas.map((persona) => <Persona key={persona.id} persona={persona} />);
}

// Ejemplo Con componente y con deconstrucción
{
   personas.map(({ id, nombre, edad }) => <Persona key={id} nombre={nombre} edad={edad} />);
}

// Ejemplo Con componente y Spread
{
   personas.map((persona) => <Persona key={persona.id} {...persona} />);
}
```

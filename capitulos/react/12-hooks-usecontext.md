El Hook `useContext` es una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel, evitando el llamado `prop drilling`. Nos permite acceder a los datos desde cualquier componente importando el contexto y utilizando el hook `useContext`. Para ello necesitamos crear un contexto con `React.createContext` y luego utilizar el hook `useContext` para acceder a los datos.


![img](uploads/imgs/react-hooks-usecontext.png)



### Crear un contexto

Para crear un contexto, utilizamos `React.createContext` y le pasamos un valor por defecto. Por ejemplo, para crear un contexto para el tema de la aplicación (modo oscuro/claro), podríamos utilizar el siguiente código:

```js
// Nuestra Main App
import { useState, createContext } from "react";

export const ThemeContext = createContext();

function MiApp ( ) {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <SideBar />
        <Home />
        </ThemeContext.Provider>
    );
}
```

Hemos exportado el contexto recientemente creado ("ThemeContext") y ademmás hemos rodeado nuestros componentes padres, con el nuevo provider <ThemeContext.Provider>


### Acceder a un contexto

```js
// Cualquiera de nuestros componentes Hijos que quieran accder a dicha información
import { useContext } from "react";
import { ThemeContext } from "./MiApp";

function Sidebar() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
        </div>
    );
}
```


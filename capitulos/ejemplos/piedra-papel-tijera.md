## Piedra Papel o Tijera

Ejemplo de Proyecto para jugar a Piedra Papel o Tijera.

### Funciones:

- **jugar()**: inicia el juego y llama a las funciones `elegirJugadorAI()` y por último `showScore()`
- **showScore()**: Manipula el DOM para mostrar el puntaje y estadísticas
- **elegirJugadorAI()**: Función que selecciona una de las opciones para el Jugador Computador.
- **AIvsAI()**: Inicia partida de AI vs AI utilizando repetidas veces utilizando `setInterval()` para correr nuevamente la función `jugar()` cada 0.1 segundo.
- **graficar()**: Crea barra gráfica entre ganadoos y perdidos (no muestra empates).

### Características:

- Llamado a funciones desde **button** con `onClick`
- Utiliza random para elegir un item de un array:

```js
const opciones = ["piedra", "papel", "tijera"];
const numero = Math.floor(Math.random() * opciones.length);
const usuario = opciones[numero];
```

- Utiliza un objeto Score para almacenar la información de la partida y estadísticas:

```js
const objScore = {
  ganadas: 0,
  perdidas: 0,
  empatadas: 0,
  stats: {
    ai_piedra: 0,
    ai_papel: 0,
    ai_tijera: 0,
    user_piedra: 0,
    user_papel: 0,
    user_tijera: 0,
  },
};
```

Puedes abrir el ejemplo con el siguiente Link y ver su código fuente haciendo click derecho y seleccionando **Ver código fuente de la página** o **inspeccionar elemento**:

[Piedra papel tijera](./uploads/ejemplos/piedra-papel-tijera/index.html)

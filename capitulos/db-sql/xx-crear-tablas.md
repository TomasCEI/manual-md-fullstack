Para crear una tabla en MySQL, se utiliza el comando `CREATE TABLE` seguido del nombre de la tabla y los campos que se desean crear. Por ejemplo, para crear una tabla llamada `posts` con los campos `id`, `title`, `content` y `created_at`, se utiliza el siguiente comando:

```js
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Es importante recalcar el uso de `AUTO_INCREMENT` para el campo `id` que se encargará de generar un número único para cada registro. También se utiliza `PRIMARY KEY` para indicar que el campo `id` es la clave primaria de la tabla.

También podemos ver el uso de `DEFAULT CURRENT_TIMESTAMP` para el campo `created_at` que se encargará de asignar la fecha y hora actual al momento de crear un nuevo registro.

Para modificar una tabla en MySQL, se utiliza el comando `ALTER TABLE` seguido del nombre de la tabla y la modificación que se desea realizar. Por ejemplo, para agregar un campo llamado `author` a la tabla `posts`, se utiliza el siguiente comando:

```js
ALTER TABLE posts
ADD author VARCHAR(255);
```


Para vaciar una tabla, se utiliza el comando `TRUNCATE TABLE` seguido del nombre de la tabla. Por ejemplo, para vaciar la tabla `posts`, se utiliza el siguiente comando:

```js
TRUNCATE TABLE posts;
```

Para eliminar una tabla en MySQL, se utiliza el comando `DROP TABLE` seguido del nombre de la tabla. Por ejemplo, para eliminar la tabla `posts`, se utiliza el siguiente comando:

```js
DROP TABLE posts;
```
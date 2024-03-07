Las `PRIMARY KEY` y `FOREIGN KEY` son dos conceptos fundamentales en SQL. 

La `PRIMARY KEY` es un campo o conjunto de campos que identifica de forma única a cada registro en una tabla. Ya la hemos utilizado en nuestras tablas, la misma era el campo `id` que identificaba de forma única a cada post en la tabla `posts`. Este identificador **único** es muy importante, ya que nos permite relacionar los registros de una tabla con los de otra.

En este capítulo veremos cómo utilizar `PRIMARY KEY` y `FOREIGN KEY` en nuestras tablas.

### Crear una `PRIMARY KEY`

Para crear una `PRIMARY KEY` en una tabla, utilizamos la cláusula `PRIMARY KEY` seguida por el nombre del campo que queremos utilizar como clave primaria. Por ejemplo, para crear una `PRIMARY KEY` en el campo `id` de la tabla `posts`, utilizamos la siguiente consulta:

```sql
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  PRIMARY KEY (id)
);
```

En este caso, estamos creando una `PRIMARY KEY` en el campo `id` de la tabla `posts`. Esto significa que el campo `id` identificará de forma única a cada registro en la tabla `posts`.

Si deseamos modificar una tabla existente para agregar una `PRIMARY KEY`, podemos utilizar la siguiente consulta:

```sql
ALTER TABLE posts
ADD PRIMARY KEY (id);
```

# Foreign Keys

Las `FOREIGN KEY` son un tipo de restricción que se utiliza para garantizar la integridad referencial de los datos. Esto significa que las `FOREIGN KEY` garantizan que los valores en un campo coincidan con los valores en otro campo en otra tabla.

En definitiva una `FOREIGN KEY` es un campo o conjunto de campos que apunta a la `PRIMARY KEY` de otra tabla.

### Crear una `FOREIGN KEY`

Para crear una `FOREIGN KEY` en una tabla, utilizamos la cláusula `FOREIGN KEY` seguida por el nombre del campo que queremos utilizar como clave foránea y la cláusula `REFERENCES` seguida por el nombre de la tabla y el campo al que queremos hacer referencia. Por ejemplo, para crear una `FOREIGN KEY` en el campo `user_id` de la tabla `posts` que haga referencia al campo `id` de la tabla `users`, utilizamos la siguiente consulta:

```sql
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  user_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Algo muy util al utilizar foreign key, es que podemos aprovechar esta relación entre tablas, para eliminar o actualizar registros de forma automática. Por ejemplo, si eliminamos un usuario, podemos eliminar todos los posts asociados a ese usuario. Para lograr esto, podemos utilizar la cláusula `ON DELETE CASCADE` en la definición de la `FOREIGN KEY`. Por ejemplo, para eliminar todos los posts asociados a un usuario cuando eliminamos ese usuario, utilizamos la siguiente consulta:

```sql
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  user_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```


Si deseamos agregar una `FOREIGN KEY` a una tabla existente, podemos utilizar la siguiente consulta:

```sql
ALTER TABLE posts
ADD FOREIGN KEY (user_id) REFERENCES users(id);
```
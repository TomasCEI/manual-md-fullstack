Las consultas son el corazón de SQL. Son las instruccjsones que le dicen a la base de datos qué datos queremos obtener. Las consultas se realizan con la instrucción `SELECT` y pueden ser muy simples o muy complejas. En este capítulo veremos cómo hacer consultas sencillas y cómo combinarlas para obtener resultados más complejos.

### Obtener todos los datos de una tabla

Para obtener todos los datos de una tabla, utilizamos la instrucción `SELECT` seguida por el nombre de la tabla. Por ejemplo, para obtener todos los datos de la tabla `posts`, utilizamos la siguiente consulta:

```js
SELECT * FROM posts;
```

### Obtener datos específicos de una tabla

Si queremos obtener solo algunos campos de una tabla, podemos especificar los nombres de los campos que queremos obtener en lugar de `*`. Por ejemplo, para obtener solo los campos `title` y `content` de la tabla `posts`, utilizamos la siguiente consulta:

```js
SELECT title, content FROM posts;
```

### Obtener datos filtrados de una tabla

Si queremos obtener solo los datos que cumplan con ciertas condiciones, podemos utilizar la cláusula `WHERE`. Por ejemplo, para obtener solo los posts cuyo `id` sea 1, utilizamos la siguiente consulta:

```js
SELECT * FROM posts WHERE id = 1;
```

### Ordenar los resultados

Si queremos ordenar los resultados de una consulta, podemos utilizar la cláusula `ORDER BY`. Por ejemplo, para obtener todos los posts ordenados por `created_at` de forma descendente, utilizamos la siguiente consulta:

```js
SELECT * FROM posts ORDER BY created_at DESC;
```

### Uso de LIKE

Si queremos buscar registros que contengan una cadena de texto específica, podemos utilizar la cláusula `LIKE`. Por ejemplo, para obtener todos los posts cuyo `title` contenga la palabra "post", utilizamos la siguiente consulta:

```js
SELECT * FROM posts WHERE title LIKE '%post%';
```

Caracteres especiales que podemos utilizar con `LIKE`:
- "%": representa cero, uno o varios caracteres, por ejemplo, "a%" encuentra cualquier valor que comience con "a".
- "_": representa un solo caracter, por ejemplo, "h_t" encuentra "hat", "hot" y "hit".

### Limitar los resultados
Si queremos limitar la cantidad de resultados que obtenemos, podemos utilizar la cláusula `LIMIT`. Por ejemplo, para obtener solo los 5 primeros posts, utilizamos la siguiente consulta:

```js
SELECT * FROM posts LIMIT 5;
```

### Alias de campos
Podemos utilizar alias para cambiar el nombre de los campos en los resultados de una consulta. Por ejemplo, para obtener el `id` de los posts con el nombre `id_posts`, utilizamos la siguiente consulta:

```js
SELECT id AS id_posts FROM posts;
```

### Combinar consultas

Podemos combinar consultas utilizando las cláusulas `UNION`, `INTERSECT` y `EXCEPT`. Por ejemplo, para obtener todos los posts cuyo `id` sea 1 o 2, utilizamos la siguiente consulta:

```js
SELECT * FROM posts WHERE id = 1
UNION
SELECT * FROM posts WHERE id = 2;
```

- `Union` es una operación que combina los resultados de dos consultas en un solo conjunto de resultados. Los resultados de la primera consulta se combinan con los resultados de la segunda consulta y se eliminan los duplicados.
- `Intersect` es una operación que devuelve los resultados que están presentes en ambas consultas.
- `Except` es una operación que devuelve los resultados que están presentes en la primera consulta pero no en la segunda.

### Consultas con JOIN

Si queremos obtener datos de varias tablas al mismo tiempo, podemos utilizar la cláusula `JOIN`. Por ejemplo, si tenemos una tabla `posts` y una tabla `authors` con una relación de uno a muchos, podemos obtener los posts con el nombre del autor de la siguiente manera:

```js
SELECT posts.title, authors.name FROM posts JOIN authors ON (posts.author_id = authors.id);
``` 

- `INNER JOIN` devuelve los registros que tienen valores coincidentes en ambas tablas.
- `LEFT JOIN` devuelve todos los registros de la tabla izquierda y los registros coincidentes de la tabla derecha.
- `RIGHT JOIN` devuelve todos los registros de la tabla derecha y los registros coincidentes de la tabla izquierda.

Por ejemplo, para obtener todos los posts con el nombre del autor, incluso si no tienen un autor asociado, utilizamos la siguiente consulta:

```js
SELECT posts.title, authors.name FROM posts LEFT JOIN authors ON (posts.author_id = authors.id);
```

En cambio, para obtener todos los autores, incluso si no tienen posts asociados, utilizamos la siguiente consulta:

```js
SELECT posts.title, authors.name FROM posts RIGHT JOIN authors ON (posts.author_id = authors.id);
```

## Operaciones durante la consulta

Es posible realizar operaciones durante la consulta, como contar, sumar, promediar, obtener el valor mínimo o máximo de un campo. Para ello, utilizamos las funciones `COUNT`, `SUM`, `AVG`, `MIN` y `MAX`. Tener en cuenta que debemos decidir si deseamos realizar estas operaciones durante la consulta o si es mejor realizarlas en el código de la aplicación.

### Count

La función `COUNT` nos permite contar la cantidad de registros que cumplen con cierta condición. Por ejemplo, para contar la cantidad de posts, utilizamos la siguiente consulta:

```js
SELECT COUNT(*) AS cant_posts FROM posts;
```

### Sum

La función `SUM` nos permite sumar los valores de un campo. Por ejemplo, para sumar la cantidad de comentarios de todos los posts, utilizamos la siguiente consulta:

```js
SELECT SUM(comments_count) AS cant_comments FROM posts;
```

### Avg

La función `AVG` nos permite calcular el promedio de los valores de un campo. Por ejemplo, para calcular el promedio de la cantidad de comentarios de todos los posts, utilizamos la siguiente consulta:

```js
SELECT AVG(comments_count) AS avg_comments FROM posts;
```

### Min

La función `MIN` nos permite obtener el valor mínimo de un campo. Por ejemplo, para obtener la fecha del post más antiguo, utilizamos la siguiente consulta:

```js
SELECT MIN(created_at) AS first_post FROM posts;
```
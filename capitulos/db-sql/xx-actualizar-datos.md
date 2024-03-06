En el caso de que querramos actualizar datos en una tabla, utilizamos la sentencia `UPDATE`. Por ejemplo, para actualizar el título de un post con `id` 1, utilizamos la siguiente consulta:

```js
UPDATE posts SET title = 'Nuevo título' WHERE id = 1;
```

Si queremos actualizar varios campos a la vez, simplemente los separamos por comas:

```js
UPDATE posts SET title = 'Nuevo título', content = 'Nuevo contenido' WHERE id = 1;
```

**ATENCION** Tener en cuenta que el UPDATE actualizará todos los registros que cumplan con la condición especificada. Si queremos actualizar solo un registro, debemos asegurarnos de que la condición sea lo suficientemente específica para identificar un único registro.

Por ejemplo, si nuestra tabla `posts` tuviera un campo `deleted_at` que indicara si el post fue eliminado o no, podríamos utilizar la siguiente consulta para restaurar todos los posts que se encuentren eliminados:

```js
UPDATE posts SET deleted_at = NULL WHERE deleted_at IS NOT NULL;
```
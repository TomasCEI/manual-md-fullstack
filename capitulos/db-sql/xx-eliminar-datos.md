Para eliminar datos de una tabla, utilizamos la sentencia `DELETE FROM`. Por ejemplo, para eliminar el post con `id` igual a 1, utilizamos la siguiente consulta:

```js
DELETE FROM posts WHERE id = 1;
```
**ATENCION** Al igual que con `UPDATE`, al utilizar `DELETE` eliminará todos los registros que cumplan con la condición especificada. Si queremos eliminar solo un registro, debemos asegurarnos de que la condición sea lo suficientemente específica para identificar un único registro.

Si queremos eliminar todos los posts, simplemente omitimos la cláusula `WHERE`. Y si queremos eliminar un rango de posts, podríamos utilizar una condición mas amplia, por ejemplo para eliminar todos los posts del 2024 en adelante, podríamos utilizar la siguiente consulta:

```js
DELETE FROM posts WHERE created_at >= '2024-01-01 00:00:00';
```


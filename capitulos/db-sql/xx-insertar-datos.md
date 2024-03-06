Una vez creadas nuestras tablas, es hora de insertar datos en ellas. Para ello, utilizaremos la sentencia `INSERT INTO`.

Para nuestro ejemplo 
```js
posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Podemos insertar datos en la tabla `posts` de la siguiente manera:
```js
INSERT INTO posts (title, content) VALUES ('Primer post', 'Contenido del primer post');
```

También podemos insertar múltiples datos a la vez:
```js
INSERT INTO posts (title, content) VALUES 
('Segundo post', 'Contenido del segundo post'),
('Tercer post', 'Contenido del tercer post');
```

Si queremos insertar datos en todas las columnas, podemos omitir los nombres de las columnas:
```js
INSERT INTO posts VALUES (1, 'Cuarto post', 'Contenido del cuarto post', '2021-01-01 12:00:00');
```

Podemos omitir la carga de datos en todos los campos que tengan un valor por defecto o que permitan valores nulos:
```js
INSERT INTO posts (title) VALUES ('Quinto post');
```


![img relaciones SQL](uploads/imgs/mysql-relations.png)

Si queremos insertar datos en una tabla que tiene una relación con otra tabla, debemos asegurarnos de que el dato que estamos insertando en la tabla secundaria exista en la tabla primaria. Por ejemplo, si tenemos una tabla `authors` con un campo `id` que es la clave primaria, y una tabla `posts` con un campo `author_id` que es la clave foránea, debemos asegurarnos de que el `author_id` que estamos insertando en la tabla `posts` exista en la tabla `authors`.
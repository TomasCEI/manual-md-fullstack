Podremos ejecutar comandos SQL de distintas maneras:
- Utilizar un cliente de base de datos como `phpMyAdmin` o `MySQL Workbench`.
- Utilizar la línea de comandos con el comando `mysql` (requiere mysql CLI instalado)
- Utilizar un lenguaje de programación como `PHP`, `Python`, `Node.js`, con un conector de MySQL.

Al momento de crear nuestra base de datos es recomendable seleccionar el encoding y collation que se utilizará. 
- El encoding es el conjunto de caracteres que se utilizará para almacenar los datos
- La collation es el conjunto de reglas que se utilizará para comparar los datos. 

Por ejemplo, si se desea almacenar datos en español, se puede utilizar el encoding `utf8mb4` y la collation `utf8mb4_spanish_ci`.

Para crear una base de datos en MySQL, se utiliza el comando `CREATE DATABASE` seguido del nombre de la base de datos. Por ejemplo, para crear una base de datos llamada `db_myblog`, se utiliza el siguiente comando:


```js
CREATE DATABASE db_myblog;
-- set encoding
ALTER DATABASE db_myblog CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
```

Para eliminar una base de datos en MySQL, se utiliza el comando `DROP DATABASE` seguido del nombre de la base de datos. Por ejemplo, para eliminar la base de datos `db_myblog`, se utiliza el siguiente comando:

```js
DROP DATABASE db_myblog;
```



Al igual que PhpMyAdmin, mongoDB es su equivalente para gestionar bases de datos MongoDB. Es una interfaz gráfica que nos permite visualizar y manipular los datos de una base de datos MongoDB.

- Bases de datos en formoat BSON (Json de almacenamiento Binario)
- Dentro de ellas tendremos colecciones (el equivalente de SQL de Tablas)
- Dentro de las colecciones, tendremos documentos (el equivalente de SQL de Registros)

Al iniciar la aplicación debemos definir una URL a la que nos deseamos conectar. Si estamos ejecutando el servicio de mongoDB de manera local (Comunity Edition) podremos utilizar la URL `mongodb://localhost:27017`.

Si en cambio estamos utilizando alguna base de datos online, como la que ofrece MongoDB Atlas, deberemos utilizar la URL que nos proporciona la plataforma. Por ejemplo la URL `mongodb+srv://cluster0.abcde.mongodb.net/myFirstDatabase`.

Al saber el host/IP y puerto utilizaremos la conexion simple `mongodb` pero si preferimos conectarnos a un Cluster de MongoDB Atlas, utilizaremos la conexión `mongodb+srv`.


Una vez nos hemos conectado podremos crear Colecciones y Documentos, así como visualizar los datos de las colecciones y realizar consultas.

Para probar podemos cargar nuevos elementos a mano en formato JSON o importar nuevos registros desde un archivo JSON. Hay varios ejemplos que podemos obtener desde la web de [JSON Placeholder](https://jsonplaceholder.typicode.com/).

Recordemos que MongoDB agrega IDs automáticamente a cada registro, por lo tanto si nuestros registros ya tienen un ID, deberemos eliminarlo antes de importarlos o desde Compass ejecutar la función de "UPDATE" para eliminar el campo ID. Para ello vamos a la colección deseada, y hacemos click en el botón de `UPDATE` donde podremos modificar el código que viene por defecto 
```json
{
  $set: {

  },
}
```

por este otro:

```json
{
  $unset: {
    "id": ""
  }
}
```
# Tipos de Relaciones en Mongoose

Con Mongoose podemos realizar 2 típos de relaciones entre colecciones: **Incrustadas** y **por Referencia**.


## Relaciones por Incrustación

En las relaciones por incrustación, guardamos un documento dentro de otro documento. Por ejemplo, si tenemos una colección de `autores` y otra de `libros`, podríamos crear una única colección de `autores` que contenga los libros de cada autor.

```javascript
const libroSchema = newSchema({
    titulo: String,
    año: Number
});

// Definición de un esquema de libro dentro del esquema de autor
const autorSchema = new Schema({
    nombre: String,
    libros: [libroSchema] 
});
```

Para obtener los libros de un autor, simplemente accedemos al campo `libros` del autor.

```javascript
const autor = await Autor.findById("660052bdee9f87f1fc7a2bb5");
console.log(autor.libros); // Mostrará los libros del autor
```



## Relaciones por Referencia

En las relaciones por referencia, guardamos la relación entre dos colecciones mediante un campo que contiene el `_id` de la colección relacionada.

Por ejemplo, si tenemos una colección de `autores` y otra de `libros`, podríamos guardar el `_id` del autor en el documento del libro.

```javascript
const autorSchema = new Schema({
    nombre: String
});


// ref es para Referenciar al autor por su _id
const libroSchema = new Schema({
    titulo: String,
    autor: { type: Schema.Types.ObjectId, ref: 'Autor' } 
});
```

En este caso, el esquema de `Libro` tiene un campo `autor` que es un `ObjectId` que hace referencia a la colección de `Autores`.

Para obtener el autor de un libro, podemos utilizar el método `populate()` de Mongoose, que nos permite "poblar" un campo de referencia con los documentos correspondientes de otra colección. Es importante destacar que populate() es una funcionalidad exclusiva de Mongoose y no está presente en la API de MongoDB.

```javascript
const libroConAutor = await Libros.findById("660052bdee9f87f1fc7a2bb5").populate('Autor');
```

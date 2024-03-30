Los siguientes serán ejemplos de creación, actualización y eliminación de registros en una base de datos MongoDB utilizando Mongoose.

## Insertar

```javascript
const nuevoAlumno = new Alumno({
        nombre: "Juan",
        isAdmin: true,
        edad: 25,
        hobbies: ["futbol", "tenis"],
        ciudad: "Madrid"
    });
    await nuevoAlumno.save();
```



## Actualizar

```javascript
// actualiza el valor de isAdmin y nombre
await Alumno.findByIdAndUpdate("660052bdee9f87f1fc7a2bb5",{
        nombre: "Juancho",
        isAdmin: false
    });

// puedo pedir que me devuelva el NUEVO valor actualizado
await Alumno.findByIdAndUpdate("660052bdee9f87f1fc7a2bb5",{
        nombre: "Juancho",
        isAdmin: false
    }, {new: true });
```

## Eliminar

```javascript
await Alumno.findByIdAndDelete("660052bdee9f87f1fc7a2bb5");
```


### Más métodos de Mongoose

```javascript	
- Model.find() // Buscar varios documentos (array)
- Model.findById() // Buscar un documento por su ID único (objeto)
- Model.findOne() // Buscar primer resultado de búsqueda (objeto)

- Model.deleteMany() // Eliminar varios documentos
- Model.deleteOne() // Eliminar un solo documento

- Model.replaceOne() // Reemplazar un solo documento basado en un criterio de búsqueda con otro documento proporcionado
- Model.updateMany() // Actualizar varios documentos basados en un criterio de búsqueda
- Model.updateOne() // Actualizar un solo documento basado en un criterio de búsqueda

- Model.findOneAndDelete() // Buscar el primer resultado y luego eliminarlo
- Model.findOneAndUpdate()
- Model.findByIdAndUpdate() // Equivalente a `findOneAndUpdate({ _id: id }, ...  })`
- Model.findByIdAndDelete() // Equivalente a "findOneAndDelete({ _id: id })"

// Métodos marcados como deprecados
- Model.findOneAndRemove() // Se recomienda el uso de `findOneAndDelete`
- Model.findByIdAndRemove() // Se recomienda el uso de `findOneAndDelete`
```
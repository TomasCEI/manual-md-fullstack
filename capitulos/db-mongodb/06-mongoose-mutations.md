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
Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove() // Deprecated
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()
```
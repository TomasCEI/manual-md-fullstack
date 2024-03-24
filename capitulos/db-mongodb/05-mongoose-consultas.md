Para realizar consultas en nuestras DB utilizaremos el método `find()`. Este método es de Mongoose no es de JS. Nos permite buscar documentos en una colección de MongoDB.

[Guía para realizar consultas](https://mongoosejs.com/docs/api/model.html#Model.find())

Ejemplos de consultas utilizando el método `find()`:

```javascript
// Buscando documentos (Array)
const buscarTodos = await Model.find()

// Buscando TODOS los que contengan una propiedad (Array)
const buscarUnaProp = await Modelo.find({ propiedad: valor })

// Buscando TODOS los que contengan varias propiedades (Array)
const buscarVariasProp = await Modelo.find({ propiedad1: valor1, propiedad2: valor2 })

// Buscando por ID (Objeto)
const buscarPorId = await Modelo.findById("660052bdee9f87f1fc7a2bb5");

// Buscar 1 sólo dato específico (Objeto)
const buscarUno = await Modelo.findOne({ propiedad: valor })

```



Para nuestro esquema previo de Mascotas, podríamos realizar las siguientes consultas:

```javascript
const Mascota = require('../models/mascota')
router.get('/', async (req, res) => {
    try {
        const arrayMascotas = await Mascota.find();
        res.json(arrayMascotas);
    } catch (error) {
        console.log(error)
    }
})

```

### Filtros

Podemos aplicar filtros a nuestras consultas, y los pdremos combinar como como si fueran promesas. 

Tenemos varios tipos de Filtros:
- Filtros Generales
- Filtros para find
- Filtros de Update
- Filtros de FindOne

```javascript
Modelo.find({ propiedad: valor })
      .limit(10)            // Limitar la cantidad de resultados
      .sort({apellido:1})   // 1 ascendente, -1 descendente
      .skip(2)             // Saltar los primeros 2 resultados
      .select({nombre:1, apellido:1}) // Seleccionar solo los campos nombre y apellido
      .select({edad:0})   // Seleccionar todos menos edad
```




<!-- ### AND

```javascript
const Usuario = require('./models/Usuario');

const datos = await Usuario.find({
  $and: [
    { propiedad1: valor1 },
    { propiedad2: valor2 },
    {
      $nor: [
        { propiedad3: valor3 }
      ]
    }
  ]
}, (error, usuarios) => {
  if (error) {
    console.error('Error al buscar usuarios:', error);
  } else {
    console.log('Usuarios encontrados:', usuarios);
  }
});
``` -->
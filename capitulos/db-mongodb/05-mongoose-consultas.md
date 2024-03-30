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
### Operadores de Comparación

Al filtrar mediante propieades, podemo utilizar operadores de comparación en nuestras consultas. Algunos de los operadores más comunes son:

- `$eq`:    (equal) es igual al valor especificado.
- `$ne`:    (not equal) no es igual al valor especificado.
- `$gt`:    (greater than) es mayor que el valor especificado.
- `$gte`:   (greater or equal) es mayor o igual al valor especificado.
- `$lt`:    (less than) es menor que el valor especificado.
- `$lte`:   (less or equal) es menor o igual al valor especificado.
- `$in`:    (in) está en un array.
- `$nin`:   (not in) no está en un array.
- `$exists`: campo existe o no.
- `$regex`: coincide con la expresión regular especificada.

Por ejemplo si quisieramos traer las mascotas entre 2 y 5 años de edad podríamos realizar una consulta como la siguiente:

```javascript

// Buscar todas las mascotas entre 2 y 5 años
const arrayMascotas = await Mascota.find({ edad: { $gte: 2, $lte: 5 } });

// Buscar todas las mascotas que no tengan 3 años
const arrayMascotas = await Mascota.find({ edad: { $ne: 3 } });
```


Uno de los operadores mas potentes, es el de `$regex`, que nos permite buscar por expresiones regulares. Por ejemplo, si quisieramos buscar todas las mascotas cuyo nombre empiece con la letra "p", podríamos realizar una consulta como la siguiente:



```js
// utilizamos el flag i para que sea insensible a mayúsculas y minúsculas
const arrayMascotas = await Mascota.find({ nombre: { $regex: /^p/, $options: 'i' } });
// o su equivalente
const arrayMascotas = await Mascota.find({ nombre: { $regex: /^p/i } });
// o su equivalente
const arrayMascotas = await Mascota.find({ nombre: { $regex: new RegExp('^p', 'i') } });
//
```

**IMPORTANTE:** Si deseamos construir nuestros patrones de búsqueda de manera dinámica deberemos utilizar el constructor `new RegExp()` de JS y `templates Lietarales`. Por ejemplo:

```javascript	
const nombre= "Franchesca";
const reg = new RegExp(`^${nombre}`, 'i');
const arrayMascotas = await Mascota.find({ nombre: { $regex: reg } });
```


### Filtros

Podemos aplicar filtros a nuestras consultas, y los podremos combinar como si fueran promesas. 

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
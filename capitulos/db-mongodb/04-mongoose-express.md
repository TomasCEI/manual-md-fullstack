Mongoose es un `ODM (Object Document Mapping)` para **MongoDB**.

Es un módulo para utilizar nuestras APIs en ExpressJS que nos permite conectar con MongoDB y realizar operaciones CRUD de manera sencilla.

Hay que tener en cuenta que los métodos, funciones y propiedades **no son iguales** a las de MongoDB, por lo que deben tener en cuenta la [documentación oficial de Mongoose](https://mongoosejs.com/docs/index.html) a la hora de crear sus esquemas y consultas.


## Instalación

Ejecutamos `npm i mongoose` para instalar Mongoose en nuestro proyecto.

### App.js

```javascript
// 1. Importar Mongoose y Express
const mongoose = require('mongoose');
const express=require('express');
const cors=require('cors');
const app=express();

// Conexión Local
const conectarDB = async () => {
    // Importante utilizar 127.0.0.1 en vez de localhost
    const url = `mongodb://127.0.0.1:27017/nombreDB`;

    // Ejemplo de Conexión a Cluster de MongoDB Atlas
    const user = "usuariodb";
    const pass = "passdb";
    const dbName = "veterinaria";
    const url = `mongodb+srv://${user}:${pass}@cluster0.ncdk5.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    // Con uso de variables de entorno (requiere dotenv)
    const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ncdk5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

    await mongoose.connect( url )
    .then ( ()=> console.log('Conectado a mongoDB'))
    .catch ( e => console.log("Error de conexión", e));
}
conectarDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// aquí iran tus endpoints, rutas y middlewares

app.listen(3000, ()=> console.log('Servidor corriendo en puerto 3000'));
```


### Schema / Modelo

Aunque MongoDB no requiere una estructura para sus colecciones, es muy recomendable definir un esquema y luego un modelo para cada colección que vayamos a utilizar. Esto nos permitirá tener un control sobre los datos que se guardan en la base de datos.

[Guía de MongooseJS para definir esquemas y modelos](https://mongoosejs.com/docs/guide.html#definition)

Por ejemplo, si queremos guardar una colección de mascotas. la definición de un esquema y un modelo sería de la siguiente manera:

```javascript

    const options= {
        collection: 'nombre-de-coleccion', // nombre de la colección
        strict: true,       // Opcional: solo guardar lo que está en el esquema
        collation: {        // Opcional
            locale: 'es',   // idioma
            strength: 2     // sensibilidad de Mayúsculas y Minúsculas
        }
    }

    // Crear un esquema de Datos
    const nombreEsquema = new mongoose.Schema({
        id: String,
        nombre: String,
        edad: Number,
        descripcion: String
    }, options);

    // Crear un modelo para dicho esquema
    const Mascota = mongoose.model('Mascota', mascotaSchema);
```

Al tener creado nuestro modelo, podremos realizar operaciones CRUD sobre la colección de mascotas.

Dentro del `Schema`, podemos definir los `tipos de datos` que vamos a guardar en cada campo del documento. Entre los tipos de datos para los Esquemas Mongoose (no confundir con los tipos de Datos que soporta MongoDB), algunos de los mas comunes son:

- `String`
- `Number`
- `Date`
- `Boolean`
- `Mixed` (cualquier tipo de dato)
- `ObjectId` (objeto de mongoDB que incluye un ID)
- `[]`  (Array)
- `Schema` (permite anidar esquemas uno dentro de otro)
- `UUID`

pero hay más, e incluso puedes creer tus propios tipos de datos.

En vez de definir un tipo de dato como `String` o `Number`, podemos definir un objeto con las propiedades que queremos para ese campo:

```javascript
    const misDatos = new mongoose.Schema({
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        edad: {
            type: Number,
            min: 18,
            max: 65
        }
    }, options);
```
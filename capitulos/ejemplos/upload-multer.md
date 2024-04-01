### Uso de Multer para upload de archivos

En este ejemplo utilizaremos Express y Multer para subir archivos al servidor. Multer es un middleware de Node.js que facilita la carga de archivos. 

[Documentación Express - Multer](https://expressjs.com/en/resources/middleware/multer.html)

Comenzaremos por instalar las dependencias necesarias:

```bash
npm install express multer cors dotenv
```

Luego crearemos nuestro boiler plate de Express en el archivo index.js:
```js

import express from "express";
// crear archivo de configuración para las variables de entorno
import {PORT, fullDomain} from "./config/config.js";
import cors from 'cors';
import multer from "multer";

const app = express();
console.clear();

// Uso de MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Rutas
app.get("/", (req, res)=> {
    res.setHeader("Content-Type", "text/html");
    const landingHTML = `
        <h1>Bienvenidos a nuestro Backend de Express</h1>
    `;
    res.send(landingHTML);
})

// Alta de Servidor
app.listen(PORT, () => {
    console.log(`server corriendo en ${fullDomain}`)
})
```

Una vez funciona nuestro backend armaremos 2 rutas estáticas, una par cargar un formulario HTML y otra para recibir los datos del formulario y subir el archivo.

Antes de los middleware definimos nuestras rutas estáticas:

```js
// formulario html de Uploads
// ${fulldomain}/html-form
app.use('/html-form', express.static('public')); 
// carpeta de archivos subidos a "uploads"
// ${fulldomain}/files
app.use('/files', express.static('uploads'));
```

y luego creamos nuestro endpoint de Upload:

```js
// Opción 1: Configuración mínima, el archivo destino tendrá unun nombre aleatorio sin extensión
// const upload = multer({ dest: 'uploads/' });

// Opción 2: Utilizando diskStorage, donde podremos definir el nombre del archivo destino
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage })

app.post("/upload", upload.single('profile'), (req, res) => {
    try {
        // req.file is the `profile` file
        console.log("file es ", req.file);
        // req.body will hold the text fields
        console.log("body es:", req.body); 

        res.json({
            msg: "Archivo subido correctamente", 
            file: req.file, 
            body: req.body,
            peso: `${Math.round(req.file.size/1024)} Kbytes`,
            url: `${fullDomain}/files/${req.file.filename}`
        });

    } catch (err) {
        next(err)
    }
});
```

## Formulario en HTML

Crear un archivo `public/index.html` donde podremos generar un formulario para subir archivos. Recuerda que en formulario debes especificar el método POST y el atributo `enctype="multipart/form-data"` para que el formulario pueda enviar archivos.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Upload con Multer</title>
    </head>
    <body>
    <form method="POST" action="http://localhost:3000/upload" enctype="multipart/form-data">

        <h3>Upload de archivos</h3>

        <label for="titulo">Título</label>
        <input type="text" name="titulo" id="titulo" ><br />

        <label for="profile">Imagen</label>
        <input type="file" name="profile" id="profile" /><br />
        
        <input type="submit" value="ENVIAR">
    </form>
</html>
```

## Formulario en React

Para enviar archivos desde un formulario en React, debemos utilizar el objeto `FormData` para enviar los datos.

![mulet-upload-react](./uploads/imgs/multer-upload-react.png)

```js
import { useState } from 'react'
import './App.css'

function App() {
  const [jsonResponse, setJsonResponse] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        setJsonResponse(data);
      })
  };

  return (
    <>
        <form onSubmit={handleSubmit} style={{"display":"flex", "flexDirection": "column", "marginBottom":"10px"}}>
          <input type="text" name="nick" placeholder="NickName" />
          <input type="file" name="profile" />
          <input type="submit" value="enviar" />
        </form>

        {jsonResponse.url && 
            <>
              <strong>Respuesta del Backend</strong>
              <div style={{"display":"flex"}}>
                <img src={jsonResponse.url} alt="imagen" style={{"maxWidth":"200px"}}/>
                <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
              </div>
            </>
        }
    </>
  )
}
export default App
```
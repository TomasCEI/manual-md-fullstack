En el siguiente ejemplo veremos como manipular el dom para cargar una tarjeta de contacto, una lista de contactos, y un selector de roles.

## Manipulación del DOM básica

```HTML
<div id="text-box">Soy un texto</div>

<span id="ejemplo"> 
    Hello <span style="display: none;">World</span>
</span>
```

Bloque de código JS dentro de etiquetas `<script></script>`
```JS
<script>
    /**
     * 
     *  Cargo textos dentro de mis cajas con las 2 propiedades innerText y textContent
     * 
     * */

    const elemento=document.getElementById("text-box");

    // nota:    cada linea sobreescribe la anterior, 
    //          por eso únicamente se visualizara la útima 
    //          frase en el HTML creada con innerHTML
    elemento.textContent = 'Nuevo contenido de texto con textContent <b>Negrita</b>';
    elemento.innerText = 'Texto cargado con innerText';
    elemento.innerHTML = 'Texto Final en <b>Negrita</b>';


    // textContent vs innerText
    // innerText no muestra texto que no este en visible en pantalla.
    const ejemplo = document.getElementById('ejemplo');
    console.log("incluye oculto: ", ejemplo.textContent); // Devuelve: Muestra contenido oculto
    console.log("no incluyeo oculto: ",ejemplo.innerText); // Devuelve: vacío: ''

</script>
```

## Lista de Contactos

```HTML
    <div id="cajaContactos">
        - No hay contactos -
    </div>
```

Bloque de código entre etiquetas `<script></script>`
```JS
    <script>

        /**
         *  Crear una lista de agenda telefónica
         */

        // 1. Seleccionar el <div> cajaContactos con su ID
        const cajaContactos=document.getElementById("cajaContactos");

        // 2. Crear la lista de objetos con los datos de cada contacto
        var listaPersonas=[
            {
                nombre: "juan", 
                tel: "666-123"
            },
            {nombre: "maría",           tel: "555-123"},
            {nombre: "lucía flores2",    tel: "444-123"},
            {nombre: "lucía flores3",    tel: "444-123"},
            {nombre: "lucía flores4",    tel: "444-123"},
            {nombre: "lucía flores5",    tel: "444-123"},
            {nombre: "lucía flores6",    tel: "444-123"}
        ];

        
        // 3. Recorro la lista de Personas, y para cada persona creo un <div> con sus datos de contacto
            
        var contactosHTML=""; // genero un contenedor vacio donde voy a crear mi código HTML
        
        listaPersonas.forEach(persona => {

            contactosHTML = contactosHTML + `<div class="u-border">
                                                <span>nombre: ${persona.nombre}</span><br>
                                                <span>tel: ${persona.tel}</span>
                                            </div>`;
        });



        // 4. Por último, ingreso todo mi código HTML recien generado dentro de la caja de contactos del paso 1.
        cajaContactos.innerHTML=contactosHTML;
    </script>
```
        

## Selector de Rol


```HTML
    Rol del usuario:
    <select id="listaRoles">
    </select>
```

Bloque de código entre etiquetas  `<script></script>`

```JS
    <script>
        /**
         *  Crear una lista de roles dentro de un '<select>'
        */


        // Paso 1: Crear variable con lista de Posibles Roles (cada rol tiene un id)
        const listaDeRoles = [
            { id: 1, rol: 'Administrador' },
            { id: 2, rol: 'Usuario' },
            { id: 3, rol: 'Invitado' }
        ];

        // Paso 2: Obtener el elemento <select> utilizando su id
        var selectElement = document.getElementById('listaRoles');
        
        
        // Paso 3: Llenar el select con opciones de usuarios
        listaDeRoles.forEach(unRol => {

            // crea una etiqueta <option>
            const option = document.createElement('option'); // me va a crear un <option></option>

            option.value = unRol.id;       // asigna un "value" a la etiquieta option
            option.text = unRol.rol;    // asigna un texto a la etiqueta option
            selectElement.appendChild(option); // agregar la etiqueta al <select>

        });
    </script>
```


## Tarjeta de Contacto (Lista de Usuarios)

<h3>1. Tarjeta de Perfil</h3>

```HTML
    <style>
        /* utility para todos los ejemplos */
        .u-border {
            border: 1px solid black;
            margin: 2px;
        }
        /* Estilos básicos para la tarjeta de perfil */
        .profile-card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            width: 200px;
        }

        .profile-image {
            width: 100%;
            height: auto;
        }
    </style>

    <div class="profile-card" id="userProfile">
        <img class="profile-image" id="usr-image" src="../imgs/nouser.png" alt="Imagen de perfil">
        <h2 id="usr-name"></h2>
        <p id="usr-lastname">Cargando contenido</p>
    </div>

    <button onclick="anterior()"> << </button>
    <button onclick="siguiente()"> >> </button>
```

Bloque de código entre etiquetas  `<script></script>`

```JS
    /**
     *  Completar al tarjeta userProfile con los datos del usuario
     * */

    // 1. Crear variable del perfil de usuario
    var userProfile = {
        imageSrc: "../imgs/user.jpeg",
        name: "Juan",
        lastName: "Pérez",
        hobbies: ["futbol", "rugby"],
        mascota: {
            nombreMascota: "Felix",
            raza: "gato"
        }
    };

    // opcional: Vista previa en la consola de Chrome del Nombre de la mascota "FElix"
    console.log("Nombre de mascota: ", userProfile.mascota.nombreMascota);


    var A_users = [{
        imageSrc: "../imgs/user.jpeg",
        name: "Juan",
        lastName: "Pérez"
    },{
        imageSrc: "../imgs/nouser.png",
        name: "Maria",
        lastName: "Flora"
    },{
        imageSrc: "../imgs/user.jpeg",
        name: "Laura",
        lastName: "Rotz"
    },{
        imageSrc: "../imgs/nouser.png",
        name: "Fran",
        lastName: "Perez"
    }];


    // opcional: leer valor de un usuario!
    console.log("El último usuario: ", A_users[3]);
    console.log("Nombre del último usuario: ", A_users[3].name);
    



    // 2. Obtener los elementos HTML por su ID

    const imageElement = document.getElementById('usr-image');
    const nameElement = document.getElementById('usr-name');
    const lastNameElement = document.getElementById('usr-lastname');

    // 3. Asignar datos del perfil a los elementos
    
    imageElement.src = userProfile.imageSrc; // Asignar el Source de una imagen
    nameElement.textContent = userProfile.name; // Asignar textos (nombre y apellido)
    lastNameElement.textContent = userProfile.lastName;

    // Laura
    // nameElement.textContent = A_users[2].name;

    //set un attribute especial personalizado
    const userCard = document.getElementById("userProfile");
    userCard.setAttribute('edad', '32');
    //userCard.setAttribute('title', 'Mi titulo personalizado');

    var indice=0; // indice de usuario
    var cantidad=A_users.length;


    function siguiente(){
        console.log("indice es: ",indice, " y  cantidad es: ", cantidad);
    
        // para bucle
        indice++;    
        if( indice == (cantidad - 1) ){
            indice= 0;
        }

        cargarTarjeta();
    }

    function anterior(){
        console.log("indice es: ",indice, " y  cantidad es: ", cantidad);
        
        // este es para llegar al final
        /* if(indice > 0){
            indice--;
        } */
        

        // este es para bucle
        indice--;
        if(indice <= 0 ){
            indice = cantidad-1;
        }
        cargarTarjeta();
    }


    function cargarTarjeta(){
        console.log("cargando usuario: ", indice);
        imageElement.src = A_users[indice].imageSrc; // Asignar el Source de una imagen
        nameElement.textContent = A_users[indice].name; // Asignar textos (nombre y apellido)
        lastNameElement.textContent = A_users[indice].lastName;
    }
```

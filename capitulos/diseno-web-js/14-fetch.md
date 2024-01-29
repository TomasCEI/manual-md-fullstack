## Cuando utilizar GET y POST

Aunque existen otros métodos (PUT, PUSH, DELETE, OPTIONS), los mas utilizados son **GET Y POST**. `GET` es más simple y rápido que `POST` y se puede utilizar en la mayoría de los casos.

Sin embargo, utilice siempre solicitudes POST cuando:

-  Envío de una gran cantidad de datos al servidor (POST no tiene limitaciones de tamaño).
-  Al enviar entradas del usuario (que pueden contener caracteres desconocidos), POST es más sólido y seguro que GET.

# Functión Fetch

La función `fetch` en JavaScript se utiliza para realizar solicitudes de red y recuperar recursos (como archivos o datos) de un servidor. Esta función devuelve una `promesa` que resuelve la respuesta de la solicitud HTTP.

Aquí hay un ejemplo de cómo usar fetch para obtener un archivo JSON, como `datos.json`:

```js
// URL del archivo con mis datos
var url = "ruta/del/directorio/datos.json";

// Uso de la función fetch
fetch(url)
   .then(function (response) {
      // Verificar si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
         throw new Error("La solicitud no fue exitosa: " + response.status);
      }
      // Parsear la respuesta como JSON y retornar la promesa resultante
      return response.json();
   })
   .then(function (data) {
      // Manipular los datos obtenidos
      console.log("Datos obtenidos:", data);
      // Aquí es donde debería llamar a las funciones que dependen de los datos obtenidos
      // por ejemplo llamando a la función:
      // imprimirMisDatos(data);
   })
   .catch(function (error) {
      // Manejar errores de red u otros problemas
      console.error("Error en la solicitud:", error);
   });
```

Podemos ver un ejemplo de una API real en la siguiente página: [ReqRes API](https://reqres.in/)

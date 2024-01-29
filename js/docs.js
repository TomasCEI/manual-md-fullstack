// Configuración:
const capFolder = "capitulos"; // directorio de capitulos del manual
const urlIndexManual = `${capFolder}/index.json`; // archivo JSON de indice del manual
const manualGitHub = "https://github.com/TomasCEI/manual-md"; // URL del repositorio del manual en GitHub

const contentDiv = document.getElementById("content");

// ------------------  MENU DE CAPITULOS  ------------------ //

// Llamada a la función con tu estructura JSON
//const urlJson = 'ruta/del/manual.json';
const txtTitulo = document.querySelectorAll(".txtTitle");

let A_ListaCapitulos = {};

function crearMenuCapitulos(manual) {
   const menuCapitulos = document.getElementById("menuCapitulos");
   manual.capitulos.forEach((capitulo, index) => {
      const capituloItem = document.createElement("li");
      capituloItem.classList.add("Nav-capitulo");
      capituloItem.innerHTML = `<a href="?cap=${capitulo.slug}">${capitulo.titulo}</a>`;

      if (capitulo.ficheros.length > 0) {
         const subMenu = document.createElement("ul");
         subMenu.classList.add("Nav-articulos");
         capitulo.ficheros.forEach((fichero) => {
            const ficheroItem = document.createElement("li");
            ficheroItem.classList.add("Nav-articulo");
            ficheroItem.innerHTML = `<a href="?cap=${capitulo.slug}#${fichero.slug}">${fichero.titulo}</a>`;
            subMenu.appendChild(ficheroItem);
         });
         capituloItem.appendChild(subMenu);
      }
      menuCapitulos.appendChild(capituloItem);
   });
}

fetch(urlIndexManual)
   .then((response) => response.json())
   .then((datosJson) => {
      // almaceno únicamente los capitulos dentro de A_listaCapitulos
      A_ListaCapitulos = datosJson.capitulos;

      // Cargo el título del manual en <title> y en el <h1> de la página
      txtTitulo.forEach((element) => {
         element.innerHTML = datosJson.title;
      });

      // Llamada a la función con tu estructura JSON
      crearMenuCapitulos(datosJson);
   })
   .then(() => {
      imprimirTarjetas();
   })
   .catch((error) => console.error("Error al obtener el archivo JSON:", error));

// ------------------  FIN MENU DE CAPITULOS  ------------------ //

// ------------------ NAVEGACION POR URL ------------------ //

// Supongamos que la URL es algo así: "index.html?cap=capitulo1#seccion-25"
const urlParams = new URLSearchParams(window.location.search);
const capituloSeleccionado = urlParams.get("cap") || "Bienvenida"; // Bienvenida por defecto ?

function mostrarCapitulo(capitulo) {
   // Lógica para mostrar el capítulo en la interfaz de usuario
   console.log(`Mostrando el capítulo: ${capitulo}`);
}

// Escuchar cambios en la URL (si hago click en un enlace con "#")
window.addEventListener("popstate", function () {
   console.log("hice popstate cambie de página");
   const capituloSeleccionado = urlParams.get("cap") || "Bienvenida";
   mostrarCapitulo(capituloSeleccionado);
});

// Mostrar el capítulo inicial al cargar la página
mostrarCapitulo(capituloSeleccionado);

// ------------------ FIN NAVEGACION POR URL ------------------ //

// Función para realizar una solicitud de archivo Markdown
const fetchMarkdown = async (archivo) => {
   console.log("fetching: " + capituloSeleccionado + archivo.fichero);
   return (
      fetch(`${capFolder}/${capituloSeleccionado}/${archivo.fichero}`)
         // respuesta standard
         //.then(response => response.text())

         // respuesta con catch de error
         .then((response) => {
            if (!response.ok) {
               //throw new Error("Fileeeee not found or fetch failed");
               return (
                  "<span class='text-danger'>Fichero: <b>" +
                  archivo +
                  "</b> no encontrado</span>"
               );
            }
            return response.text();
         })

         // markdown standard
         //.then(textoMarkdown => marked.parse(textoMarkdown))

         // markdown con syntax highlighting
         .then((textoMarkdown) => {
            const htmlWithSyntaxHighlighting = marked.parse(textoMarkdown, {
               langPrefix: "language-",
            });
            // Use Prism to apply syntax highlighting based on the language
            const container = document.createElement("div");
            container.innerHTML = htmlWithSyntaxHighlighting;

            container.querySelectorAll("pre code").forEach((codeBlock) => {
               const language = codeBlock.className.replace(/language-/, "");
               //Prism.highlightElement(codeBlock, false, () => language);
               Prism.highlightElement(codeBlock);
            });
            return {
               slug: archivo.slug,
               title: archivo.titulo,
               content: container.innerHTML,
            };
         })
   );
};

// Function to add content before the pre elements (para agregar título a los bloques de código)
function addContentBeforePre() {
   //const preElement = document.querySelectorAll('pre[class^="language-"]');
   const preElement = document.querySelectorAll('pre[class*="language-"]'); // es un vector vacío o con items
   //console.log("PRE es: ", preElement);
   //if (!preElement) return console.log("no hay preee");

   preElement.forEach((element) => {
      // Get the class name(s) of the current element [language-html o language-css etc]
      const classNames = Array.from(element.classList);

      // Log or use the class name(s) as needed
      // console.log("Class name(s):", classNames[0]);
      const txtClassName = classNames[0].replace(/language-/, "");

      //const content = document.createTextNode("Titleeee to be inserted before the element!");
      const beforeElement = document.createElement("div");
      beforeElement.classList.add("code-title");
      //beforeElement.appendChild(content);
      beforeElement.innerHTML = `<span class="bloque-title">Bloque <strong>${txtClassName}</strong></span> <button class="bloque-copy" title="Copiar código al portapapeles"><i class="fa fa-copy"></i> Copiar</button>`;

      //console.log("encontre un pre", element, beforeElement);
      element.parentNode.insertBefore(beforeElement, element);
   });
   //preElement.parentNode.insertBefore(beforeElement, preElement);
}

function imprimirTarjetas() {
   console.log("Lista capis es:", A_ListaCapitulos, capituloSeleccionado);

   if (capituloSeleccionado == "Bienvenida") {
      contentDiv.innerHTML = `<div class="Card w-full">
      <div class="Card-Header">
          <h1 class="Card-title">${"Bienvenida"}</h1>
      </div>
      <div class="Card-Content">
      ${"Seleccione un capitulo de la Izquierda!"}
      </div>
  </div>`;
      return;
   }

   // Realizar todas las solicitudes manteniendo el orden del fetch
   //Promise.all(A_capitulos.map(fetchMarkdown))
   //Promise.all(A_ListaCapitulos["css"].map(fetchMarkdown))
   //Promise.all(A_ListaCapitulos[capituloSeleccionado].map(fetchMarkdown))
   //Promise.all(A_ListaCapitulosTemp[capituloSeleccionado].map(fetchMarkdown))

   let A_articulos = A_ListaCapitulos.find(
      (chapter) => chapter.slug === capituloSeleccionado
   );
   A_articulos = A_articulos.ficheros;

   console.log("A_articuslo es:", A_articulos);

   Promise.all(A_articulos.map(fetchMarkdown))

      // Procesar los resultados de las solicitudes
      .then((A_HtmlArticulos) => {
         console.log("card es: ", A_HtmlArticulos);

         // aquí se puede agregar tanto el Nombre de la sección, como el id para los href!
         // const articuloTitle = "title";//A_articulos.titulo;
         // const articuloSlug = "Capítulo " + capituloSeleccionado;

         // Concatenar y mostrar el HTML generado en orden
         //contentDiv.innerHTML = A_HtmlGenerado.join("");

         //Crear divs con HTML generado y mostrar en orden

         A_HtmlArticulos.forEach((htmlArticulo, i) => {
            const htmlGenerado = htmlArticulo.content;
            const articuloTitle = htmlArticulo.title;
            const articuloSlug = htmlArticulo.slug;
            // const articuloPrevSlug = articuloSlug; // proximamente
            // const articuloNextSlug = articuloSlug; // proximamente
            let articuloPrevSlug = A_HtmlArticulos[i - 1]?.slug;
            let articuloNextSlug = A_HtmlArticulos[i + 1]?.slug;

            const articuloPrevSlugBtn = articuloPrevSlug
               ? `<a href="#${articuloPrevSlug}" class="Card-btn Card-btn--primary" title="${
                    A_HtmlArticulos[i - 1]?.title
                 }"></a>`
               : "";
            const articuloNextSlugBtn = articuloNextSlug
               ? `<a href="#${articuloNextSlug}" class="Card-btn Card-btn--secondary" title="${
                    A_HtmlArticulos[i + 1]?.title
                 }"> </a>`
               : "";

            const readTime = Math.round(htmlGenerado.length / 1000);
            const customHTML = `<div class="Card" id="${articuloSlug}">
                                        <div class="Card-Header">
                                            <h1 class="Card-title">${articuloTitle}</h1>
                                            <div class="Card-Stats">
                                                <div class="Card-buttons">
                                                    ${articuloPrevSlugBtn}
                                                    ${articuloNextSlugBtn}
                                                    <!--
                                                    <a href="#${articuloPrevSlug}" class="Card-btn Card-btn--primary"></a>
                                                    <a href="#${articuloNextSlug}" class="Card-btn Card-btn--secondary"></a>
                                                    -->
                                                </div>
                                                <div class="Card-reading-time">Lectura: ${readTime}min</div>
                                            </div>
                                        </div>
                                        <div class="Card-Content">
                                        ${htmlGenerado}
                                        </div>
                                        <div class="Card-Footer">
                                            <form>
                                                <label class="Form-checkbox">
                                                    <input id="check_leido_${articuloSlug}" class="tf_leido" type="checkbox"> Marcar como leído
                                                </label>
                                            </form>
                                            
                                            <div class="Card-keywords">
                                                <ul>
                                                    <li><a class="Keyword" herf="#"># Key 1</a></li>
                                                    <li><a class="Keyword" herf="#"># Key 2</a></li>
                                                    <li><a class="Keyword" herf="#"># Key 3</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`;
            contentDiv.innerHTML += customHTML;
         });
         addContentBeforePre();

         // scroll hacia el href seleccionado
         const hash = window.location.hash;
         if (hash) {
            const element = document.querySelector(hash);
            if (element) {
               element.scrollIntoView();
            }
         }
      })
      .catch((error) => {
         console.error("Error fetching or processing Markdown:", error);
      });
}

// Obtener lista de Capitulos (html o md) y mostrarlos en orden
document.addEventListener("DOMContentLoaded", function () {});

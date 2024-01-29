
Ejemplo de Proyecto para tirar una moneda y que devuelva cara o seca.

### Caraterísticas:
- Utiliza random para obtener valor entre 0 y 1 y así calcular si es cara o seca
- Utiliza variables para contar cantidad de caras y secas
- Calcula porcentaje de caras
- Manipulación del DOM para mostrar Resultados

```html
    <h1>Cara o Seca</h1>

    <button onClick="
     // mi código JS
    ">Tirar Monedad</button>

    <!-- Botones -->
    <p>Cantidad de Caras: <span id="cantCara">0</span></p>
    <p>Cantidad de Secas: <span id="cantSeca">0</span></p>
    Porcentaje de Caras: <span id="porcentajeCara">0</span></p>
```

Bloque de código JS dentro de button `onClick`:

```js
    var numero=Math.random(); // devuelve un valor entre 0 y 1
    console.log(numero);
    if(numero<0.5){
        console.log('Cara');
        cantCara++;
    }else{
        console.log('Seca');
        cantSeca++;
    }
    textCara.innerHTML=cantCara;
    textSeca.innerHTML=cantSeca;

    const porcentaje=(cantCara/(cantCara+cantSeca))*100;
    textPorcentaje.innerHTML=Math.round(porcentaje)+'%';
```


Bloque de código dentro de etiquetas `<script></script>`


```js 
    <script>
        let cantCara=0;
        let cantSeca=0;

        const textCara=document.getElementById("cantCara");
        const textSeca=document.getElementById("cantSeca");
        const textPorcentaje=document.getElementById("porcentajeCara");
    </script>
```
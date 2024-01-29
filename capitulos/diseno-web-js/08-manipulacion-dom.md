
El objeto **DOM** (Document) es una representación de nuestro documento HTML, que nos permite manipularlo con Javascript.

Selectores:
```JS
    //Seleccionar elementos:
    const elemento = document.getElementById('elemento');
    const elemento2 = document.querySelector('#elemento2');
    const elemento3 = document.querySelector('.elemento3');
    const elemento4 = document.querySelector('p');
    const elemento5 = document.querySelectorAll('p');
    const elemento6 = document.getElementsByClassName('elemento6');
    const elemento7 = document.getElementsByTagName('p');
    const elemento8 = document.getElementsByName('elemento8');
```

Modificar elementos:
```JS
    //Modificar elementos:
    elemento.textContent = 'Nuevo contenido de texto con textContent <b>Negrita</b>';
    elemento.innerText = 'Texto cargado con innerText';
    elemento.innerHTML = 'Texto Final en <b>Negrita</b>';
```

Cambiar estilos:
```JS
    //Cambiar estilos:
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'blue';
    elemento.style.fontSize = '20px';
    elemento.style.border = '1px solid black';
```

Crear elementos:
```JS
    //crear elementos:
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'Nuevo párrafo';
    elemento.appendChild(nuevoElemento);

    //AppendCHild:
    const nuevoElemento2 = document.createElement('p');
    nuevoElemento2.textContent = 'Nuevo párrafo';
    elemento.appendChild(nuevoElemento2);


    //removeChild:
    const hijoAEliminar = document.getElementById('hijoAEliminar');
    elemento.removeChild(hijoAEliminar);
```   

Manipulación de atributos:
```JS
    //Manipulación de atributos:
    elemento.setAttribute('id', 'nuevoId');
    elemento.setAttribute('class', 'nuevaClase');
    elemento.setAttribute('style', 'color: red; background-color: blue; font-size: 20px; border: 1px solid black;');
    elemento.removeAttribute('style');
```
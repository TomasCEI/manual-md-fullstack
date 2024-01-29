## Números y matemáticas

Orden de operaciones:
- de izq a derecha en caso de mismo nivel de jerarquía (+ y -), (* y /)
- PEMDAS: paréntesis, exponentes, multiplicación, división, adición, sustracción
- 1% = 1/100 = 0.01 => 25 * 0.01 = 0.25
- calcular el impuesto de 10% de 1 pelota (20.95) + 2 remeras(7.99) [ debería dar aprox 3.69]

Problemas de Flotantes:
- 2,3,4 = integers 
- 2.2, 3.4, 4.5 = floats
- problema en JS y otros lenguajes: 0.1 + 0.2 = 0.30000000000000004
- Al realizar calculos de dinero se recomienda calcular en centavos, y luego dividir por 100.
    valor de remera (7.99) + pelota (20.95), se debe calcular en CENTAVOS en vez de euros, luego dividir por 100

### Redondeo:

 - Math.round(2.3) = 2; // si es menor a .5 redonde hacia abajo, si no hacia arriba
 - Math.round(2.7) = 3;
 - Math.floor(2.7) = 2;
 - Math.ceil(2.3) = 3;
- Calcular impuestos (10%) de  1 pelota + 1 remera redondeando según corresponda. => Math.round((2095+799)* 0.1) /100

### Ejercicios entre todos:
 - Calcular el total en un resto: costo de 1 sopa (10$), 3 hamburgueas (8$) y 1 helado (5$)
 - Calcular el total en un resto: yo y 2 amigos fuimos al resto de arriba, cuanto pagamos por persona? 
 - Calcular el precio de 1 tostadora (18,50$) y 2 remeras (7,50$)
 - Calcular el 10% de la compra anterior 
 - Calcular el 25% de la compra anterior 
 - Utilizando google, veamos como convertir de Celsius a Fahrenheit y viceversa:

    Fahrenheit = (Celsius * 9/5) + 32

    Celsius = (Fahrenheit - 32) * 5/9

 - Si etamos a 25 grados Celsius, a cuantos grados Fahrenheit estamos? [77]
 - Si estamos a 86 grados Fahrenheit, a cuantos grados Celsius estamos? [30]
 - Si estamos a -5 grados Celsius, a cuantos grados Fahrenheit estamos? [23]
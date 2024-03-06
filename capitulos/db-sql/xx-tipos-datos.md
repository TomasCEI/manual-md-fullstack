Cada campo de una tabla tiene un tipo de dato específico. Los tipos de datos más comunes son:

Tipos de datos y ejemplos de uso:


### Strings

- `CHAR(n)`: Cadena de caracteres de longitud fija. Ejemplo: `CHAR(10)` se puede almacenar una cadena de 10 caracteres. Completará los espacios faltantes con espacios en blanco.
- `VARCHAR(n)`: Cadena de caracteres de longitud variable. Ejemplo: `VARCHAR(10)` se puede almacenar una cadena de hasta 10 caracteres.
- `TEXT`: Cadena de caracteres de longitud variable. Ejemplo: `TEXT` se puede almacenar una cadena de hasta 65,535 caracteres. Los elementos `TEXT` son más lentos que los elementos `VARCHAR` debido a que se almacenan en un objeto separado del resto de los datos.

### Numéricos

- `INT`: Número entero. Ejemplo: `INT` se puede almacenar un número entero de -2147483648 a 2147483647.
- `TINYINT`: Número entero. Ejemplo: `TINYINT` se puede almacenar un número entero de -128 a 127.
- `FLOAT`: Número decimal. Ejemplo: `FLOAT` se puede almacenar un número decimal de -3.402823466E+38 a -1.175494351E-38, 0 y de 1.175494351E-38 a 3.402823466E+38.
- `BOOLEAN`: Valor lógico. Ejemplo: `BOOLEAN` se puede almacenar un valor lógico `TRUE` o `FALSE`.

### Otros

- `DATE`: Fecha. Ejemplo: `DATE` se puede almacenar una fecha en formato `YYYY-MM-DD`.
- `TIME`: Hora. Ejemplo: `TIME` se puede almacenar una hora en formato `HH:MM:SS`.
- `DATETIME`: Fecha y hora (1000 hasta el año 9999). Ejemplo: `DATETIME` se puede almacenar una fecha y hora en formato `YYYY-MM-DD HH:MM:SS`.
- `TIMESTAMP`: Fecha y hora (1970 hasta el año 2038) almacenada internamente en segundos, pero se muestra al usuario como fecha. Ejemplo: `TIMESTAMP` se puede almacenar una fecha y hora en formato `YYYY-MM-DD HH:MM:SS`.
- `YEAR`: Año. Ejemplo: `YEAR` se puede almacenar un año en formato `YYYY`.
- `BLOB`: Almacena datos binarios. Ejemplo: `BLOB` se puede almacenar una imagen, un archivo, etc.
- `ENUM`: Almacena una lista de valores. Ejemplo: `ENUM('valor1', 'valor2', 'valor3')` se puede almacenar uno de los valores de la lista.

DATETIME vs TIMESTAMP: la diferencia entre `DATETIME` y `TIMESTAMP` es que `DATETIME` no cambia con la zona horaria, mientras que `TIMESTAMP` cambia con la zona horaria.
Por ejemplo: 
- Si se almacena `2021-01-01 12:00:00` en un campo `DATETIME`, siempre se mostrará `2021-01-01 12:00:00` sin importar la zona horaria.
- Si se almacena `2021-01-01 12:00:00` en un campo `TIMESTAMP`, se mostrará `2021-01-01 12:00:00` en la zona horaria del servidor.

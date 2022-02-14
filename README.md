# Test Gestion Operativa
 -Por Diego Villegas

Adjunto Ejercicio Investigación / Script
El ejercicio se trabajó con el lenguaje PHP, consiste en 4 archivos:
  -index-ejer1.php.
  -bdd.php.
  -usuarios.sql.
  -user_log[81644614].txt.

Para poder montar el ejercicio se sugiere utilizar Wamp y mover todo a una carpeta propia.
Luego de levantar Wamp se puede abrir el archivo index-ejer1.php en un explorador.
Wamp cuenta con phpMyAdmin en lo que hay que crear una BDD llamada usuarios donde se importará el correspondiente "usuarios.sql".
Una vez montado, en index-ejer1.php se puede ingresar el id del usuario y el id del sitio. Al llenar los espacios crea un archivo .txt con el Id del usuario con articulos de este usuario.
 Este output es:

ID: 12
 Nombre: Piano
id de categoria: 1
Categoría: Música
ID: 12
 Nombre: Silla
id de categoria: 2
Categoría: Muebles
ID: 223
 Nombre: Flauta
id de categoria: 1
Categoría: Música

Corespondiente a los items ingresados en la tabla usuarios.sql.


-----------------------------------------


Adjunto el ejercicio SQL del analisis de tablas Carrier + Costos + Cantidad de Envios

 Este ejercicio contiene un index.php (mi lenguaje a elección) con un input para rellenar con el Número del Carrier que se quiera consultar. El mismo lleva un botón de consulta que envia por método POST a action.php, donde se llama a la BBDD de mla (adjuntada) con los datos del ejemplo. Se crean las consultas de las tablas y dentro de un bucle a los indices de las tablas Carrier y Costos, y dentro de la misma hago la consulta de Cantidad de Envios para poder atrapar la variable de Zona correspondiente.

------------------------------------------

Adjunto Lectura y comprensión Script básico. En el mismo explico mi interpretación del código.

-------------------------------------------

Gracias por su tiempo.

 Diego Villegas

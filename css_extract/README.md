**Colocación del script y archivos:

Copia el archivo index.js al directorio donde se encuentran el archivo HTML de referencia y el archivo CSS de entrada.
Asegúrate de que el archivo HTML y el archivo CSS estén en el mismo directorio que index.js.

**Ejecución del script:

Abre una terminal o línea de comandos en tu sistema operativo.
Navega hasta el directorio donde se encuentran los archivos (index.js, archivo HTML y archivo CSS).
Comando de ejecución:
El comando para ejecutar el script y generar el archivo CSS de salida es el siguiente:

`node index.js {archivo.html} {archivo.css_entrada} {archivo.css_salida} [-m]`

`{archivo.html}`: Es el archivo HTML de referencia que contiene las clases que quieres buscar en el archivo CSS de entrada.
`{archivo.css_entrada}`: Es el archivo CSS de entrada del cual deseas extraer las clases coincidentes.
`{archivo.css_salida}`: Es el nombre que le darás al archivo CSS de salida donde se guardarán las clases coincidentes.
`[-m]` (opcional): Agrega -m al final del comando si deseas minificar el archivo CSS de salida.

**Resultado y confirmación:
Una vez que ejecutes el comando, el script buscará las clases coincidentes entre el archivo HTML y el archivo CSS de entrada, generando el archivo CSS de salida con las clases encontradas.

**Nota adicional:
Las reglas de etiquetas y los identificadores deben ser purgados manualmente del archivo CSS de salida, ya que este script captura únicamente las clases coincidentes.
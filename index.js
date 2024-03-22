console.log('Iniciando');

const fs = require('fs');
const args = process.argv.slice(2);
const archivoHtml = args[0];
const archivoEntradaCss = args[1];
const archivoSalidaCss = args[2];
if (!archivoHtml || !archivoEntradaCss || !archivoSalidaCss) {
    console.error('Error: Debes proporcionar los nombres de los archivos HTML, de entrada CSS y de salida CSS.');
    console.log('Uso: node tu_script.js archivoHtml archivoEntradaCss archivoSalidaCss');
    process.exit(1);
}
extraerClases2(archivoHtml, archivoEntradaCss, archivoSalidaCss);function extraerClases2(archivoHtml, archivoEntradaCss, archivoSalidaCss) {
    // Leer el archivo CSS
    fs.readFile(archivoEntradaCss, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo CSS:', err);
            return;
        }

        // Expresión regular para encontrar clases con su contenido en el archivo CSS
        const classContentRegex = /\.([^\s{}]+)\s*{([^}]*)}/g;

        // Objeto para almacenar las clases coincidentes con su contenido
        const matchingClasses = {};

        // Buscar clases y su contenido en el archivo CSS
        let match;
        while ((match = classContentRegex.exec(data)) !== null) {
            const cssClass = match[1]; // Obtener la clase encontrada
            const cssContent = match[2].trim(); // Obtener el contenido de la clase y eliminar espacios al inicio y final

            // Verificar si la clase está en el archivo HTML
            if (data.includes(cssClass)) {
                matchingClasses[cssClass] = cssContent; // Almacenar la clase y su contenido en el objeto
            }
        }

        // Mostrar las clases coincidentes con su contenido
        console.log('Clases coincidentes encontradas en el archivo CSS:');
        console.log(matchingClasses);

        // Formatear las clases coincidentes con su contenido en formato CSS válido
        let newCssContent = '';
        for (const className in matchingClasses) {
            const cssProperties = matchingClasses[className].split(';').map(prop => prop.trim()).join(';\n    ');
            newCssContent += `.${className} {\n    ${cssProperties}\n}\n`;
        }

        // Guardar las clases coincidentes con su contenido en un nuevo archivo CSS
        fs.writeFile(archivoSalidaCss, newCssContent, (err) => {
            if (err) {
                console.error('Error al escribir el archivo CSS con clases coincidentes y su contenido:', err);
                return;
            }
            console.log('Archivo CSS con clases coincidentes y su contenido creado correctamente.');
        });
    });
}

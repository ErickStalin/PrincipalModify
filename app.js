const exphbs = require('express-handlebars');
const express = require('express');
const app = express();

// Configuración de Handlebars
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'layout' });
app.set('view engine', 'hbs');

// Carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para la página "Nosotros"
app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

// Ruta para la página "Contacto"
app.get('/contacto', (req, res) => {
    res.render('contacto');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor web en ejecución en http://localhost:${PORT}`);
});
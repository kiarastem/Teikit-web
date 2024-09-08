const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para el carrito de compras (ejemplo para el futuro)
app.post('/checkout', (req, res) => {
    // Aquí iría la lógica para procesar el pago con la API de Flow
    res.json({ message: 'Procesando el pago...' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

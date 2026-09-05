const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Web Service</title>
            </head>
            <body>
                <h1>Web Service funcionando</h1>
                <p>Este proyecto fue desplegado correctamente en Render.</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
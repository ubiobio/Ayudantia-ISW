'use strict';

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola a todos!');
})

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
})


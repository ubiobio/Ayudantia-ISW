import express, { json } from 'express';
import { SALUDO } from './config/env.config.js';
import { setupDB } from './config/db.config.js';
import productRoutes from './api/routes/product.routes.js';

const app = express();
const port = 5000;

// Middleware
app.use(json());
app.use('/api/products', productRoutes);

app.get('/', function (req, res) {
  console.log(req.params);
  res.send('Hola mundo!!');
});

app.listen(port, () => {
  console.log(`API en la url http://localhost:${port}`);
  console.log(`La api saluda: ${SALUDO}`);
  setupDB();
});

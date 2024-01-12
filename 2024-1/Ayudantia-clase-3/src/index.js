import express from 'express';
import indexRoutes from './routes/index.routes.js';

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api", indexRoutes);

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { HOST, PORT } from "./config/env.config.js";
import {setupDB} from './config/db.config.js'

const app = express();
app.use(express.json());

app.use("/api", indexRoutes);

app.listen(PORT, () => {
    console.log(`URL: http://${HOST}:${PORT}`)
    setupDB()
})
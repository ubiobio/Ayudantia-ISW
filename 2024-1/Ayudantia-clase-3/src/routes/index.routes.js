"use strict";
import express from 'express';
import crudRoutes from './crud.routes.js'

const router = express();

router.use('/pokemon', crudRoutes);

export default router;
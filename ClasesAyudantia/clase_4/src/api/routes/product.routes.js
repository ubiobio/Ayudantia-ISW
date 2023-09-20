import { Router } from 'express';

import {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from '../controller/products.controller.js';

const router = Router();

//api/products
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:productId', getProductById);
router.put('/:productId', updateProductById);
router.delete('/:productId', deleteProductById);

export default router;

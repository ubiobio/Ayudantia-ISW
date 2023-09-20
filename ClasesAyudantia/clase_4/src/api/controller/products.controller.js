// operaciones crud
import Product from '../../models/product.model.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
};

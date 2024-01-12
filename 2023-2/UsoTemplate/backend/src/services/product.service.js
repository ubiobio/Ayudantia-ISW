"use strict";

const Product = require("../models/product.model.js");
/**
 * Servicio que se conecta con la BD para traer la lista de productos
 */
async function getProducts() {
  try {
    const products = await Product.find().exec();
    if (!products) return [null, "No hay productos"];

    return [products, null];
  } catch (error) {}
}

module.exports = {
  getProducts,
};

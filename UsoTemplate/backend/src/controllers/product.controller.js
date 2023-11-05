"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const ProductService = require("../services/product.service");

/** Controlador que se utiliza para menajr las respeustas y peticiones a las rutas */
async function getProducts() {
  try {
    const [products, errorProducts] = await ProductService.getProducts();
    if (errorProducts) return respondError(req, res, 404, errorProducts);

    products.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, products);
  } catch (error) {
    handleError(error, "product.controller -> getProducts");
    respondError(req, res, 400, error.message);
  }
}

module.exports = {
  getProducts,
};

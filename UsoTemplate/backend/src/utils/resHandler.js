"use strict";
/**
 * Envía una respuesta exitosa estandarizada.
 * @function respondSuccess
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 * @param {Number} statusCode - Código de estado para la operación
 * @param {Object} data - Objeto que contiene los datos a enviar
 * @returns {JSON} - Objeto de respuesta JSON con el estado "Success" y los datos proporcionados
 */
function respondSuccess(req, res, statusCode = 200, data = {}) {
  return res.status(statusCode).json({
    state: "Success",
    data,
  });
}

/**
 * Envía una respuesta de error estandarizada.
 * @function respondError
 * @param {Object} req - El objeto de petición
 * @param {Object} res - El objeto de respuesta
 * @param {Number} statusCode - Código de estado para la operación
 * @param {String} message - La descripción del motivo del error
 * @param {Object} details - Información adicional sobre el error
 * @returns {JSON} - El objeto de respuesta JSON con el estado "Error", el mensaje de error y los detalles proporcionados
 */
function respondError(
  req,
  res,
  statusCode = 500,
  message = "Couldnt process the request",
  details = {},
) {
  return res.status(statusCode).json({
    state: "Error",
    message,
    details,
  });
}

/**
 * Envía una respuesta de error interno estandarizada.
 * @function respondInternalError
 * @param {Object} req - El objeto de petición
 * @param {Object} res - El objeto de respuesta
 * @param {Number} statusCode - El código de estado para la operación
 * @param {String} message - La descripción del motivo del error
 * @returns {JSON} - El objeto de respuesta JSON con el estado "Error" y el mensaje de error proporcionados
 */
function respondInternalError(
  req,
  res,
  statusCode = 500,
  message = "Couldnt process the request",
) {
  return res.status(statusCode).json({
    state: "Error",
    message,
  });
}

module.exports = { respondSuccess, respondError, respondInternalError };

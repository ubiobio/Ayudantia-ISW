"use strict";

/**
 * Manejador de errores fatales
 * @param {Object} error Objecto con las especificaciones del error
 * @param {String} msg Mensaje para dar contexto al error
 */
function handleFatalError(error, msg) {
  console.log("[FATAL ERROR] Apagando servidor \n", msg);
  console.error(error);
  process.exit(1);
}

/**
 * Manejador de errores
 * @param {Object} error Objecto con las especificaciones del error
 * @param {String} msg Mensaje para dar contexto al error
 */
function handleError(error, msg) {
  console.log("❌ [ERROR] A ocurrido un error en: \n📁", msg);
  console.error("🗯  " + error.message);
}

module.exports = {
  handleFatalError,
  handleError,
};

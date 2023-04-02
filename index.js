module.exports = {
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: 4
     * @param {Number} n1 Numero 1 de la suma.
     * @param {Number} n2 Numero 2 de la suma.
     * @returns {Number} Retorna la suma de los 2 numeros.
     */
    suma: function(n1, n2) {
        return n1 + n2;
    },
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: -2
     * @param {Number} n1 Numero 1 de la resta.
     * @param {Number} n2 Numero 2 de la resta.
     * @returns {Number} Retorna la resta de los 2 numeros.
     */
    resta: function (n1, n2) {
        return n1 - n2;
    },
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: 3
     * @param {Number} n1 Numero 1 de la multiplicacion.
     * @param {Number} n2 Numero 2 de la multiplicacion.
     * @returns {Number} Retorna la multiplicacion de los 2 numeros.
     */
    multiplicacion: function (n1, n2) {
        return n1 * n2;
    },
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: 0.333
     * @param {Number} n1 Numero 1 de la division.
     * @param {Number} n2 Numero 2 de la division.
     * @returns {Number} Retorna la division de los 2 numeros.
     */
    division: function (n1, n2) {
        return n1 / n2;
    },
};

/**
 * Se puede utilizar el modulo desde la consola:
 * #1
 *  -> node
 * #2
 *  -> let mod = require('.');
 */
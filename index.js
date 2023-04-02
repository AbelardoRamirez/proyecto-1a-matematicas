module.exports = {
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: 4
     * @param {Number} n1 Numero 1 de la suma.
     * @param {Number} n2 Numero 2 de la suma.
     * @returns {Number} Retorna la suma de los 2 numeros.
     */
    suma: function(n1, n2) {
        if (this.esNumero(n1 , n2)) {
            return n1 + n2;
        }
        return this.mensajeError();
    },
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: -2
     * @param {Number} n1 Numero 1 de la resta.
     * @param {Number} n2 Numero 2 de la resta.
     * @returns {Number} Retorna la resta de los 2 numeros.
     */
    resta: function (n1, n2) {
        if (this.esNumero(n1 , n2)) {
            return n1 - n2;
        }
        return this.mensajeError();
    },
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: 3
     * @param {Number} n1 Numero 1 de la multiplicacion.
     * @param {Number} n2 Numero 2 de la multiplicacion.
     * @returns {Number} Retorna la multiplicacion de los 2 numeros.
     */
    multiplicacion: function (n1, n2) {
        if (this.esNumero(n1 , n2)) {
            return n1 * n2;
        }
        return this.mensajeError();
    },
    /**
     * @example
     * n1 = 1, n2 = 3 => resultado: 0.333
     * @param {Number} n1 Numero 1 de la division.
     * @param {Number} n2 Numero 2 de la division.
     * @returns {Number} Retorna la division de los 2 numeros.
     */
    division: function (n1, n2) {
        if (this.esNumero(n1 , n2)) {
            return n1 / n2;
        }
        return this.mensajeError();
    },
    /**
     * @example
     * Funcion que retorna undefined para manejar los errores e imprimir en consola que los valores no son numericos.
     * @returns {undefined} - Retorna undefined cuando se encuentra un error.
     */
    mensajeError: function () {
        console.log('Un valor o los dos valores no son numericos');
        return undefined;
    },
    /**
     * @example
     * n1 -> Es numero
     *  && n2 -> Es Numero
     *      -> Retornar True;
     * -> Retornar False;
     * 
     * @param {Number} n1 Numero 1 a verificar que sea numero.
     * @param {Number} n2 Numero 2 a verificar que sea numero.
     * @returns {Boolean} - Retorna la validacion de ambos numeros.
     */
    esNumero: function (n1, n2) {
        return (typeof n1 === 'number' && typeof n2 === 'number');
    }
};

/**
 * Se puede utilizar el modulo desde la consola:
 * #1
 *  -> node
 * #2
 *  -> let mod = require('.');
 */

/**
 * @versionamiento_patch v.1.0.X
 * #1 git add .;
 * #2 git commit '';
 * #3 git push origin;
 * #4 npm version patch;
 * #5 npm publish;
 * 
 * @versionamiento_semantico v.1.X.0
 * #1 git add .;
 * #2 git commit '';
 * #3 git push origin;
 * #4 npm version minor;
 * #5 git push origin --tags;
 * #6 npm publish
 */
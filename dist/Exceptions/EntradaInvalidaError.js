"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaInvalidaError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class EntradaInvalidaError extends AplicacaoError_1.AplicacaoError {
    constructor(messagem) {
        super(messagem);
    }
}
exports.EntradaInvalidaError = EntradaInvalidaError;

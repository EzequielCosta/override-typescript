"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class SaldoInsuficienteError extends AplicacaoError_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;

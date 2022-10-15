"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaInexistenteError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class ContaInexistenteError extends AplicacaoError_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;

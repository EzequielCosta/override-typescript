"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diarista = void 0;
const Empregado_1 = require("./Empregado");
class Diarista extends Empregado_1.Empregado {
    calcularSalario() {
        const salario = super.calcularSalario();
        return salario / 30;
    }
}
exports.Diarista = Diarista;

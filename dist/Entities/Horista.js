"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horista = void 0;
const Diarista_1 = require("./Diarista");
class Horista extends Diarista_1.Diarista {
    calcularSalario() {
        const salario = super.calcularSalario();
        return salario / 24;
    }
}
exports.Horista = Horista;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Funcionario_1 = require("./Funcionario");
class Professor extends Funcionario_1.Funcionario {
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
exports.Professor = Professor;

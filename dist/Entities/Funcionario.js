"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }
    get matricula() {
        return this._matricula;
    }
    validarSeSalarioEhValido(valor) {
        return valor < 0;
    }
    set salario(valor) {
        this._salario = this.validarSeSalarioEhValido(valor) ? valor : 0;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this._salario * 0.4;
    }
}
exports.Funcionario = Funcionario;

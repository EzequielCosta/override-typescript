"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
const Conta_1 = require("./Conta");
class Poupanca extends Conta_1.Conta {
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
}
exports.Poupanca = Poupanca;

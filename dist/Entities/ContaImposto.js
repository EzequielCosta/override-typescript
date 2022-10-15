"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = void 0;
const SaldoInsuficienteError_1 = require("../Exceptions/SaldoInsuficienteError");
const Conta_1 = require("./Conta");
class ContaImposto extends Conta_1.Conta {
    constructor(numero, saldo, taxaDeDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }
    sacar(valor) {
        super.validarValor(valor);
        let total = valor + valor * (this._taxaDesconto / 100);
        if (this.saldo < total) {
            throw new SaldoInsuficienteError_1.SaldoInsuficienteError("Saldo insuficiente");
        }
        super.sacar(total);
    }
}
exports.ContaImposto = ContaImposto;

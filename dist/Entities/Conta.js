"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const SaldoInsuficienteError_1 = require("../Exceptions/SaldoInsuficienteError");
const ValorInvalidoError_1 = require("../Exceptions/ValorInvalidoError");
class Conta {
    constructor(numero, saldoInicial) {
        this._saldo = 0;
        this._numero = numero;
        this.depositar(saldoInicial);
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        this.validarValor(valor);
        if (this._saldo < valor)
            throw new SaldoInsuficienteError_1.SaldoInsuficienteError("Saldo insuficiente");
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this.validarValor(valor);
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    validarValor(valor) {
        if (valor === 0 || valor < 0) {
            throw new ValorInvalidoError_1.ValorInvalidoError("O valor informado é inválido.");
        }
        return true;
    }
}
exports.Conta = Conta;

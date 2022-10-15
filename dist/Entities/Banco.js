"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const ContaInexistenteError_1 = require("../Exceptions/ContaInexistenteError");
const PoupancaInvalidaError_1 = require("../Exceptions/PoupancaInvalidaError");
const Poupanca_1 = require("./Poupanca");
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(conta) {
        try {
            this.consultar(conta.numero);
        }
        catch (error) {
            this._contas.push(conta);
        }
    }
    consultar(numero) {
        let contaConsultada = null;
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        if (contaConsultada === null) {
            throw new ContaInexistenteError_1.ContaInexistenteError("Conta não encontrada.");
        }
        return contaConsultada;
    }
    consultarPorIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        if (indice === -1) {
            throw new ContaInexistenteError_1.ContaInexistenteError("Conta não encontrada.");
        }
        return indice;
    }
    alterar(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        for (let i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    }
    depositar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        contaConsultada.depositar(valor);
    }
    sacar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        contaConsultada.sacar(valor);
    }
    transferir(numeroDebito, numeroCredito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    }
    calcularQuantidadeContas() {
        return this._contas.length;
    }
    calcularTotalSaldos() {
        let totalSaldo = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }
        return totalSaldo;
    }
    calcularMediaSaldos() {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    }
    renderJuros(numero) {
        let contaConsultada = this.consultar(numero);
        if (!(contaConsultada instanceof Poupanca_1.Poupanca)) {
            throw new PoupancaInvalidaError_1.PoupancaInvalidaError("A conta informada é incompatível.");
        }
        let poupanca = contaConsultada;
        poupanca.renderJuros();
    }
}
exports.Banco = Banco;

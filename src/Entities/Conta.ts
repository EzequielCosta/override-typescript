import { SaldoInsuficienteError } from "../Exceptions/SaldoInsuficienteError";
import { ValorInvalidoError } from "../Exceptions/ValorInvalidoError";

export class Conta {
	private _numero: String;
	private _saldo: number = 0;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this.depositar(saldoInicial);
	}
	
	get numero(): String {
		return this._numero;
	}

	get saldo(): number {
		return this._saldo;
	}
	
	sacar(valor: number): void {
		this.validarValor(valor);
		if (this._saldo < valor) throw new SaldoInsuficienteError("Saldo insuficiente");
		this._saldo = this._saldo - valor;
	}

	depositar(valor: number): void {
		this.validarValor(valor);
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

	validarValor(valor: number) : boolean{
		if (valor === 0 || valor < 0){
			throw new ValorInvalidoError("O valor informado é inválido.");
		}

		return true;
	}
}
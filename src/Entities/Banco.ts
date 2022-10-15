import { ContaInexistenteError } from "../Exceptions/ContaInexistenteError";
import { PoupancaInvalidaError } from "../Exceptions/PoupancaInvalidaError";
import { Conta } from "./Conta";
import { Poupanca } from "./Poupanca";

export class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
		try {
			this.consultar(conta.numero);	
		} catch (error) {
			this._contas.push(conta);	
		}
		
		
	}

	consultar(numero: String): Conta {
		let contaConsultada: Conta | null = null;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}

		if (contaConsultada === null){
			throw new ContaInexistenteError("Conta não encontrada.");
		}

		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}

		if (indice === -1){
			throw new ContaInexistenteError("Conta não encontrada.");
		}

		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		this._contas[indice] = conta;
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		for (let i: number = indice; i < this._contas.length; i++) {
			this._contas[i] = this._contas[i+1];
		}

		this._contas.pop();
		 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);
		contaConsultada.depositar(valor);
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);
        contaConsultada.sacar(valor);
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
        
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

	renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);

		if (!(contaConsultada instanceof Poupanca)) {
			throw new PoupancaInvalidaError("A conta informada é incompatível.");
		}
		
		let poupanca: Poupanca = <Poupanca> contaConsultada;
		poupanca.renderJuros();
		
	}
}
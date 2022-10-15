import { SaldoInsuficienteError } from "../Exceptions/SaldoInsuficienteError";
import { Conta } from "./Conta";

export class ContaImposto extends Conta {

      private _taxaDesconto: number;

      constructor(numero: string, saldo: number,taxaDeDesconto: number) {
            super(numero, saldo);
            this._taxaDesconto = taxaDeDesconto;
      }

      sacar(valor: number): void {
            super.validarValor(valor);

            let total = valor + valor * (this._taxaDesconto/100)

            if (this.saldo < total){
                  throw new SaldoInsuficienteError("Saldo insuficiente");
            }

            super.sacar(total);
      }
}
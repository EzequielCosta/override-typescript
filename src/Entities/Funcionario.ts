import { Pessoa } from "./Pessoa";


export class Funcionario extends Pessoa{
      private _matricula:string;
      private _salario:number;

      constructor(nome:string, sobrenome:string, matricula:string, salario:number){
            super(nome,sobrenome);
            this._matricula = matricula;
            this._salario = salario;
      }

      get matricula(): string{
            return this._matricula;
      }
      
      validarSeSalarioEhValido(valor:number): boolean{
            return valor < 0;
      }

      set salario(valor:number){
            this._salario = this.validarSeSalarioEhValido(valor) ? valor : 0;
      }

      get salario():number{
            return this._salario;
      }

      calcularSalarioPrimeiraParcela():number{
            return this._salario * 0.6;
      }


      calcularSalarioSegundaParcela():number{
            return this._salario * 0.4;
      }


}
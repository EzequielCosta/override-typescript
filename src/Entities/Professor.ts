import { Funcionario } from "./Funcionario";

export class Professor extends Funcionario{

      private _titulacao:string;

      constructor(nome:string, sobrenome:string, matricula:string, salario:number, titulacao:string){
            super(nome,sobrenome, matricula, salario);
            this._titulacao = titulacao;
      }

      calcularSalarioPrimeiraParcela():number{
            return this.salario;
      }

      calcularSalarioSegundaParcela():number{
            return 0;
      }
}
import { Empregado } from "./Empregado";

export class Diarista extends Empregado {
      calcularSalario(): number { 
            const salario = super.calcularSalario();
            return salario / 30;
      }
}
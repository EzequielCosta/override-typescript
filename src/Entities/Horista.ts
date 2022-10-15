import { Diarista } from "./Diarista";

export class Horista extends Diarista {
      calcularSalario(): number {
            const salario = super.calcularSalario();
            return salario / 24;
      }
}
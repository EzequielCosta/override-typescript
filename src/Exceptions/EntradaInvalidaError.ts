import { AplicacaoError } from "./AplicacaoError";

export class EntradaInvalidaError extends AplicacaoError{
      constructor(messagem:string){
          super(messagem);
      }
  }
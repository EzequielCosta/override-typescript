import { AplicacaoError } from "./AplicacaoError";

export class ValorInvalidoError extends AplicacaoError{
    constructor(messagem : string){
        super(messagem)
    }
}
import { AplicacaoError } from "./AplicacaoError";

export class ContaInexistenteError extends AplicacaoError{
    constructor(message: string){
        super(message);
    }
}
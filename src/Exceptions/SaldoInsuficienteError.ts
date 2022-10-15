import { AplicacaoError } from "./AplicacaoError";

export class SaldoInsuficienteError extends AplicacaoError {
    constructor(message : string) {
        super(message);
    }
}
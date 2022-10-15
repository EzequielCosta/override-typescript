"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Banco_1 = require("./Entities/Banco");
const Conta_1 = require("./Entities/Conta");
const ContaImposto_1 = require("./Entities/ContaImposto");
const ContaInexistenteError_1 = require("./Exceptions/ContaInexistenteError");
const EntradaInvalidaError_1 = require("./Exceptions/EntradaInvalidaError");
const SaldoInsuficienteError_1 = require("./Exceptions/SaldoInsuficienteError");
const bancoInstance = new Banco_1.Banco();
let continuar = '1';
const input = (0, prompt_sync_1.default)();
const OPCAO_CADASTRAR = "1";
const OPCAO_CADASTRAR_CONTA_IMPOSTO = "7";
const OPCAO_SACAR = "2";
const OPCAO_DEPOSITAR = "3";
const OPCAO_TRANSFERIR = "4";
const OPCAO_CONSULTAR = "5";
const OPCAO_EXCLUIR = "6";
const SALDO_PADRAO_DE_ABERTURA_DE_CONTA = 5;
function doAnswer(title) {
    return input(title);
}
function inserir(banco) {
    try {
        const numeroDaConta = input("Informe o número da conta: ");
        validarEntradaTipagemNumber(numeroDaConta);
        const contaInstance = new Conta_1.Conta(numeroDaConta, 5);
        banco.inserir(contaInstance);
        console.log("Conta inserida com sucesso!");
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Conta já cadastrada.");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
    }
}
function inserirContaImposto(banco) {
    try {
        const numeroDaConta = input("Informe o número da conta: ");
        validarEntradaTipagemNumber(numeroDaConta);
        const taxaImposto = input("Informe o valor do imposto: ");
        validarEntradaTipagemNumber(taxaImposto);
        const contaInstance = new ContaImposto_1.ContaImposto(numeroDaConta, SALDO_PADRAO_DE_ABERTURA_DE_CONTA, parseFloat(taxaImposto));
        banco.inserir(contaInstance);
        console.log("Conta inserida com sucesso!");
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Conta já cadastrada.");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
    }
}
function sacar(banco) {
    try {
        const numeroDaConta = input("Informe o número da conta: ");
        validarEntradaTipagemNumber(numeroDaConta);
        const valor = input("Informe o valor que você deseja sacar: ");
        validarEntradaTipagemNumber(valor);
        banco.sacar(numeroDaConta, parseFloat(valor));
        console.log("Saque realizado com sucesso!");
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Conta não encontrada!");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
        else if (error instanceof SaldoInsuficienteError_1.SaldoInsuficienteError) {
            console.log("Saldo Insulficiente.");
        }
    }
}
function consultar(banco) {
    try {
        const numeroDaConta = input("Informe o número da conta: ");
        validarEntradaTipagemNumber(numeroDaConta);
        const contaProcurada = banco.consultar(numeroDaConta);
        console.log(`Numero da conta: ${contaProcurada.numero} \n Saldo Atual: ${contaProcurada.saldo}\n`);
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Conta não encontrada!");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
    }
}
function depositar(banco) {
    try {
        const numeroDaConta = input("Informe o número da conta: ");
        validarEntradaTipagemNumber(numeroDaConta);
        const valor = input("Informe o valor que você deseja depositar: ");
        validarEntradaTipagemNumber(valor);
        banco.depositar(numeroDaConta, parseFloat(valor));
        console.log("Deposito realizado com sucesso!");
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Conta não encontrada!");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
    }
}
function transferir(banco) {
    try {
        const numeroDaContaDebito = input("Informe o número da conta de débito: ");
        validarEntradaTipagemNumber(numeroDaContaDebito);
        const numeroDaContaCredito = input("Informe o número da conta de crédito: ");
        validarEntradaTipagemNumber(numeroDaContaCredito);
        const valor = input("Informe o valor que você deseja transferir: ");
        validarEntradaTipagemNumber(valor);
        banco.transferir(numeroDaContaDebito, numeroDaContaCredito, parseFloat(valor));
        console.log("Transferencia realizada com sucesso!");
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Houve um erro na realização da ação. Certifique-se de que informou o dados corretos.");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
    }
}
function excluir(banco) {
    try {
        const numeroDaConta = input("Informe o número da conta: ");
        validarEntradaTipagemNumber(numeroDaConta);
        banco.excluir(numeroDaConta);
        console.log("Exclusão realizada com sucesso!");
    }
    catch (error) {
        if (error instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log("Conta não encontrada!");
        }
        else if (error instanceof EntradaInvalidaError_1.EntradaInvalidaError) {
            console.log("Entrada inválida.");
        }
    }
}
function validarEntradaDasOpcoes(opcao) {
    const opcaoComoNumero = parseInt(opcao);
    return (opcaoComoNumero > 0 || opcaoComoNumero <= 6);
}
function validarEntradaDeConfirmacao(input) {
    const validar = (input === 'N' || input === 'n' || input === 'S' || input === 's');
    if (!validar) {
        throw new EntradaInvalidaError_1.EntradaInvalidaError("Entrada Inválida");
    }
}
function validarEntradaTipagemNumber(input) {
    let validar = !isNaN(parseFloat(input));
    if (!validar) {
        throw new EntradaInvalidaError_1.EntradaInvalidaError("Entrada Inválida");
    }
}
function main() {
    let opcaoSelecionada;
    do {
        console.log("Bem vindo ao Banco!\n");
        console.log("Escolha uma das opções: \n");
        console.log("1 -  CADASTRAR\n");
        console.log("7 -  CADASTRAR CONTA IMPOSTO\n");
        console.log("2 -  SACAR\n");
        console.log("3 -  DEPOSITAR\n");
        console.log("4 -  TRANSFERIR\n");
        console.log("5 -  CONSULTAR\n");
        console.log("6 -  EXCLUIR\n");
        opcaoSelecionada = doAnswer("");
        while (!validarEntradaDasOpcoes(opcaoSelecionada)) {
            console.log("Entrada Inválida!");
            opcaoSelecionada = doAnswer("");
        }
        switch (opcaoSelecionada) {
            case (OPCAO_CADASTRAR):
                inserir(bancoInstance);
                break;
            case (OPCAO_SACAR):
                sacar(bancoInstance);
                break;
            case (OPCAO_DEPOSITAR):
                depositar(bancoInstance);
                break;
            case (OPCAO_TRANSFERIR):
                transferir(bancoInstance);
                break;
            case (OPCAO_CONSULTAR):
                consultar(bancoInstance);
                break;
            case (OPCAO_EXCLUIR):
                excluir(bancoInstance);
            case (OPCAO_CADASTRAR_CONTA_IMPOSTO):
                inserirContaImposto(bancoInstance);
                break;
        }
        try {
            continuar = doAnswer("\nDeseja continuar? (SIM - S / NÃO - N): ");
            validarEntradaDeConfirmacao(continuar);
        }
        catch (error) {
            console.log("Entrada Inválida");
        }
    } while (continuar === 'S' || continuar === 's');
}
;
main();

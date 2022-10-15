import prompt2 from 'prompt-sync';
import {Banco} from './Entities/Banco'; 
import {Conta} from './Entities/Conta';
import {ContaImposto} from './Entities/ContaImposto';
import {ContaInexistenteError} from './Exceptions/ContaInexistenteError'
import {EntradaInvalidaError} from './Exceptions/EntradaInvalidaError'
import { SaldoInsuficienteError } from './Exceptions/SaldoInsuficienteError';

const bancoInstance: Banco = new Banco();
let continuar : string  = '1';

const input = prompt2();

const OPCAO_CADASTRAR = "1";
const OPCAO_CADASTRAR_CONTA_IMPOSTO = "7";
const OPCAO_SACAR = "2";
const OPCAO_DEPOSITAR = "3";
const OPCAO_TRANSFERIR = "4";
const OPCAO_CONSULTAR = "5";
const OPCAO_EXCLUIR = "6";
const SALDO_PADRAO_DE_ABERTURA_DE_CONTA = 5;



function doAnswer(title: string): string{
    return input(title);
}


function inserir(banco: Banco) {

	try {
		const numeroDaConta = input("Informe o número da conta: ");
		validarEntradaTipagemNumber(numeroDaConta);
    	const contaInstance : Conta = new Conta(numeroDaConta, 5);

		banco.inserir(contaInstance)	
		console.log("Conta inserida com sucesso!");

	} catch (error) {
		if (error instanceof ContaInexistenteError){
			console.log("Conta já cadastrada.")
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}		
	}
    
}

function inserirContaImposto(banco: Banco) {

	try {
		const numeroDaConta = input("Informe o número da conta: ");
		validarEntradaTipagemNumber(numeroDaConta);
		const taxaImposto = input("Informe o valor do imposto: ");
		validarEntradaTipagemNumber(taxaImposto);

    		const contaInstance : Conta = new ContaImposto(numeroDaConta,
			 SALDO_PADRAO_DE_ABERTURA_DE_CONTA,
			  parseFloat(taxaImposto)
		);

		banco.inserir(contaInstance)	
		console.log("Conta inserida com sucesso!");

	} catch (error) {
		if (error instanceof ContaInexistenteError){
			console.log("Conta já cadastrada.")
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}		
	}
    
}

function sacar(banco: Banco) {
  	
	try {
		const numeroDaConta = input("Informe o número da conta: ");
		validarEntradaTipagemNumber(numeroDaConta);
  		const valor = input("Informe o valor que você deseja sacar: ");
		validarEntradaTipagemNumber(valor);

		banco.sacar(numeroDaConta, parseFloat(valor));
		console.log("Saque realizado com sucesso!")
	} catch (error) {

		if (error instanceof ContaInexistenteError){
			console.log("Conta não encontrada!")
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}else if(error instanceof SaldoInsuficienteError){
			console.log("Saldo Insulficiente.")
		}
		
	}	
  	
}

function consultar(banco: Banco) {
	
	try {
		const numeroDaConta = input("Informe o número da conta: ");
		validarEntradaTipagemNumber(numeroDaConta);
		const contaProcurada : Conta = banco.consultar(numeroDaConta);
		console.log(`Numero da conta: ${contaProcurada.numero} \n Saldo Atual: ${contaProcurada.saldo}\n`);
	} catch (error) {
		if (error instanceof ContaInexistenteError){
			console.log("Conta não encontrada!")
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}

	}
  
}


function depositar(banco: Banco) {
	
	try {
		const numeroDaConta = input("Informe o número da conta: ");
		validarEntradaTipagemNumber(numeroDaConta);
		const valor = input("Informe o valor que você deseja depositar: ");
		validarEntradaTipagemNumber(valor);
		banco.depositar(numeroDaConta, parseFloat(valor));
		console.log("Deposito realizado com sucesso!")
	} catch (error) {
		if (error instanceof ContaInexistenteError){
			console.log("Conta não encontrada!")
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}
	}	
}


function transferir(banco: Banco) {
	
	try {
		const numeroDaContaDebito = input("Informe o número da conta de débito: ");
		validarEntradaTipagemNumber(numeroDaContaDebito);
		const numeroDaContaCredito = input("Informe o número da conta de crédito: ");
		validarEntradaTipagemNumber(numeroDaContaCredito);
		const valor = input("Informe o valor que você deseja transferir: ");
		validarEntradaTipagemNumber(valor);
		banco.transferir(numeroDaContaDebito, numeroDaContaCredito, parseFloat(valor));
		console.log("Transferencia realizada com sucesso!")
	} catch (error) {
		if (error instanceof ContaInexistenteError){
			console.log("Houve um erro na realização da ação. Certifique-se de que informou o dados corretos.");
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}
		
	}

}

function excluir(banco: Banco) {
	
	try {
		const numeroDaConta = input("Informe o número da conta: ");
		validarEntradaTipagemNumber(numeroDaConta);
		banco.excluir(numeroDaConta);
		console.log("Exclusão realizada com sucesso!")
	} catch (error) {
		if (error instanceof ContaInexistenteError){
			console.log("Conta não encontrada!")
		}else if(error instanceof EntradaInvalidaError){
			console.log("Entrada inválida.")
		}
		
	}

}

function validarEntradaDasOpcoes(opcao: string){
	const opcaoComoNumero: number = parseInt(opcao);

	return (opcaoComoNumero > 0 || opcaoComoNumero <= 6);
}

function validarEntradaDeConfirmacao(input: string){
	
	const validar: boolean =  (input === 'N' || input === 'n' || input === 'S' || input === 's');

	if (!validar){
		throw new EntradaInvalidaError("Entrada Inválida");
	}
}

function validarEntradaTipagemNumber(input: string){

	let validar = !isNaN(parseFloat(input));
	
	if (!validar){
		throw new EntradaInvalidaError("Entrada Inválida");
	}
}


function main (){

    let opcaoSelecionada: string;

    do{
        
        console.log("Bem vindo ao Banco!\n");

        console.log("Escolha uma das opções: \n");
        console.log("1 -  CADASTRAR\n");
	  console.log("7 -  CADASTRAR CONTA IMPOSTO\n");
        console.log("2 -  SACAR\n");
        console.log("3 -  DEPOSITAR\n");
        console.log("4 -  TRANSFERIR\n");
        console.log("5 -  CONSULTAR\n");
		console.log("6 -  EXCLUIR\n");
		
		
		opcaoSelecionada = doAnswer("")
		while(!validarEntradaDasOpcoes(opcaoSelecionada)){
			console.log("Entrada Inválida!")
			opcaoSelecionada = doAnswer("")
		}
		
        switch (opcaoSelecionada){
            case(OPCAO_CADASTRAR):
              inserir(bancoInstance);
              break;
            case(OPCAO_SACAR):
              sacar(bancoInstance);
              break;
            case(OPCAO_DEPOSITAR):
              depositar(bancoInstance);
              break;
            case(OPCAO_TRANSFERIR):
              transferir(bancoInstance);
              break;
            case(OPCAO_CONSULTAR):
              consultar(bancoInstance);
              break;
		case(OPCAO_EXCLUIR):
              excluir(bancoInstance);
		case(OPCAO_CADASTRAR_CONTA_IMPOSTO):
              inserirContaImposto(bancoInstance);
              break;
        }

		try {
			continuar = doAnswer("\nDeseja continuar? (SIM - S / NÃO - N): ");
			validarEntradaDeConfirmacao(continuar)	
		} catch (error) {
			console.log("Entrada Inválida");
		}
        
    }
        
    while(continuar === 'S' || continuar === 's')
};


main();
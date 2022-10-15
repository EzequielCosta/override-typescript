import { Diarista } from "./Entities/Diarista";
import { Empregado } from "./Entities/Empregado";
import { Funcionario } from "./Entities/Funcionario";
import { Horista } from "./Entities/Horista";
import { Pessoa } from "./Entities/Pessoa";
import { Professor } from "./Entities/Professor";


const empregado:Empregado = new Empregado();
const diarista: Diarista = new Diarista();
const horista:Horista = new Horista();

console.log(`Salário empregado: ${empregado.calcularSalario()}`)
console.log(`Salário diarista: ${diarista.calcularSalario()}`)
console.log(`Salário horista: ${horista.calcularSalario()}`)


const pessoa: Pessoa = new Pessoa("Ezequiel", "Costa");
console.log(`\nNome completo da pessoa: ${pessoa.nomeCompleto}`)

const funcionario: Funcionario = new Funcionario("Maria","Clara","234", 10000);
console.log(`\nPrimeira parcela do funcionário: ${funcionario.calcularSalarioPrimeiraParcela()}`) 
console.log(`Segunda parcela do funcionário: ${funcionario.calcularSalarioSegundaParcela()}`) 


const professor: Professor = new Professor("Ana","Clara","255", 10000, "mestre");
console.log(`\nPrimeira parcela do professor: ${professor.calcularSalarioPrimeiraParcela()}`) 
console.log(`Segunda parcela do professor: ${professor.calcularSalarioSegundaParcela()}`) 




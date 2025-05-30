 //Declarações de vartavels
let nome: string = 'João';
let idade: number = 25;
let estaAtivo: boolean = true;
//Arrays
 let numeros: number[] = [1, 2, 3, 4, 5];
 let nomes: string[] = ['Ana', 'Bruno", "Carlos'];
 let misto: (string | number) [] = ['Ana', 25, 'Carlos', 38];
 let misto2: Array<string | number>= ['Ana', 25, 'Carlos', 30];

 //Tuplas
 let pessoa: [string, number] = ['Maria', 30];

 //Union Types
 let id: number | string = 123;
 id = 'ABC123';

//Interfaces são usadas pora definir estrutura de objetos
 interface Usuario  {
 nome: string;
 Idade: number;
  email?: string; // Opcional
 }
//Utilizar elas fica axsim:
let novo_usuario: Usuario = {
 nome: 'Amanda',
 Idade: 18
 };
function somaSimples(){//estrutura basica de uma função pelo nome e pelo 'function'  os parametros"()" e a logica"{}"
    return 3 + 4
}

console.log(somaSimples());
console.log(somaSimples());//parametros "()"

function SomaComParametros(n1,n2){
    return n1 + n2
}

console.log(SomaComParametros(3, 14));//os corchetes nao sao trocados sao chamados de funçoes anonimas
//Funçao anonima 
//Arrow Function
const Potencia = (n, e) => {//se tiver parentesis e a espera de parametros
    return Math.pow(n, e); //Math e um metodo matematico
}
console.log(Potencia(2, 3))


const Potencia2 = (n, e) => {//uma melhorada na função
    console.log(`${n} elevado a ${e} é ${Math.pow(n, e)}`)
}

Potencia2(3,2)
//Faça uma Função que calcula a media do aluno e exiba o resultado
//media >= 6,00 = Aprovado
//media >= 4,00 || <6,00 = recuperação
//media < 4,00 = Reprovado

    //function NotaAluno(nota){
      //  return nota > 6.00 
    //}
    
    //if (nota >= 6(nota == 3)){
      // greeting = "Voces esta Aprovado" 
    //}else if(nota <= 4){
      //  greeting = "Voce nao esta Aprovado" 
    //}



 //soluçao 1
 const ResultadoMedia = (n1, n2) => {
    let media = (n1 + n2)/2

    if(media < 4.00){
        return 'Reprovado'
    } else if(media > 6.00){
        return 'Recuperação'
    }else{
        return 'APROVADO!!'
    }
 }
console.log(ResultadoMedia(4.00, 6.00))


// solução 2
const ResultadoMediaII = (n1, n2) => {
    let media = (n1 + n2)/2
    
    if(media <= 4.00){
        return 'Reprovado'
    } else if(media >= 6.00){
        return 'Aprovado'
    }else{
        return 'Reprovado!'
    }
} 
console.log(ResultadoMediaII(4.00, 6.00))


//solução 3
const ResultadoMediaIII = (n1 , n2) =>{
    if(media < 4.00){
        return 'Reprovado'

    }
    if(media >= 6.00){
        return 'Aprovado'

    }
        return 'Reprovado!' 
} 
console.log(ResultadoMediaIII(6.00, 7.00))


//solução 4 "bonus"
const ResultadoMediaIV = (n1 , n2) =>{
switch (media) {
    case (media >= 6):
      return text = "Aprovado";
    case (media <= 4):
      return text = "Recuperação";
    default:
     return text = "Reprovado";
  }
}

  console.log(ResultadoMediaIV(6.00, 6.00))
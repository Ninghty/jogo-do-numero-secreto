alert('Boas vindas ao jogo do numero secreto');
let chute = prompt ('Escolha um numero de 1 e 10');

let numeroSecreto = 4;

if (chute == numeroSecreto) {
    alert('Acertou')
}
let mensagemDeBoasVindas = 'Boas vindas ao App';
alert('mensagemDeBoasVindas');

let senhaDoSistema = "senhaTeste!";

let senha = prompt("Digite a senha do sistema:");

if (senha = senhaDoSistema){
    alert("Acesso ao sistema garantido");
}

alert("Boas vindas ao nosso site!");

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt("Qual é o seu nome?");

idade = prompt("Digite sua idade:");

idade = prompt("Digite sua idade:");

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}
}
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}

let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
let numero = parseInt(prompt('Digite o numero:'));
soma += numero;
}

let media = soma / qtdNumeros;

console.log(media);
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
console.log("Pode dirigir!");
} else {
console.log("Não pode dirigir.");
}
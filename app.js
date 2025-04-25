// Meu primeiro programa, em JavaScript
// pour Ivan
let numeroMaximo = 100;
alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um nùmero entre 1 e ${numeroMaximo}`);
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if(chute > numeroSecreto) {       https://developer.mozilla.org/fr/
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}
let motTentativa = tentativas == 1 ? 'tentativa' : 'tentativas'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${motTentativa}`); 

//   if (tentativas > 1) {
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); 
    //} else {
      //alert(`Isso ai! Você descobriu de primeira o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    //}

    
// let palavraPessoa = "oi";

// if(quantidadePessoas == 1){
//     palavraPessoa = "pessoa";
// }else{
//     palavraPessoa = "pessoas"
// }
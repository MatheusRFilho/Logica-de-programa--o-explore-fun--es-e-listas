let listaDeNumerosSorteados = [];
let limite = 10
let numeroSecreto;
showMessage();


function exibirTextoNaTela(tag, text) {
   let campo = document.querySelector(tag);
   campo.innerHTML = text;
   responsiveVoice.speak(text, "Brazilian Portuguese Female", {rate:1.2});
}

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let mensagem = `Parabéns, você acertou! com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'} .`;
    exibirTextoNaTela('p', mensagem);
    document.querySelector('button').setAttribute('disabled', true);

    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor!');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    limparInput();
    tentativas++;
  }
}


function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limite + 1);

  if (listaDeNumerosSorteados.length == limite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }
  listaDeNumerosSorteados.push(numeroEscolhido);
  return numeroEscolhido;
}

function limparInput() {
  document.querySelector('input').value = '';
}

function showMessage() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  limparInput();
  exibirTextoNaTela('h1', 'Jogo de Adivinhação');
  exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

function reiniciarJogo() {
  showMessage();
  document.querySelector('button').removeAttribute('disabled');
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
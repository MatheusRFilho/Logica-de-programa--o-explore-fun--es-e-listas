document.querySelector('h1').innerHTML = 'Hora do Desafio';

function consoleFunction() {
  console.log('O botão foi clicado');
}

function alertFunction() {
  alert('Eu amo JS');
}

function promptFunction() {
  let city = prompt('Qual o nome da cidade?');
  alert(`Estive em ${city} e lembrei de você`);
}

function sumFunction() {
  let number1 = prompt('Digite o primeiro numero');
  let number2 = prompt('Digite o segundo numero');
  alert(`A soma de ${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`);
}
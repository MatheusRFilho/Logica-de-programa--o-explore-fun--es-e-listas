document.querySelector('h1').innerHTML = 'Hora do Desafio';

function imcCalc(altura, peso) {
  return peso / (altura * altura);
}

function fac(value) {
  var resultado = value;
  for (var i = 1; i < value; i++) {
      resultado *= i;
  }
  return resultado;
}

function converter(valor) {
  return valor * 4.80
}

function calcarea(alt, larg) {
  return alt * larg;
}

function raio(value) {
  return 3.14 * (value * value)
}

function tabuada(value) {
  let values = []
  for (var i = 0; i <= 10; i++) {
    values.push(`${i} * ${value} = ${i * value}`)
  }

  return values;
}


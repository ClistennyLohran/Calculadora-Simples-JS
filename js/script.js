let btnCalculo = document.getElementById('btnCalcular');
let mostraResultado = document.getElementById('result');
let config = document.getElementById('config');
let containerLeft = document.getElementById('containerLeft');
let configValue = false;

btnCalculo.addEventListener('click', calcular, false);
config.addEventListener('click', abrirBarraLateral, false);

function abrirBarraLateral() {
  if(configValue == false) {
    containerLeft.style.left = "0px";
    configValue = true;
  }else {
    containerLeft.style.left = "-280px";
    configValue = false;
  }
}
function calcular() {
  let numero1 = Number(document.getElementById('number1').value);
  let numero2 = Number(document.getElementById('number2').value);
  let operadorDoCalculo = document.getElementById('tipoCalculo');
  let resultado;

  if(numero1 != "" && numero2 != "") {
    switch(operadorDoCalculo.value) {
      case 'somar':
        resultado = numero1 + numero2;
        mostraResultado.innerText = resultado;
        break;
      case 'subtrair':
        resultado = numero1 - numero2;
        mostraResultado.innerText = resultado;
        break;
      case 'multiplicar':
        resultado = numero1 * numero2;
        mostraResultado.innerText = resultado.toFixed(2);
        break;
      case 'dividir':
        resultado = numero1 / numero2;
        mostraResultado.innerText = resultado.toFixed(2);
        break;
    }
  }else {
    alert("Verifique se você preencheu corretamente!");
  }
}
function verificar() {
  let pegaNumero1 = document.getElementById('number1');
  let pegaNumero2 = document.getElementById('number2');
  if(pegaNumero1.value == "" || pegaNumero2.value == "") {
    mostraResultado.innerText = 'Resultado';
  }
}
function colorVerify() {
  let pegaCorPrimaria = document.getElementById('paletaPrimaria').value;
  let pegaCorSecundaria = document.getElementById('paletaSecundaria').value;
  let pegaCorTerciaria = document.getElementById('paletaTerciaria').value;
  let pegaCorTexto = document.getElementById('paletaTexto').value;

  let corPrimaria = document.getElementById('corPrimaria');
  let corSecundaria = document.getElementById('corSecundaria');
  let corTerciaria = document.getElementById('corTerciaria');
  let corTexto = document.getElementById('corTexto');

  corPrimaria.value = pegaCorPrimaria.toUpperCase();
  corSecundaria.value = pegaCorSecundaria.toUpperCase();
  corTerciaria.value = pegaCorTerciaria.toUpperCase();
  corTexto.value = pegaCorTexto.toUpperCase();

  let valorCorPrimaria = document.documentElement.style.setProperty('--corPrimaria', pegaCorPrimaria);
  let valorCorSecundaria = document.documentElement.style.setProperty('--corSecundaria', pegaCorSecundaria);
  let valorCorTerciaria = document.documentElement.style.setProperty('--corTerciaria', pegaCorTerciaria);
  let valorCorTexto = document.documentElement.style.setProperty('--corTexto', pegaCorTexto);

  config.style.color = document.documentElement.style.getPropertyValue('--corSecundaria');
}

function seletorDeFonte() {
  let pegarCampoFontes = document.getElementById('fontesSite').value;

  switch(pegarCampoFontes) {
    case 'fonte01':
      document.documentElement.style.setProperty('--font', "Arial, Helvetica, sans-serif");
      break;
    case 'fonte02':
      document.documentElement.style.setProperty('--font', "'Monoton', cursive");
      break;
    case 'fonte03':
      document.documentElement.style.setProperty('--font', "'Roboto', sans-serif");
      break;
    default:
      document.documentElement.style.setProperty('--font', "Arial, Helvetica, sans-serif");
      break;
  }
}

//Onload

paletaPrimaria.value = '#eeeeee';
paletaSecundaria.value = '#3593ff';
paletaTerciaria.value = '#77b7ff';

setInterval(verificar, 300);
setInterval(colorVerify, 100);
setInterval(seletorDeFonte, 300);
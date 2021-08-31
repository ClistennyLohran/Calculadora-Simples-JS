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
    return;
  }
  containerLeft.style.left = "-280px";
  configValue = false;
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
function verificarPreenchimentoTexto() {
  let pegaNumero1 = document.getElementById('number1');
  let pegaNumero2 = document.getElementById('number2');
  if(pegaNumero1.value == "" || pegaNumero2.value == "") {
    mostraResultado.innerText = 'Resultado';
  }
}
function alterarCor() {
  let codigoCorPrimaria = document.getElementById('paletaPrimaria').value;
  let codigoCorSecundaria = document.getElementById('paletaSecundaria').value;
  let codigoCorTerciaria = document.getElementById('paletaTerciaria').value;
  let codigoCorTexto = document.getElementById('paletaTexto').value;

  let textoCorPrimaria = document.getElementById('corPrimaria');
  let textoCorSecundaria = document.getElementById('corSecundaria');
  let textoCorTerciaria = document.getElementById('corTerciaria');
  let textoCorTexto = document.getElementById('corTexto');

  textoCorPrimaria.value = codigoCorPrimaria.toUpperCase();
  textoCorSecundaria.value = codigoCorSecundaria.toUpperCase();
  textoCorTerciaria.value = codigoCorTerciaria.toUpperCase();
  textoCorTexto.value = codigoCorTexto.toUpperCase();

  document.documentElement.style.setProperty('--corPrimaria', codigoCorPrimaria);
  document.documentElement.style.setProperty('--corSecundaria', codigoCorSecundaria);
  document.documentElement.style.setProperty('--corTerciaria', codigoCorTerciaria);
  document.documentElement.style.setProperty('--corTexto', codigoCorTexto);
}

function alterarFonte() {
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

// Cores iniciais pré definidas.

paletaPrimaria.value = '#0F0F0F';
paletaSecundaria.value = '#0053B3';
paletaTerciaria.value = '#0077FF';
paletaTexto.value = "#EAEBED";

setInterval(verificarPreenchimentoTexto, 300);
setInterval(alterarCor, 100);
setInterval(alterarFonte, 300);
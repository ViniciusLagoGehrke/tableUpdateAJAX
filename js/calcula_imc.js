var pacientes = document.querySelectorAll(".paciente");

function validaPeso(peso){
  if (peso > 0 && peso < 1000){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura){
  if (altura > 0 && altura <= 3.00){
    return true;
  } else {
    return false;
  }
}

for(var i = 0; i< pacientes.length; i++){
  var paciente = pacientes[i];
  var pesoTD = paciente.querySelector(".info-peso");
  var alturaTD = paciente.querySelector(".info-altura");

  var imcTD = paciente.querySelector(".info-imc");

  var peso = pesoTD.textContent;
  var altura = alturaTD.textContent;

  //validar altura e peso inseridos
  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if(!pesoEhValido){
      console.log("Peso inválido");
      imcTd.textContent = "Peso inválido!";
      pesoEhValido = false;

      paciente.classList.add("paciente-invalido");
  }

  if(!alturaEhValida){
      console.log("Altura inválida");
      imcTd.textContent = "Altura inválida!";
      alturaEhValida = false;

      paciente.classList.add("paciente-invalido");
  }

  if(pesoEhValido && alturaEhValida){
      var imc = calculaImc(peso, altura);    
      imcTd.textContent = imc.toFixed(2);
  } else{
    imcTd.textContent = "Altura e/ou peso inválidos!"
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
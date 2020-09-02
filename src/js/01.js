'use strict';
const selects = document.querySelectorAll('select');
const numberInput = document.querySelector('.numberInput');

const resultadoParcial = document.querySelector('.resultado-parcial');
const resultadoTotal = document.querySelector('.resultado-total');
const tipoContrato = document.querySelector('.tipo-contrato');
const warning = document.querySelector('.warning');

const contratoSesion = document.querySelector('.contrato-sesion');
const contratoMes = document.querySelector('.contrato-mes');
const contratoSemana = document.querySelector('.contrato-semana');

const resetButton = document.querySelector('.container__button');

const getUserValue = () => {
  const produccion = document.querySelector('#produccion').value;
  const papel = document.querySelector('#papel').value;
  const contrato = document.querySelector('#contrato').value;
  const duracion = parseFloat(document.querySelector('#duracion').value);
  disabledOptions(produccion);
  produccion !== 'todos' && papel !== 'todos' ? renderResults(produccion, papel, contrato, duracion) : renderReset();
};

const disabledOptions = (produccion) => {
  if (produccion === 'publicidad') {
    contratoMes.disabled = true;
    contratoSemana.disabled = true;
    contratoSesion.selected = true;
  } else {
    contratoSemana.disabled = false;
    contratoMes.disabled = false;
  }
};

const renderResults = (produccion, papel, contrato, duracion) => {
  const salario = salarios[produccion][papel][contrato];
  tipoContrato.innerHTML = 'por ' + contrato;
  resultadoParcial.innerHTML = salario + '€';
  resultadoTotal.innerHTML = isNaN(duracion) ? 1 * salario + '€' : duracion * salario + '€';
  warning.innerHTML = '';
};

const renderReset = () => {
  tipoContrato.innerHTML = 'parcial';
  resultadoParcial.innerHTML = '-';
  resultadoTotal.innerHTML = '-';
  warning.innerHTML = '(Introduce al menos tipo de produccion y papel para poder calcular tu salario)';
};

const handleReset = () => {
  selects.forEach((select) => (select.selectedIndex = 0));
  numberInput.value = '';
  renderReset();
  getUserValue();
};

selects.forEach((select) => select.addEventListener('change', getUserValue));
numberInput.addEventListener('input', getUserValue);
resetButton.addEventListener('click', handleReset);

"use strict";const salarios={cine:{protagonista:{sesion:790.07,semana:3570.43,mes:9514.51},secundario:{sesion:575.35,semana:2558.81,mes:7140.84},reparto:{sesion:431.51,semana:1785,mes:5058.06},"pequeñasPartes":{sesion:172.6,semana:714.08,mes:2023.23}},television:{protagonista:{sesion:723.46,semana:3225.97,mes:8602.32},secundario:{sesion:516.77,semana:2298.06,mes:6413.16},reparto:{sesion:413.39,semana:1710.21,mes:4845.62},"pequeñasPartes":{sesion:165.33,semana:684.07,mes:1938.25}},bajoPresupuesto:{protagonista:{sesion:586.04,semana:2648.31,mes:7062.2},secundario:{sesion:479.48,semana:2132.33,mes:5950.68},reparto:{sesion:372.93,semana:1541.03,mes:4371.21},"pequeñasPartes":{sesion:149.17,semana:616.4,mes:1748.48}},publicidad:{protagonista:{sesion:574.54},secundario:{sesion:470.08},reparto:{sesion:365.62},"pequeñasPartes":{sesion:146.24}}},selects=document.querySelectorAll("select"),numberInput=document.querySelector(".numberInput"),resultadoParcial=document.querySelector(".resultado-parcial"),resultadoTotal=document.querySelector(".resultado-total"),tipoContrato=document.querySelector(".tipo-contrato"),warning=document.querySelector(".warning"),contratoSesion=document.querySelector(".contrato-sesion"),contratoMes=document.querySelector(".contrato-mes"),contratoSemana=document.querySelector(".contrato-semana"),resetButton=document.querySelector(".container__button"),getUserValue=()=>{const e=document.querySelector("#produccion").value,t=document.querySelector("#papel").value,o=document.querySelector("#contrato").value,a=parseFloat(document.querySelector("#duracion").value);disabledOptions(e),"todos"!==e&&"todos"!==t?renderResults(e,t,o,a):renderReset()},disabledOptions=e=>{"publicidad"===e?(contratoMes.disabled=!0,contratoSemana.disabled=!0,contratoSesion.selected=!0):(contratoSemana.disabled=!1,contratoMes.disabled=!1)},renderResults=(e,t,o,a)=>{const s=salarios[e][t][o];tipoContrato.innerHTML="por "+o,resultadoParcial.innerHTML=s+"€",resultadoTotal.innerHTML=isNaN(a)?1*s+"€":a*s+"€",warning.innerHTML=""},renderReset=()=>{tipoContrato.innerHTML="parcial",resultadoParcial.innerHTML="-",resultadoTotal.innerHTML="-",warning.innerHTML="(Introduce al menos tipo de produccion y papel para poder calcular tu salario)"},handleReset=()=>{selects.forEach(e=>e.selectedIndex=0),numberInput.value="",renderReset(),getUserValue()};selects.forEach(e=>e.addEventListener("change",getUserValue)),numberInput.addEventListener("input",getUserValue),resetButton.addEventListener("click",handleReset);
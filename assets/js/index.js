import getMonedas from './getMonedas.js';
import getMonedasOptions from "./getMonedasOptions.js";
import getDatosGrafico from './getDatosGrafico.js';
const btnBuscar = document.getElementById("btn");
const resultadoText = document.getElementById("resultado");
const montoInput = document.getElementById("monto");
let monedasOptions = document.getElementById("moneda");
let parrafoError = document.getElementById("mensajeError");
let chart = undefined;

const listado_monedas = await getMonedasOptions()
    .then(response => {
        parrafoError.innerHTML = "";
        return response;
    })
    .catch(error => {
        parrafoError.innerHTML = error;
    });
monedasOptions.innerHTML = listado_monedas;
const monedas = await getMonedas()
    .then(response => {
        parrafoError.innerHTML = "";
        return response;
    })
    .catch(error => {
        parrafoError.innerHTML = error;
    });;

const actualizarGrafico = async function (moneda) {
    try {
        parrafoError.innerHTML = "";
        const config = await getDatosGrafico(moneda);
        const chartDOM = document.getElementById("myChart");
        chartDOM.style.backgroundColor = "white";
        if (chart !== undefined) chart.destroy();
        chart = new Chart(chartDOM, config);
    } catch (error) {
        parrafoError.innerHTML = error;
    }

}

actualizarGrafico(monedas[0].tipo);

btnBuscar.addEventListener("click", function () {
    let monto = parseFloat(montoInput.value);
    let moneda = document.getElementById("moneda").value;
    let conversion = monto / monedas.filter(m => m.tipo === moneda).map(m => m.valor);
    resultadoText.innerText = "Resultado: $" + conversion.toFixed(2);
});

monedasOptions.addEventListener('change', function () {
    actualizarGrafico(this.options[this.selectedIndex].value);
});
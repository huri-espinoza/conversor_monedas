import historial from "./servicios/mindicador_by_type.js";
const getDatosGrafico = async function (moneda) {
    try {
        let data = await historial(moneda);
        const tipoDeGrafica = "line";
        const fechas = data.map((m) => m.fecha);
        const titulo = moneda;
        const colorDeLinea = "red";
        const valores = data.map((m) => m.valor);
        const config = {
            type: tipoDeGrafica,
            data: {
                labels: fechas,
                datasets: [{
                    label: titulo,
                    backgroundColor: colorDeLinea,
                    data: valores
                }]
            }
        };
        return config;
    } catch (error) {
        throw error;
    }
}

export default getDatosGrafico;
import monedas from "./servicios/mindicador.js";
const getMonedas = async function () {
    try {
        return await monedas();
    } catch (error) {
        throw error;
    }
};

export default getMonedas;
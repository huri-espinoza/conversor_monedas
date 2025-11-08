const monedas = async function () {
    return await fetch("https://mindicador.cl/api")
        .then(async response => {
            const data = await response.json();
            return Object.keys(data)
                .filter(key => typeof data[key] === "object" && data[key].valor && data[key].unidad_medida === "Pesos")
                .map(key => ({
                    tipo: key,
                    valor: data[key].valor
                }));
        })
        .catch(error => {
            throw new Error("Error al llamar a API para obtener todas las monedas, error: "+ error.message);
        });
};

export default monedas;
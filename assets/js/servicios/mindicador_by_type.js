const historial = async function (moneda) {
    const url = "https://mindicador.cl/api/" + moneda;
    return await fetch(url)
        .then(async response => {
            const data = await response.json();
            return data.serie
                .map(s => ({
                    fecha: s.fecha.split("T")[0],
                    valor: s.valor
                })).reverse()
                .slice(-10);
        })
        .catch(error => {
            throw new Error("Error al llamar a API para obtener moneda: " + moneda + ", error: " + error.message);
        });

};

export default historial;
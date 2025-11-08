import monedas from "./servicios/mindicador.js";
const getMonedasOptions = async function() {
    try {
      let data = await monedas();
      let template = '';
      data.forEach((moneda) => {
        template += `<option value="${moneda.tipo}">${firstLetterUpperCase(moneda.tipo)}</option>`;
      });
      return template;
    } catch (error) {
      throw error;
    }
};

const firstLetterUpperCase = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default getMonedasOptions;
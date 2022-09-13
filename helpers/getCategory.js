/**
 * Obtiene el nombre de una categoria
 * @param {int} id - Identificador unico de una categoria
 * @returns {Array} Nombre de una categoria
 */
const getCategory = async(id) => {
    //Consumo de la API para obtener una categoria
    const response = await fetch(`https://bs-store-api.vercel.app/category/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getCategory

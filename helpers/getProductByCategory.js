/**
 * Función que consulta en la API los productos de una categoria
 * @param {int} category - Identificador unico de una categoria
 * @param {*} page - Numero de pagina a consultar
 * @returns {Object} Paginación y lista de productos según su categoria
 */
const getProductByCategory = async(category,page = 1) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/category/${category}/${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getProductByCategory
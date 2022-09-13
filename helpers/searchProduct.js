/**
 * Función encargada de consultar en la API los productos
 * que coincidan en su nombre con el termino de busqueda.
 * @param {string} searching - Termino de busqueda
 * @param {int} page - Pagina de los resultados
 * @returns {Object} Paginación y lista de productos
 */
const searchProduct = async(searching,page = 1) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/search/${searching}/${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default searchProduct
/**
 * Función encargada de consultar a todos los productos disponibles
 * @param {int} page - Pagina de los resultados
 * @returns {Object} Paginación y lista de productos
 */
const getAllProducts = async(page = 1) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/${page}`, {
        method: 'GET',
        cache:"default",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getAllProducts
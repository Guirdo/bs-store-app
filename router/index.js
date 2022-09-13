import Pagination from "../components/Pagination";
import ProductItem from "../components/ProductItem";
import getAllProducts from "../helpers/getAllProducts";
import getCategory from "../helpers/getCategory";
import getProductByCategory from "../helpers/getProductByCategory";
import searchProduct from "../helpers/searchProduct";
import getHash from "../utils/getHash";
import redirectTo from "../utils/redirectTo";

/**
 * Función encargada de mostrar los productos obtenidos por una consulta a la API
 * @param {Array} products - Arreglo de productos 
 */
const renderProducts = (products) => {
    //Verifica si la lista de productos existe o tiene por lo menos un elemento
    if (products && products?.length > 0) {
        //Renderiza los elementos de la list de productos
        document.querySelector('.product-list').innerHTML = products.map(product => (`
            ${ProductItem(product)}
        `)).join("")
    } else { //Si no muestra el siguiente mensaje
        document.querySelector('.product-title').innerHTML = `
            No existe ningún resultado para tu búsqueda
        `
    }
}

/**
 * Función encarga de renderizar el componente de paginación
 * @param {string} hash - Hash fuente
 * @param {Object} pagination - Objeto con la información de paginación
 */
const renderPagination = (hash, pagination) => {
    const { currentPage, numberOfPages } = pagination

    //Si existen más de una pagina, se mostrará la interfaz de paginación
    if (numberOfPages > 1) {
        document.querySelector('.pagination').innerHTML = Pagination(
            hash,
            currentPage,
            numberOfPages
        )
    }else{//Si no se mostrara vacio
        document.querySelector('.pagination').innerHTML = ''
    }
}

/**
 * Se encarga de renderizar los resultados correspondientes
 * al hash de la URL.
 */
const router = async () => {
    //Se obtiene el hash de la URL de la pagina
    //y se desestructura 
    let [_, func, param,__, page] = getHash()

    //Se limpian lo componentes que muestran la lista de productos y las opciones de paginación
    document.querySelector('.product-list').innerHTML = 'Por favor espere...'
    document.querySelector('.pagination').innerHTML = ''

    //Si el usuario da click a una categoria de la barra lateral,
    //se le mostraran los productos de esa categoria
    if (func === 'category') {
        const category = await getCategory(param)
        document.querySelector('.product-title').innerHTML = `Categoría ${category[0].name.toUpperCase()}`

        const { pagination, products } = await getProductByCategory(param,page)
        renderProducts(products)
        renderPagination(`#/category/${param}`, pagination)

    } else if (func === 'search') {//Para el manejo de las busquedas del usuario
        document.querySelector('.product-title').innerHTML = `Resultados para ${param}`

        const { pagination, products } = await searchProduct(param,page)
        renderProducts(products)
        renderPagination(`#/search/${param}`, pagination)

    } else if (func === '' || func === 'page') {//Para el manejo de la pantalla principal y su paginación
        document.querySelector('.product-title').innerHTML = 'Todos'

        const { pagination, products } = await getAllProducts(param)
        renderProducts(products)
        renderPagination('#', pagination)

    } else {//Para el manejo de hashes no soportados
        //Redirije al usuario a la pantalla principal
        redirectTo('#/')
    }
}

export default router
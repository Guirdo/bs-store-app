import ProductItem from "../components/ProductItem";
import getAllProducts from "../helpers/getAllProducts";
import getCategory from "../helpers/getCategory";
import getProductByCategory from "../helpers/getProductByCategory";
import searchProduct from "../helpers/searchProduct";
import getHash from "../utils/getHash";

const redirectToHome = () => {
    const newURL = new URL(window.location)
    newURL.hash = '#/'

    document.location.href = newURL
}

const router = async () => {
    let products
    let [_, func, param] = getHash()

    switch (func) {
        case 'category':
            const category = await getCategory(param)
            document.querySelector('.product-title').innerHTML = `Categoría ${category[0].name.toUpperCase()}`

            products = await getProductByCategory(param)
            break

        case 'search':
            document.querySelector('.product-title').innerHTML = `Resultados para ${param}`
            products = await searchProduct(param)
            break

        case '':
            document.querySelector('.product-title').innerHTML = 'Todos'
            products = await getAllProducts()
            break

        default:
            redirectToHome()
    }

    if (products?.length > 0 && products) {
        document.querySelector('.product-list').innerHTML = products.map(product => (`
            ${ProductItem(product)}
        `)).join("")
    } else {
        document.querySelector('.product-title').innerHTML = `
            No existe ningún resultado para tu búsqueda
        `
    }
}

export default router
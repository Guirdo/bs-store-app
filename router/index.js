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

const renderProducts = (products) => {
    if (products && products?.length > 0) {
        document.querySelector('.product-list').innerHTML = products.map(product => (`
            ${ProductItem(product)}
        `)).join("")
    } else {
        document.querySelector('.product-title').innerHTML = `
            No existe ningún resultado para tu búsqueda
        `
    }
}

const router = async () => {

    let [_, func, param] = getHash()

    if (func === 'category') {
        const category = await getCategory(param)
        document.querySelector('.product-title').innerHTML = `Categoría ${category[0].name.toUpperCase()}`

        const { products } = await getProductByCategory(param)
        renderProducts(products)
    } else if (funct === 'search') {
        document.querySelector('.product-title').innerHTML = `Resultados para ${param}`

        const { products } = await searchProduct(param)
        renderProducts(products)
    } else if (func === '') {
        document.querySelector('.product-title').innerHTML = 'Todos'

        const { products } = await getAllProducts()
        renderProducts(products)
    } else {
        redirectToHome()
    }
}

export default router
import Pagination from "../components/Pagination";
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

const renderPagination = (hash, pagination) => {
    const { currentPage, numberOfPages } = pagination
    if (numberOfPages > 1) {
        document.querySelector('.pagination').innerHTML = Pagination(
            hash,
            currentPage,
            numberOfPages
        )
    }else{
        document.querySelector('.pagination').innerHTML = ''
    }
}

const router = async () => {
    let [_, func, param,__, page] = getHash()

    if (func === 'category') {
        const category = await getCategory(param)
        document.querySelector('.product-title').innerHTML = `Categoría ${category[0].name.toUpperCase()}`

        const { pagination, products } = await getProductByCategory(param,page)
        renderProducts(products)
        renderPagination(`#/category/${param}`, pagination)

    } else if (func === 'search') {
        document.querySelector('.product-title').innerHTML = `Resultados para ${param}`

        const { pagination, products } = await searchProduct(param,page)
        renderProducts(products)
        renderPagination(`#/search/${param}`, pagination)

    } else if (func === '' || func === 'page') {
        document.querySelector('.product-title').innerHTML = 'Todos'

        const { pagination, products } = await getAllProducts(param)
        console.log(pagination)
        renderProducts(products)
        renderPagination('#', pagination)

    } else {
        redirectToHome()
    }
}

export default router
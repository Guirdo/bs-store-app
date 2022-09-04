import CategoryMenu from "../components/CategoryMenu";
import ProductItem from "../components/ProductItem";
import getAllProducts from "../helpers/getAllProducts";
import getCategories from "../helpers/getCategories";
import getCategory from "../helpers/getCategory";
import getProductByCategory from "../helpers/getProductByCategory";
import searchProduct from "../helpers/searchProduct";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const router = async () => {
    //Rendering Category menu
    const categories = await getCategories()
    document.querySelector('.category-menu').innerHTML = CategoryMenu(categories)

    let products
    if (params.category) {
        const category = await getCategory(params.category)
        document.querySelector('.product-title').innerHTML = `Categoría ${category[0].name.toUpperCase()}`

        products = await getProductByCategory(params.category)
    } else if (params.searching) {
        document.querySelector('.product-title').innerHTML = `Resultados para ${params.searching}`
        products = await searchProduct(params.searching)
    } else {
        document.querySelector('.product-title').innerHTML = 'Todos'
        products = await getAllProducts()
    }

    if (products.length > 0 && products) {
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
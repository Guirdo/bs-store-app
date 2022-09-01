import ProductItem from "../components/ProductItem";
import getAllProducts from "../helpers/getAllProducts";
import getProductByCategory from "../helpers/getProductByCategory";


/* const routes = {
    '/': await getAllProducts()
} */


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const router = async () => {
    let products
    if (params.category) {
        products = await getProductByCategory(params.category)
    } else if (params.searching) {

    } else {
        products = await getAllProducts()
    }

    document.querySelector('.product-list')
            .innerHTML = products.map(product => (`
        ${ProductItem(product)}
    `)).join("")
}

export default router
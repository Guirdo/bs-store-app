import ProductItem from "../components/ProductItem";
import getAllProducts from "../helpers/getAllProducts";
import getProductByCategory from "../helpers/getProductByCategory";
import searchProduct from "../helpers/searchProduct";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const router = async () => {
    let products
    if (params.category) {
        products = await getProductByCategory(params.category)
    } else if (params.searching) {
        products = await searchProduct(params.searching)
    } else {
        products = await getAllProducts()
    }

    if (products.length > 0) {
        document.querySelector('.product-list').innerHTML = products.map(product => (`
            ${ProductItem(product)}
        `)).join("")
    }else{
        document.querySelector('.product-list').innerHTML = `
            <h5>No existe ningún resultado para tu busqueda</h5>
        `
    }
}

export default router
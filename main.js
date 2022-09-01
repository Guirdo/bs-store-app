import CategoryMenu from './components/CategoryMenu'
import Navbar from './components/Navbar'
import ProductItem from './components/ProductItem'
import getAllProducts from './helpers/getAllProducts'
import getCategories from './helpers/getCategories'
import './styles/global.scss'

//Rendering Navbar
document.querySelector('header').innerHTML = Navbar()

//Rendering Category menu
const categories = await getCategories()
document.querySelector('.category-menu').innerHTML = CategoryMenu(categories)

//Rendering Product list
const products = await getAllProducts()
document.querySelector('.product-list')
    .innerHTML = products.map(product => (`
        ${ProductItem(product)}
    `)).join("")


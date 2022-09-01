import './styles/global.scss'
import CategoryMenu from './components/CategoryMenu'
import Navbar from './components/Navbar'
import ProductItem from './components/ProductItem'
import getAllProducts from './helpers/getAllProducts'
import getCategories from './helpers/getCategories'
import router from './router'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)

//Rendering Navbar
document.querySelector('header').innerHTML = Navbar()

//Rendering Category menu
const categories = await getCategories()
document.querySelector('.category-menu').innerHTML = CategoryMenu(categories)

//Rendering Product list



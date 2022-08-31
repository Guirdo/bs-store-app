import CategoryMenu from './components/CategoryMenu'
import Navbar from './components/Navbar'
import ProductItem from './components/ProductItem'
import './styles/global.scss'

//Rendering Navbar
document.querySelector('header').innerHTML = Navbar()

//Rendering Category menu
document.querySelector('.category-menu').innerHTML = CategoryMenu()

//Rendering Product list
document.querySelector('.product-list').innerHTML = ProductItem()


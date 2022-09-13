import './styles/global.scss'
import router from './router'
import getCategories from './helpers/getCategories'
import CategoryMenu from './components/CategoryMenu'

const init = async () => {
    const form = document.querySelector('.navbar-search-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const searching = document.getElementById('searching').value

        const searchURL = new URL(window.location)
        searchURL.hash = `#/search/${searching}`

        document.location.href = searchURL
    })

    //Rendering Category menu
    const categories = await getCategories()
    document.querySelector('.category-menu').innerHTML = CategoryMenu(categories)

    router()

    window.addEventListener('hashchange', () => {
        router()
    })
}

window.addEventListener('load', init)




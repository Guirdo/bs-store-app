import './styles/global.scss'
import router from './router'
import getCategories from './helpers/getCategories'
import CategoryMenu from './components/CategoryMenu'
import redirectTo from './utils/redirectTo'

/**
 * Esta función inicializa el sistema
 */
const init = async () => {

    //Se obtiene el objeto del formulario de busqueda de la barra de navegación
    //Para agregarle el EventListener que detectará el valor a buscar por el usuario
    const form = document.querySelector('.navbar-search-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const searching = document.getElementById('searching').value

        //Se redirije a la siguiente dirección para que el router 
        //renderice los resultados correspondientes
        redirectTo(`#/search/${searching}`)
    })

    //Consume desde la API las categorias disponibles en la base de datos
    //y las muestras en la barra lateral de la pantalla de inicio
    const categories = await getCategories()
    document.querySelector('.category-menu').innerHTML = CategoryMenu(categories)

    //Se llamar al router en la primera carga del sistema
    router()

    //Se llamara al router del sistemas cada vez que el hash
    //de la URL de la pagina cambie
    window.addEventListener('hashchange', () => {
        router()
    })
}

//Se carga todo lo anterior después de la primera carga del sistema
window.addEventListener('load', init)




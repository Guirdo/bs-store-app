/**
 * Función encargada de renderizar el menu de categorias
 * disponibles
 * @param {Array} categories - Lista de categorias
 * @returns {String} Plantilla del componente
 */
const CategoryMenu = (categories) => {
    return `
    <ul class="category-list">
        ${categories.map(category =>(
            `<a 
                class="category__item"
                href="#/category/${category.id}"
            >
                <li>${category.name.toUpperCase()}</li>
            </a>`
        )).join('')}
    </ul>
    `
}

export default CategoryMenu
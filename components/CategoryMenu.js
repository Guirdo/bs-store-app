const CategoryMenu = (categories) => {
    return `
    <ul class="category-list">
        ${categories.map(category =>(
            `<a 
                class="category__item"
                href="?category=${category.id}"
            >
                <li>${category.name.toUpperCase()}</li>
            </a>`
        )).join('')}
    </ul>
    `
}

export default CategoryMenu
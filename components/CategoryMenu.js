const CategoryMenu = (categories) => {
    return `
    <ul class="category-list">
        ${categories.map(category =>(
            `<li class="category__item">${category.name.toUpperCase()}</li>`
        )).join('')}
    </ul>
    `
}

export default CategoryMenu
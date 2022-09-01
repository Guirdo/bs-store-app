
const ProductItem = ({name,url_image,price}) => {
    return `
    <div class="product-item">
        <figure>
            <img 
                class="product__image"
                src="${url_image}" 
                alt="product image"
            />
        </figure>
        <h3>${name}</h3>
        <span>${price}</span>
        <span>Icon</span>
    </div>
    `
}

export default ProductItem

const ProductItem = ({name,url_image,price}) => {
    return `
    <div class="product-item">
        <figure>
            <img 
                class="product__image"
                src="${url_image}" 
                alt="${name}"
            />
        </figure>
        <h4>${name}</h4>
        <span>$${price}</span>
    </div>
    `
}

export default ProductItem
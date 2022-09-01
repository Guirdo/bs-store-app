
const ProductItem = ({name,url_image,price,discount}) => {
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
        <div class="product-price-tag">
            <span>$${price}</span>
            ${discount > 0 ? 
                `<span class="product__discount">${discount}% OFF</span>`
                : ''
            }
        </div>
    </div>
    `
}

export default ProductItem
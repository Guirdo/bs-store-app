const getProductByCategory = async(category,page = 1) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/category/${category}/${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getProductByCategory
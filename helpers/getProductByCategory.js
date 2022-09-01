const getProductByCategory = async(category) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/category/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getProductByCategory
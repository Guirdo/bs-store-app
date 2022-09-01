const getProductByCategory = async(category) => {
    const response = await fetch(`http://localhost:4000/product/category/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getProductByCategory
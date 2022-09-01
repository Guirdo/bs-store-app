const getAllProducts = async() => {
    const response = await fetch('https://bs-store-api.vercel.app/product', {
        method: 'GET',
        cache:"default",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getAllProducts
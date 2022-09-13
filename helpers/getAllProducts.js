const getAllProducts = async(page = 1) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/${page}`, {
        method: 'GET',
        cache:"default",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getAllProducts
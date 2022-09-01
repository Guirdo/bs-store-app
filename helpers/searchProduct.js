const searchProduct = async(searching) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/search/${searching}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default searchProduct
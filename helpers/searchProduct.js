const searchProduct = async(searching,page = 1) => {
    const response = await fetch(`https://bs-store-api.vercel.app/product/search/${searching}/${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default searchProduct
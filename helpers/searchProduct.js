const searchProduct = async(searching) => {
    const response = await fetch(`http://localhost:4000/product/search/${searching}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default searchProduct
const getAllProducts = async() => {
    const response = await fetch('http://localhost:4000/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getAllProducts
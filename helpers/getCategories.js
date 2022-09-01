const getCategories = async() => {
    const response = await fetch('http://localhost:4000/category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getCategories
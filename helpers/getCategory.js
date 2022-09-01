const getCategory = async(id) => {
    const response = await fetch(`http://localhost:4000/category/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getCategory

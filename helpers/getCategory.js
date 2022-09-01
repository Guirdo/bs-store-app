const getCategory = async(id) => {
    const response = await fetch(`https://bs-store-api.vercel.app/category/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getCategory

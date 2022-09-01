const getCategories = async() => {
    const response = await fetch('https://bs-store-api.vercel.app/category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return response.json()
}

export default getCategories
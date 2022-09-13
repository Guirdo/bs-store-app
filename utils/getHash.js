const getHash = () => (
    location.hash.slice('1').toLocaleLowerCase()
        .split('/') || '/'
)

export default getHash
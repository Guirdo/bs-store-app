/**
 * Función que separa el hash de la URL
 * para obtener los parametros que esta tenga
 * @returns {String array} Lista de parametros 
 */
const getHash = () => (
    location.hash.slice('1').toLocaleLowerCase()
        .split('/') || '/'
)

export default getHash
/**
 * Esta función redirecciona al nuevo hash que se le envie
 * @param {string} newHash - El hash nuevo
 */
const redirectTo = (newHash) => {
    //Creación de la nueva URL
    const newURL = new URL(window.location)
    newURL.hash = newHash

    //Redirije a la nueva URL
    document.location.href = newURL
}

export default redirectTo
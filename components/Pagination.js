/**
 * Función encargada de renderizar las opciones
 * de paginación de los resultados
 * @param {string} hash - Hash fuente
 * @param {int} currentPage - Pagina actual de los resultados
 * @param {int} numberOfPages - Numero total de paginas resultantes
 * @returns {String} - Plantilla del componente
 */
const Pagination = (hash, currentPage, numberOfPages) => {
    return `
        <a 
            class="pagination__button ${currentPage === 1 && 'pagination__button--disabled'}"
            href="${hash}/page/${currentPage - 1 !== 0 ? currentPage - 1 : 1}"
        >
            ${'<- '}Anterior
        </a>
        <div
            class="pagination__text"
        >
            <span>${currentPage}</span>
            de
            <span>${numberOfPages}</span>
        </div>
        <a
            class="pagination__button ${currentPage === numberOfPages && 'pagination__button--disabled'}"
            href="${hash}/page/${currentPage + 1 < numberOfPages ? currentPage + 1 : numberOfPages}"
        >
            Siguiente${' ->'}
        </a>
    `
}

export default Pagination
const Pagination = (hash,currentPage, numberOfPages) => {
    return `
        <a 
            class="pagination__button ${currentPage === 1 && 'pagination__button--disabled'}"
            href="${hash}/page/${currentPage-1}"
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
            href="${hash}/page/${currentPage+1}"
        >
            Siguiente${' ->'}
        </a>
    ` 
}

export default Pagination
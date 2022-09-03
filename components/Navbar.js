const Navbar = () => {
    return `
    <nav class="navbar">
      <ul class="navbar-list">
        <a class="navbar__brand" href="/">
          <li>BS Store</li>
        </a>
        <li class="navbar-search-form">
          <form method="GET">
            <input class="navbar-search-form__input" type="text" name="searching" placeholder="Buscar producto" />

            <button 
              class="navbar-search-form__button"
              type="submit">
              <span>
                <svg width="24px" height="24px" stroke-width="2.32" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                  <path d="M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z" stroke="#ffffff" stroke-width="2.32"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </button>
          </form>
        </li>
      </ul>
    </nav>
    `
}

export default Navbar
const Navbar = () => {
    return `
    <nav class="navbar">
        <ul class="navbar-list">
            <a 
                class="navbar__brand"
                href="/"
            >
                <li >BS Store</li>
            </a>
            <li class="navbar-search-form">
                <form>
                    <input 
                        class="navbar-search-form__input"
                        type="text"
                        name="searching"
                        placeholder="Buscar producto"
                    />
                </form>
            </li>
        </ul>
    </nav>
    `
}

export default Navbar
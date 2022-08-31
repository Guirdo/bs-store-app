const Navbar = () => {
    return `
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar__brand">BS Store</li>
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
            <li>
                <span>
                    <i class="iconoir-add-to-cart"></i>
                </span>
            </li>
        </ul>
    </nav>
    `
}

export default Navbar
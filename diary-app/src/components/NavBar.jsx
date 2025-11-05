import "../css/navbar.css"

function NavBar(){
    return <nav id="nav-bar">
        <div id="home-btn" className="navbar-elements">🏠</div>
        <div id="title" className="navbar-elements">My Diary App (2026)</div>
        <button id="favorite-btn" className="navbar-elements">Favorites</button>
    </nav>
}

export default NavBar;
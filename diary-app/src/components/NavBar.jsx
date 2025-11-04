import "../css/navbar.css"

function NavBar(){
    return <nav className="nav-bar">
        <div className="home-btn">🏠</div>
        <div className="title">My Diary App (2026)</div>
        <button className="favorite-btn">Favorites</button>
    </nav>
}

export default NavBar;
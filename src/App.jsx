import "./App.css";

function App() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">adidas</div>

                <ul className="nav-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Producción</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <h1>Adidas Collection</h1>

                    <p>
                        Gestiona y descubre nuestra colección de tenis
                        deportivos Adidas.
                    </p>

                    <button className="hero-button">
                        Ver productos
                    </button>
                </div>
            </section>

            <section className="productos">
                <h2>Productos destacados</h2>

                <div className="productos-grid">

                    <div className="producto-card">
                        <img src="/tenis1.jpg" alt="Tenis Adidas" />

                        <div className="producto-info">
                            <h3>Adidas Ultraboost</h3>
                            <p>Tenis deportivos</p>

                            <div className="producto-precio">
                                $450.000
                            </div>

                            <button className="producto-button">
                                Ver producto
                            </button>
                        </div>
                    </div>

                    <div className="producto-card">
                        <img src="/tenis2.jpg" alt="Tenis Adidas" />

                        <div className="producto-info">
                            <h3>Adidas Forum</h3>
                            <p>Tenis casuales</p>

                            <div className="producto-precio">
                                $380.000
                            </div>

                            <button className="producto-button">
                                Ver producto
                            </button>
                        </div>
                    </div>

                    <div className="producto-card">
                        <img src="/tenis3.jpg" alt="Tenis Adidas" />

                        <div className="producto-info">
                            <h3>Adidas Superstar</h3>
                            <p>Tenis urbanos</p>

                            <div className="producto-precio">
                                $320.000
                            </div>

                            <button className="producto-button">
                                Ver producto
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="categorias">
                <h2>Categorías</h2>

                <div className="categorias-grid">
                    <div className="categoria">Running</div>
                    <div className="categoria">Fútbol</div>
                    <div className="categoria">Basketball</div>
                    <div className="categoria">Urbano</div>
                </div>
            </section>

            <footer className="footer">
                <p>© 2026 Adidas Store | Proyecto ADSO</p>
            </footer>
        </>
    );
}

export default App;
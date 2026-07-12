import styles from '../Header/Header.module.css';
import { Link } from "react-router-dom";
import logoImg from "../../../public/assets/wraithrecords.png";
import {CartWidget} from '../Cart/CartWidget';
import {useAuth} from '../../Context/AuthContext';

function Header() {
    const { user, logout } = useAuth(); // Obtenemos el usuario y la función de logout del contexto
    return (
        <header className={styles.Header}>
            <div className={styles.LogoContainer}>
                <Link to="/">
                    <img src={logoImg} alt="Logo Discográfica" className={styles.Logo} />
                </Link>
            </div>

            <nav className={styles.Nav}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/carrito"> <CartWidget/></Link></li> 

                   <div className={styles.UserSection}>
                        {user ? (<>{/* Mostrar Gestion SOLO si el usuario es admin */}
                        {user.rol === 'admin' && (<li className="nav-item">
                        <Link className="nav-link" to="/gestion">Gestion Productos</Link></li>)}
                        <span>Hola, {user.email} </span>
                        <button onClick={logout}>Cerrar Sesion</button>
                        </> ) : ( <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    )}
                   </div>
                </ul>    
            </nav>
        </header>
    );
}
export default Header;
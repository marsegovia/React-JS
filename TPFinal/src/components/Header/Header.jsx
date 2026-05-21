import styles from '../Header/Header.module.css'
import { Link } from "react-router-dom";
import logoImg from "../../../public/assets/wraithrecords.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Header() {
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
                    <li><Link to="/nuevoProducto">Nuevo Producto</Link></li> 
                    <li><Link to=""><FontAwesomeIcon id='icono' icon={faCartShopping} /></Link></li>     
                </ul>
            </nav>
        </header>
    );
}
export default Header;
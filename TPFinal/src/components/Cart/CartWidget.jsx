import { useContext } from "react";
import {CartContext} from "../../Context/CartContext"; // Ajusta la ruta si es necesario
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import styles from "../Cart/CartWidget.module.css";

export const CartWidget = () => {
    // Usamos totalItems que definiste en tu contexto
    const { totalItems } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <FontAwesomeIcon id='icono' icon={faCartShopping} />
            {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </div>
    );
};
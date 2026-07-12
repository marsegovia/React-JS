import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; // Asegúrate de que la ruta sea correcta
import styles from "../Cart/Carrito.module.css";

export const Carrito = () => {
    // Consumimos el carrito directamente desde el contexto
    const { cart,totalPrice } = useContext(CartContext);

    return (
        <div className={styles.VistaCarrito}>
            <h1>Tu Carrito</h1>
            
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div className={styles.ItemCarrito}>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.Carrito} >
                            <img src={item.imagen} alt={item.album} style={{ width: '50px' }} />
                            <h3>{item.banda} - {item.album}</h3>
                            <p>Precio unidad ${item.precio}</p>
                            <p>Cantidad - {item.quantity}</p>
                            <p>Subtotal - ${item.precio * item.quantity}</p>
                        </div>                   
                    ))}
                    <h2>Total  ${totalPrice}</h2>
                </div>
            )}
        </div>
    );
};

export default Carrito;
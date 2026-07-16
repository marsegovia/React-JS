import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; // Asegúrate de que la ruta sea correcta
import styles from "../Cart/Carrito.module.css";
import {useState} from "react";

export const Carrito = () => {
    // Consumimos el carrito directamente desde el contexto
    const { cart,totalPrice, clearCart } = useContext(CartContext);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);

    const applyCoupon = () => {
    const value = coupons[coupon.toUpperCase()];

        if (value) {
            setDiscount(value);
        } else {
            alert("Cupón inválido");
            setDiscount(0);
        }
    };

    const finalPrice = totalPrice - (totalPrice * discount) / 100;

    const coupons = {
        VINILO10: 10,
        METAL15: 15,
        WELCOME20: 20,
    };

    return (
        
        <div className={styles.VistaCarrito}>
            <h1>Tu Carrito</h1>
            {cart.length === 0 ? (
                <p>Tu carrito esta vacio.</p>
            ) : (
                <div className={styles.ItemCarrito}>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.Carrito} >
                            <img src={item.imagen} alt={item.album} />
                            <h3>{item.banda} - {item.album}</h3>
                            <p>${item.precio}</p>
                            <p>x{item.quantity}</p>
                            <p>${item.precio * item.quantity}</p>
                        </div>                   
                    ))}
                    <h2>Total  ${totalPrice}</h2>
                </div>
            )}
            {cart.length > 0 && (<button className={styles.clear} onClick={clearCart}>Vaciar Carrito</button>)}
            <input className={styles.descuento} type="text" placeholder="Código de descuento" value={coupon} 
                onChange={(e) => setCoupon(e.target.value)}/>
            <button className={styles.appCupon} onClick={applyCoupon}> Aplicar cupon </button>
        </div>
    );
};

export default Carrito;
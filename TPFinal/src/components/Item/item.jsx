import { useState } from 'react';
import { useContext } from 'react';
import React, { useEffect } from 'react';
import styles from "../Item/Item.module.css";
import { CartContext } from '../../Context/CartContext';

export function Item({ id, imagen, banda, album, precio, stock, formato }) {
    
    // 3. Obtenemos la función del contexto
    const { addToCart } = useContext(CartContext); 

    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };
    
    // 4. Lógica de agregar al carrito
    const manejarAgregar = () => {
        if (cantidad <= 0) {
            alert(`No podes agregar ${cantidad} unidades.`);
        } else {
            // Construimos el objeto del producto
            const producto = { id, banda, album, precio, formato, imagen };
            addToCart(producto, cantidad);
            alert(`Agregaste ${cantidad} unidad/es de ${banda} - ${album} al carrito.`);
        }
    };

    return (
        <div className={styles.Card}>
            <img src={imagen} alt={`${banda} - ${album}`} className={styles.Imagen}></img>
            <div className={styles.Info}>
                <h2>{banda}</h2>
                <h4>{album}</h4>
                <h5>{formato}</h5>
            </div>
            
            <div className={styles.Botones}>
                <p id={styles.Precio}>${precio}</p>
                <div className={styles.Agregar}>
                    <button id={styles.Cant} onClick={decrementar}>-</button>
                    <p style={{ margin: '0 10px', fontSize:'20px' }}>{cantidad}</p>
                    <button id={styles.Cant} onClick={incrementar}>+</button>
                    {/* 5. Llamamos a la función manejarAgregar */}
                    <button id={styles.BotonAddCart} onClick={manejarAgregar}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
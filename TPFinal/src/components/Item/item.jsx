import { useState } from 'react';
import React, { useEffect } from 'react';
import styles from "../Item/Item.module.css";

export function Item({imagen,banda,album, precio, stock, formato }) {

    useEffect(() => {
    // Código que queremos ejecutar (el efecto)
        console.log('El componente se acaba de mostrar en pantalla.');
        return () => {
            // La "limpieza" (opcional)
            console.log('El componente se va a desmontar. Limpiando...');
        };
}, [/*Array de dependencias */]);

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
    
    const CompraClick = () => {
        // Quiero que se ejecute cuando le doy clic
        alert(`¡Agregaste ${banda} - ${album} al chango!`);
    };        

    const agregarAlCarrito = () => {
        if(cantidad <= 0){
            alert(`No podes agregar ${cantidad} unidades al carrito.`);
        }
        else {
            alert(`Agregaste ${cantidad} de ${banda} - ${album} unidades al carrito.`);
            
        }
        
    }

    return (
        <div className={styles.Card}>
            <img src={imagen} alt={`${banda} - ${album}`}  className={styles.Imagen}></img>
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
                        <button id={styles.BotonAddCart} onClick={agregarAlCarrito}>Agregar</button>
                    </div>
            </div>
            
            
        </div>
            );
}

export default Item;
import React, { useState, useEffect } from 'react';
import styles from '../Productos/Productos.module.css';

function Productos({Mensaje}) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        fetch('/Data/productos.json').then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error('No se pudo cargar la información de los productos');
            }
            return respuesta.json();}).then((datos) => {
                setProductos(datos);}).catch((error) => {
                    setError(error.message);}).finally(() => {
                        setCargando(false);
                    });
        }, []);

        if (cargando) {
            return <p>Cargando productos, por favor espere...</p>;
        }
        if (error) {
            return <p>Error: {error}</p>;
        }
        
        return (
            <div className={styles.Contenedor}>
                <h1 className={styles.Titulo}>{Mensaje}</h1>
                <ul>
                    {productos.map((producto) => (
                        <li key={producto.id}>
                            <h2>{producto.banda}</h2>
                            <h2>{producto.album}</h2>
                            <h2>{producto.formato}</h2>
                            <img src={producto.imagen} alt={producto.banda} width="150" />
                            <p>Precio: ${producto.precio}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default Productos;
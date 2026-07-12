import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import styles from '../ProductosImportados/Importados.module.css';
import Item from '../Item/item';

const VinilosImportados = () => {
    // Estado para guardar los productos que traigamos de la DB
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const productosDB = collection(db,"Vinilos Importados")
        getDocs(productosDB).then((resp) => {
            setProductos(resp.docs.map((doc) => {
                return{...doc.data(),id: doc.id}
            }));
        })
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez
    
   return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Vinilos Importados</h1>

        <div className={styles.listaProductos}>
            {productos.map((prod) => (
                <Item
                    key={prod.id}
                    id={prod.id}
                    imagen={prod.Imagen}
                    banda={prod.Banda}
                    album={prod.Album}
                    precio={prod.Precio}
                    stock={prod.Stock}
                    formato={prod.Formato}
                />
            ))}
        </div>
    </div>
);
            
};

export default VinilosImportados;
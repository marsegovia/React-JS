import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Importaciones clave para obtener un solo documento
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import styles from '../ProductosImportados/Importados.module.css';
    
const VinilosImportadosDetalle = () => {
    const [prod, setItem] = useState(null);
    const { id } = useParams(); //Tomamos el parámetro id
    useEffect(() => {
        if (id) {
            // Creamos la referencia al documento
            const docRef = doc(db, "Vinilos Importados", id);
            getDoc(docRef).then((resp) => {
                if (resp.exists()) { // Verificamos si el documento existe
                    setItem({ ...resp.data(), id: resp.id });
                } else {
                    console.log("No se encontró el producto");
                    }
                }).catch(error => console.log(error));
            }
        }, [id]);
        return (    
            <div className={styles.CartaDetalle}>
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
export default VinilosImportadosDetalle;

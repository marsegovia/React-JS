import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import Icono from "../../../public/assets/icono.png";

export function ItemListContainer({ Mensaje, mostrarIcono, filtro}) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productosRef = collection(db, "Vinilos Importados");

        const consulta = filtro
        ? query(productosRef, where("Tipo", "==", filtro))
        
        : productosRef;

        getDocs(consulta).then((resp) => {
            setProductos(
                resp.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            );
        });
    }, [filtro]);

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                {mostrarIcono && (
                    <img src={Icono} alt="icon" className={styles.icono} />
                )}
                <h2 className={styles.subtitulo}>{Mensaje}</h2>
            </div>

            <div className={styles.productos}>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;
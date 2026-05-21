import { ItemList } from "../ItemList/Itemlist";
import styles from './ItemListContainer.module.css';
import productosJson from "../../../public/Data/productos.json";
import Icono from "../../assets/icono.png"

export function ItemListContainer({ Mensaje, filtro, mostrarIcono }) {
    // Si hay un filtro (ej: "destacado"), filtramos el array. Si no, mostramos todo.
    const productos = filtro 
        ? productosJson.filter(p => p.categoria === filtro) 
        : productosJson;

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                {mostrarIcono && <img src={Icono} alt="icon" className={styles.icono} />}
                <h2 className={styles.subtitulo}>{Mensaje}</h2>
            </div>
            
            <div className={styles.productos}>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}
    
export default ItemListContainer;
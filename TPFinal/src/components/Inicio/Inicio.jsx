import styles from "../Inicio/Inicio.module.css";
import ImagenBanner from "../../../public/assets/banner.png"
import { Link } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export function Inicio(){
    return (
        <div className={styles.contenedorInicio}>
            <div className={styles.BannerContainer}>
                <Link to="/">
                    <img src={ImagenBanner} alt="banner" className={styles.Banner} />
                </Link>
                
                <div className={styles.Presentacion}>
                    <h3>Underground Eternal Extreme</h3>
                    <h1>Sonidos que emergen desde la oscuridad</h1>
                    <p>WraithMoon Records es un sello independiente dedicado a la musica extrema</p>
                </div>
                    
                <div className={styles.BotonInicial}>
                    <button>Ver Catalogo</button>
                </div>
            </div>

                <ItemListContainer 
                    mostrarIcono={true} 
                    Mensaje="NOVEDADES DEL SELLO" 
                    filtro="Destacado"
                />
            
        </div>
    );
}

export default Inicio;
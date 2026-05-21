import styles from '../Footer/Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.empresaInfo}>
                <h3>WraithMoon Records Inc.</h3>
                <p>Tu tienda de discos desde 2026.</p>
                <p>Dirección: Av. Siempre Viva 123, Buenos Aires.</p>
            </div>

            <div className={styles.equipoContainer}>
                <h4>Nuestro Equipo</h4>
                <div className={styles.tarjetasEquipo}>
                    <div className={styles.tarjeta}>
                        <p><strong>Martin Segovia</strong><br/>Fundador</p>
                    </div>
                    <div className={styles.tarjeta}>
                        <p><strong>Ana Krapp</strong><br/>Ventas</p>
                    </div>
                    <div className={styles.tarjeta}>
                        <p><strong>Norberto Llopiz</strong><br/>Logistica</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
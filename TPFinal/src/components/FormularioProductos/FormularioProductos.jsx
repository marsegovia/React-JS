import styles from "../FormularioProductos/FormProd.module.css";

function FormularioProducto({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio, loading, modoEdicion }) {
    console.log(datosForm);

    return (

        <form className={styles.formStyle} onSubmit={manejarEnvio}>

            <h3>
                {modoEdicion ? "Editar Producto" : "Agregar Nuevo Producto"}
            </h3>       

            <div className={styles.cont}>
                <label>Banda </label>
                <input type="text" placeholder="Ej: " name="Banda" // Atributo clave para identificar el input
                    value={datosForm.Banda}
                    onChange={manejarCambio}/>
            </div>
            <div className={styles.cont}>
                <label>Album </label>
                <input type="text" placeholder="Ej: " name="Album" // Atributo clave para identificar el input
                    value={datosForm.Album}
                    onChange={manejarCambio}/>
            </div>        
            <div className={styles.cont}>
                <label>Formato </label>
                <input type="text" placeholder="LP" name="Formato" // Atributo clave
                    value={datosForm.Formato}
                    onChange={manejarCambio}/>
            </div>
            <div className={styles.cont}>
                <label>Precio </label>
                <input type="number" placeholder="$$$" name="Precio" // Atributo clave 
                    value={datosForm.Precio}
                    onChange={manejarCambio}/>
            </div>
            <div className={styles.cont}>
                <label>Stock </label>
                <input type="number" placeholder="Ej: 5" name="Stock"
                    value={datosForm.Stock}
                    onChange={manejarCambio}/>
            </div>
            <div className={styles.cont}>
                <label>Imagen </label>
                <input type="file" placeholder="https://..."
                    onChange={manejarCambioImagen}/>
            </div>
           <div className={styles.cont}>
             <button type="submit" disabled={loading}>
                {loading ? "Procesando..." : modoEdicion
                    ? "Actualizar Producto"
                    : "Guardar Producto"}
            </button>   
           </div>
        </form>
    );
}

export default FormularioProducto;
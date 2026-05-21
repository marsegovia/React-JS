import styles from "../FormularioProductos/FormProd.module.css";

function FormularioProducto({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio }) {
    console.log(datosForm);

    return (

        <form className={styles.formStyle} onSubmit={manejarEnvio}>

            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Banda:</label>
                <input
                    type="text"
                    placeholder="Ej: "
                    name="banda" // Atributo clave para identificar el input
                    value={datosForm.banda}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Album:</label>
                <input
                    type="text"
                    placeholder="Ej: "
                    name="album" // Atributo clave para identificar el input
                    value={datosForm.album}
                    onChange={manejarCambio}
                />
            </div>
            
            <div>
                <label></label>
                <input
                    type="text"
                    placeholder="LP"
                    name="formato" // Atributo clave
                    value={datosForm.formato}
                    onChange={manejarCambio}
                />
            </div>
    

            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    placeholder="https://..."
                    onChange={manejarCambioImagen}
                />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );
}

export default FormularioProducto;
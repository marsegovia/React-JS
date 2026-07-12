import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/config';
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import FormularioProducto from '../FormularioProductos/FormularioProductos';
import styles from '../GestionProductos/GestionProd.module.css';

const Gestion = () => {
    const [productos, setProductos] = useState([]);

    const estadoInicialForm = {
        Banda: "",
        Album: "",
        Formato: "",
        Precio: 0,
        Stock: 0,
        Imagen: ""
    };

    const [datosForm, setDatosForm] = useState(estadoInicialForm);

    const [imagenFile, setImagenFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [productoAEditar, setProductoAEditar] = useState(null);

    const modoEdicion = productoAEditar !== null;

    const manejarEditar = (producto) => {
        setProductoAEditar(producto);
        setDatosForm(producto);
    };

    const manejarCambio = (e) => {
        setDatosForm({
            ...datosForm,
            [e.target.name]: e.target.value
        });
    };

    const manejarCambioImagen = (e) => {
        setImagenFile(e.target.files[0]);
    };

    const cargarProductos = async () => {
        const productosRef = collection(db, "Vinilos Importados"); //Ajustar "productos" al nombre de tu colección
        const resp = await getDocs(productosRef);
        setProductos(resp.docs.map((doc) => ({
            ...doc.data(), idFirestore: doc.id
        }))
        );
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        // Validamos que el usuario haya seleccionado una imagen
        if (!imagenFile && !productoAEditar) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }

        setLoading(true);
        console.log("Loading...");

        let urlImagen = datosForm.Imagen;

        try {
            if (imagenFile) {
                console.log("Subiendo imagen a Imgbb...");

                 // --- Lógica para subir la imagen a Imgbb ---
                const apiKey = '8f3e35e52cfe3fef62bd28a2d3b3ee48'; // 🚨 ¡Reemplazá esto con tu clave!
                const formData = new FormData();
                formData.append('image', imagenFile);   

                const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });

                const datosImgbb = await respuestaImgbb.json();

                if (datosImgbb.success) {
                    console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                    urlImagen = datosImgbb.data.url; // Guardamos la URL de la imagen
                }
                else {
                    throw new Error('La subida de la imagen a Imgbb falló.');
                }
            }
            // Unimos la URL de la imagen con el resto de los datos del formulario
            const productoCompleto = {
                ...datosForm,
                // Agregamos la URL obtenida
                Imagen: urlImagen
            };

            // Por el momento hacemos un console.log
            console.log('Enviando producto a Firebase:', productoCompleto);

            const productosCollection = collection(db, "Vinilos Importados");

            if (productoAEditar) {

                const docRef = doc(db,"Vinilos Importados", productoAEditar.idFirestore);

                await updateDoc(docRef, productoCompleto);
                alert("Producto actualizado correctamente");

            } else {
                await addDoc(productosCollection, productoCompleto);
                alert("Producto guardado correctamente");
            }

            await cargarProductos(); // Recargamos la lista de productos después de agregar o actualizar
            setDatosForm(estadoInicialForm);
            setImagenFile(null);
            setProductoAEditar(null);
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
        finally {
            //Desactivar loading
            setLoading(false);
        }
    };


    const handleDelete = async (id) => {
        const confirmacion = window.confirm("¿Está seguro de que desea eliminar este producto ? ");
        if (confirmacion) {
            const docRef = doc(db, "Vinilos Importados", id);
            await deleteDoc(docRef);
            // Actualizamos el estado local para reflejar el cambio en la UI inmediatamente.
            setProductos(productos.filter(prod => prod.idFirestore !== id));
            alert("Producto eliminado.");
        }
    };

    return (
        <div className={styles.Gestion}>
            <h2>Gestión de Productos</h2>
            <hr />
            <FormularioProducto
                datosForm={datosForm}
                manejarCambio={manejarCambio}
                manejarEnvio={manejarEnvio}
                manejarCambioImagen={manejarCambioImagen}
                loading={loading}
                modoEdicion={modoEdicion}
            />
            <hr />
            <h3>Lista de Productos</h3>
            <div className={styles.listaProductos}>
                <ul className={styles.elementosLista}>
                    {productos.map((prod) => (
                    <li key={prod.id}> {prod.Banda} - {prod.Album} - ${prod.Precio} 
                    
                        <button  className={styles.Edit} onClick={() => manejarEditar(prod)} 
                                style={{ marginLeft: '10px' }}> Editar </button>
                        <button className={styles.Delete} onClick={() => handleDelete(prod.id)} 
                                style={{ marginLeft: '10px' }}> Eliminar </button>
                        <hr className={styles.barra}></hr>
                    </li>
                    ))}
                </ul>    
            </div>
        </div>
    );
};
export default Gestion;
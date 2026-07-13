import './App.css';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Carrito from './components/Cart/Carrito';
import ItemDetalle from './components/ProductosImportados/Detalle';
import Gestion from './components/GestionProductos/GestionProductos';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoutes';

function App() {
  return (
    <Routes>{/*envuelve a las demás para mostrar Header y Footer siempre */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer Mensaje={"Catalogo"} />} />
         <Route path="/gestion"
            element={
                <ProtectedRoute rolesPermitidos={["admin"]}>
                    <Gestion />
                </ProtectedRoute>
            }
        />
        <Route path="/productos/:id" element={<ItemDetalle />} />
        <Route path="/carrito" element={<Carrito/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/registro" element={<Registro />} /></Route>
    </Routes>);
}


export default App;
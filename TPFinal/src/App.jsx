import './App.css';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import FormularioContainer from './components/FormularioProductos/FormularioContainer';
import Productos from './components/Productos/Productos';
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Carrito from './components/Cart/Carrito';

function App() {
  return (
    <Routes>{/*envuelve a las demás para mostrar Header y Footer siempre */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer Mensaje={"Catalogo"} />} />
        <Route path="/nuevoProducto" element={<FormularioContainer />} />
        <Route path="/carrito" element={<Carrito/>} />
      </Route>
    </Routes>);
}


export default App;
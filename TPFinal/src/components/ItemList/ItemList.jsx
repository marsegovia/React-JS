import { Item } from "../Item/item";

export function ItemList({ productos }) {
            return (
                <div style={{ display: 'flex', gap: '20px' }}>
                    {productos.map(prod => (
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
            );
    }

export default ItemList;
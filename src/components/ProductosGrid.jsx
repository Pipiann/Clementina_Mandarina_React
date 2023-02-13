import productos from "../productosJson/productos.json";
import {ProductosCard} from "./ProductosCard"
import "./styles/producto.css"


export function ProductosGrid () {

    return(
        <ul className="productos_grid">
            {productos.map ((producto)=>(
                <ProductosCard key={producto.Id} producto={producto}/>
                
            ))}
        </ul>
    )
}
import productos from "../productos.json";
import {ProductosCard} from "./ProductosCard"


export function ProductosGrid () {

    return(
        <ul className="productos_grid">
            {productos.map ((producto)=>(
                <ProductosCard key={producto.Id} producto={producto}/>
                
            ))}
        </ul>
    )
}
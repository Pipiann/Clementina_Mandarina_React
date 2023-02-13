import "./styles/producto.css"



export function ProductosCard ({producto}){
    const imgUrl= "/imagenes_clemen" + producto.Foto

    return(
        <li className="producto_Card">
            <img className=" producto_Imagen" src={imgUrl} alt="producto.Producto" />
            <div className="producto_Info">
                {producto.Producto}  <h3>{producto.Nombre}</h3>
                
                <h2>${producto.Precio}</h2>
                <p> Talle: {producto.Talle}</p>
                <button>Comprar</button>
            </div>

        </li>

    )
}
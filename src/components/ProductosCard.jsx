export function ProductosCard (producto){

    return(
        <li className="producto_Card">
            {/* <img className=" producto_Imagen" src={imgUrl} alt="producto" /> */}
            <div>{producto.Producto}</div>

        </li>

    )
}
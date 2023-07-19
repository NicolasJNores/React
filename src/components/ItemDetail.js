import { Link } from "react-router-dom"

const ItemDetail = ( {item} ) => {
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo}/>
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="precio">Precio: ${item.precio}</p>
                <Link className="ver-mas" to={`/item/${item.id}`}>Ver más</Link>
            </div>
            
        </div>
    </div>
  )
}

export default ItemDetail
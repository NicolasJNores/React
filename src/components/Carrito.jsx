import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div>
        <h1>Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.titulo}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio unitario: ${prod.precio}</p>                    
                    <p>Total: ${prod.precio * prod.cantidad}</p>
                    <br/>
                </div>
            ))
        }

        {          
        
        carrito.lenght > 0 ?
            <>
                <h2>Precio Total: $ {precioTotal()}</h2>
                <button onClick={handleVaciar}> Vaciar </button>
            </> :
            <h2>El carrito esta vacio</h2>
        }
        
    </div>
  )
}

export default Carrito
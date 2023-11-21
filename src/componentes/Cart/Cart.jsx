import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <> 
            <div className="carrito-main"> 
            <div className="carrito-vacio"> 
            </div>
            <div className="carrito-vacio-contenido"> 
            <h2>No hay productos en el carrito. Por favor seleccione al menos un producto! </h2>
            <Link to="/"> <button> Ver Productos </button></Link>
            </div>
            </div>
           
            </>
        )
    }

    return (
        <div>
            {
                carrito.map(producto => <CartItem key={producto.id} {...producto} />)
            }
            <div className="carrito-total">
            <h3>Total <strong>${total} </strong>  </h3>
            <h3>Cantidad de productos seleccionados  <strong> {cantidadTotal} </strong> </h3>

            <div className="botones-carrito"> 
            <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <Link to="/checkout">Finalizar Compra</Link>  
            </div>

            </div>
           
        </div>
    )
}
export default Cart
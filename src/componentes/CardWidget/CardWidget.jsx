import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./CardWidget.css";

const CardWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/016/097/159/original/eps10-white-online-shopping-cart-icon-or-logo-isolated-on-black-background-trolley-with-home-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg";
    return (

        <Link to="/cart">
            <div className='carrito'>
                <img className='imagenCarrito' src={imgCarrito} alt="Carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </div>
        </Link>

    )
}

export default CardWidget;
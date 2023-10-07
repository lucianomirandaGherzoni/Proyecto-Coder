import React from 'react';
import "./CardWidget.css";
const CardWidget = () => {
    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/016/097/159/original/eps10-white-online-shopping-cart-icon-or-logo-isolated-on-black-background-trolley-with-home-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg";
    return (
         <div>
            <div className='carrito'>
             <img className='imagenCarrito' src={imgCarrito} alt="carrito" />
            <strong className='numeroCarrito'> 8 </strong>
            </div>
         </div>
    )
}

export default CardWidget;
import { useState, useContext } from 'react';
import  Contador  from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css';


const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) =>{
        setAgregarCantidad(cantidad);
        
        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad)
    }

    return (
        <div className='contenedor-detalles'>

            <div className='fondo-borroso'></div>
            <div className='card-detalles'> 

            <div className='contenedor-imagen'>
                <img src={img} alt={nombre} />
            </div>

            <div className='contenedor-descripcion'>
                
                <div className='titulo-descripcion'>
                <h2>{nombre}</h2>
                <h3> $ {precio}</h3>
                <p> {descripcion} </p>
                <h3>Stock {stock}</h3>    
                </div>
          

                {
                      agregarCantidad > 0 ? (<Link to="/cart" className='terminar-compra'>Terminar Compra</Link> ) : (<Contador inicial = {1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }
                <Link to="/" className='terminar-compra'><i class="bi bi-arrow-bar-left"></i> volver</Link>
            </div>
         
            </div>
 
            
        </div>
    )
}

export default ItemDetail
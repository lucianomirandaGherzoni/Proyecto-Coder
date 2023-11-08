import { useState } from 'react';
import  Contador  from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const manejadorCantidad = (cantidad) =>{
        setAgregarCantidad(cantidad);
        console.log("Productos agregados:" + cantidad);
    }

    return (
        <div className='contenedor-detalles'>

            <div className='contenedor-imagen'>
                <img src={img} alt={nombre} />
            </div>

            <div className='contenedor-descripcion'>
                <div className='titulo-descripcion'>
                <h2>{nombre}</h2>
                <h3>Precio: $ {precio}</h3>
                <h3>Id: {id}</h3>
                </div>
                
                <p>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam distinctio officia nobis, pariatur ipsam fugit corrupti deleniti sunt dolorem est voluptatem commodi hic non. Deleniti quae repellat architecto eveniet.
                Quasi vitae corrupti magni unde nisi maiores ipsa enim repudiandae sint debitis ratione repellat expedita, autem optio ipsam incidunt nesciunt aliquid. Corporis facilis sunt perspiciatis eos quod quibusdam blanditiis vel!
                </p>

                {
                      agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial = {1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }
            </div>
        </div>
    )
}

export default ItemDetail
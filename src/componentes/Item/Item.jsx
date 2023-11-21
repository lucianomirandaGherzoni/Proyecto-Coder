import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='productoCard'>
      <img src={img} alt={nombre} />
      <div className="producto-descripcion-card"> 
      <h3>{nombre}</h3>
      <p><strong>${precio}</strong></p>
      <p>stock {stock}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
      </div>
 
    </div>
  )
}

export default Item
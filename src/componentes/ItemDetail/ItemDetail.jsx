import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedor-detalles'>

            <div className='contenedor-imagen'>
                <img src={img} alt={nombre} />
            </div>

            <div className='contenedor-descripcion'>
                <h2>{nombre}</h2>
                <h3>Precio: $ {precio}</h3>
                <p>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam distinctio officia nobis, pariatur ipsam fugit corrupti deleniti sunt dolorem est voluptatem commodi hic non. Deleniti quae repellat architecto eveniet.
                Quasi vitae corrupti magni unde nisi maiores ipsa enim repudiandae sint debitis ratione repellat expedita, autem optio ipsam incidunt nesciunt aliquid. Corporis facilis sunt perspiciatis eos quod quibusdam blanditiis vel!
                </p>
            </div>
        </div>
    )
}

export default ItemDetail
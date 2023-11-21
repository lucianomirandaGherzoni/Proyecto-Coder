import { Link } from 'react-router-dom';
import './HeroCarrusel.css';
import BannerTitulo from '../BannerTitulo/BannerTitulo';

const HeroCarrusel = () => {
    const imgUno = "https://i.blogs.es/6abab8/restaurante-italiano/1366_2000.jpg";
    const imgDos = "https://images.ecestaticos.com/sAfFEXws75EoW-NarKV8nqOw_IM=/133x5:2145x1514/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F151%2F95c%2Fd04%2F15195cd04a532577d44078a189696ab2.jpg";
    const imgTres = "https://hazlovegan.com/wp-content/uploads/2021/03/sorrentinos-veganos-21-1024x683.jpg?ezimgfmt=ng:webp/ngcb1";

    return (
        <> 
            <div className='hero-content'>

                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators indicadores-carrusel ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner carruselAltura">
                     
                        <div className="carousel-item">
                            <img src={imgDos} className="d-block w-100 img" alt="Berlini Pastas Imagenes" />
                            <div className="carousel-caption2">
                               <img src="../img/logo.png" alt="logoBerlini"/>
                            </div>
                      
                        </div>
                        <div className="carousel-item active">
                            <img src={imgUno} className="d-block w-100 img" alt="Berlini Pastas Imagenes" />
                            <div className="carousel-caption">
                                <h2 className="descripcion-imagen"><strong>20%</strong> Descuento en todos los productos de la web.</h2>
                              <Link to='productos'><button> Ver Productos </button>  </Link>  
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={imgTres} className="d-block w-100 img" alt="Berlini Pastas Imagenes" />
                           <div className="carousel-caption2">
                               <img src="../img/logo.png" alt="logoBerlini"/>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
            <BannerTitulo titulo="Berlini Pastas" subtitulo="La calidad en cada plato, donde el sabor se hace presente siempre!" />

        </>
    )
}

export default HeroCarrusel
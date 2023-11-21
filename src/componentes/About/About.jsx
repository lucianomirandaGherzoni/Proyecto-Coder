import './About.css'
import BannerTitulo from '../BannerTitulo/BannerTitulo'

const About = () => {
  return (
    <div id='about'>
      <BannerTitulo titulo="Acerca de berlini" subtitulo="Nuestra Historia " />
      <div className='about'>

        <div className='about-imagenes'>
          <div><img src="https://comercioyjusticia.info/wp-content/uploads/2017/10/pastas-frescas.jpg" alt="Berlini Historia" /></div>
          <div><img src="https://www.clarin.com/2023/06/12/kHwKV7IFy_360x240__1.jpg" alt="Berlini Historia" /></div>
          <div><img src="https://www.cadena3.com/admin/playerswf/fotos/ARCHI_REL_675808.jpg" alt="Berlini Historia" /></div>
          <div>
            <img src="https://resizer.glanacion.com/resizer/v2/no-te-olvides-de-ponerle-un-poquito-de-sal-L7QKVASEC5FWNHF53ON4HYNXLQ.JPG?auth=0a4a21f888ade4dfd8097489d1f0c79df2342fc0deff58d1b8b6c9ff1194d986&width=420&height=280&quality=70&smart=true" alt="Berlini Historia"/>
          </div>



        </div>
        <div className='about-contenido'>
          <h3>Historia</h3>
          <p>En el año 2019, nacía un proyecto culinario que se convertiría en sinónimo de excelencia en el mundo de las pastas: "Berlini Pastas". Desde sus inicios, este proyecto fue más que una simple empresa; fue la cristalización de una verdadera pasión por la creación de platos de pasta extraordinarios.
            En el corazón de "Berlini Pastas" late la obsesión por la calidad y la innovación. Inspirados por la rica tradición italiana y con un toque de creatividad contemporánea, el equipo fundador cultivó una fascinación por la elaboración artesanal de tallarines, sorrentinos y salsas que despiertan los sentidos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
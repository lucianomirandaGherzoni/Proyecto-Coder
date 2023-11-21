import './Footer.css'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='redes'><h3>Redes</h3>
      <ul>
        <li><i className="bi bi-github"></i></li>
        <li><i className="bi bi-facebook"></i></li>
        <li><i className="bi bi-whatsapp"></i></li>
        <li><i className="bi bi-linkedin"></i></li>
      </ul>
      </div>
      <div className='contacto'>
        <h3>Contacto</h3>
        <ul>
          <li><i className="bi bi-phone"></i><strong>2944134510</strong></li>
          <li><i className="bi bi-envelope-at"></i><strong>lucianomiranda.dev@gmail.com</strong></li>
        </ul>
        </div>
      <div className='ubicacion'>
        <h3>Ubicacion</h3>
       <a href="https://maps.app.goo.gl/ifht2sdizNhkBHRk6" target='blank'> <i className="bi bi-geo-alt-fill"></i> Ir a Berlini </a>
      </div>
    </footer>
  )
}

export default Footer
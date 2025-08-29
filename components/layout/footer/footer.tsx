"use client"
import Link from 'next/link';
import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Navigation Section */}
          <div className="footer-column">
            <div className="footer-section">
              <div className="section-header">
                <h1 className="section-title">Navegación</h1>
              </div>
              <div className="navigation-wrapper">
                <ul className="navigation-list">
                  <li><Link href="/">Inicio</Link></li>
                  <li><Link href="/perfil">Perfil</Link></li>
                  <li><Link href="/localizacion">Localizaciones</Link></li>
                  <li><Link href="/sectores">Sectores</Link></li>
                  <li><Link href="/servicios">Servicios</Link></li>
                  <li><Link href="/proyectos">Proyectos</Link></li>
                  <li><Link href="/formacion">Formación</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Regions Section */}
          <div className="footer-column region-column">
            <div className="footer-section">
              <div className="section-header">
                <h1 className="section-title">Elige una región</h1>
              </div>
              <div className="navigation-wrapper">
                <ul className="navigation-list single-column">
                  <li><Link href="#">Metropolitana y Centro</Link></li>
                  <li><Link href="#">Sur</Link></li>
                  <li><Link href="#">Norte</Link></li>
                  <li><Link href="#">Oriente</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Social Media & Contact Section */}
          <div className="footer-column social-column">
            <div className="footer-section">
              <div className="section-header">
                <h1 className="section-title">Conecta con nosotros</h1>
              </div>
              <div className="social-wrapper">
                <div className="social-media">
                  <ul className="social-list">
                    <li>
                      <Link 
                        href="https://www.tiktok.com/@educacion.polarisx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-tiktok"></i>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://www.linkedin.com/company/polarisx-cc/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://www.facebook.com/polarisx.construction" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navigation-wrapper">
                  <ul className="navigation-list single-column">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            <p className="copyright">
              © <span>{currentYear}</span> PolarisX - Todos los derechos reservados
            </p>
          </div>
          <div className="legal-links-wrapper">
            <ul className="legal-links">
              <li><Link href="/condiciones-de-uso">Condiciones de Uso</Link></li>
              <li>|</li>
              <li><Link href="/politica-de-privacidad">Política de privacidad</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
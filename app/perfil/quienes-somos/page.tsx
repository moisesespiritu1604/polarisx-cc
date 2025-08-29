import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./quienes-somos.css";

export default function QuienesSomosPage() {
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Perfil"]} currentPage="Quiénes Somos" />
      {/* Sección principal del artículo */}
      <section className="about-section">
        <article>
          <div className="about-container">
            {/* Contenedor principal del texto */}
            <div className="main-content">
              {/* Contenido de texto principal */}
              <div className="text-content">
                <h1>Quiénes somos</h1>
                <p>
                  En PolarisX estamos comprometidos con la excelencia en la
                  gestión de proyectos. Trabajamos en diversos sectores y
                  entendemos los retos singulares de cada uno de ellos.
                </p>
                <p>
                  Nos ubicamos de manera estratégica para asistir a nuestros
                  clientes a nivel nacional, utilizando nuestra experiencia y
                  conocimiento, para proporcionar soluciones eficientes.
                </p>
                <p>
                  Nuestra filosofía es recupltar a los mejores profesionales,
                  aquellos que poseen un amplio conocimiento en áreas
                  específicas.
                </p>
                <p>
                  Nuestro equipo está compuesto por profesionales dedicados y
                  comprometidos con la calidad, detalle y sostenibilidad del
                  sector. Nos dedicamos a desarrollar nuestro talento,
                  esforzándonos por alcanzar los más altos estándares en todas
                  nuestras actividades.
                </p>
              </div>

              {/* Módulo de compartir en redes sociales */}
              <div className="share-module">
                <div className="share-title">
                  <h2>Compartir</h2>
                </div>
                <div className="social-media-container">
                  <ul className="social-media-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/polarisx-cc/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/polarisx.construction"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/polarisxc.construction/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Información lateral */}
            <div className="sidebar-info">
              {/* Contenedor de contacto */}
              <div className="contact-profile-container">
                <div className="contact-info-container">
                  <ul className="contact-info-list">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        informes@polarisx-cc.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://chat.whatsapp.com/K3BBoRQ8LBlBPjZ4dC3nXU"
                        style={{ color: "black" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-phone"></i>
                        +51 987 425 953
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Índice de navegación */}
              <div className="navigation-index">
                <div className="info-section-title">
                  <h2>Quiénes somos</h2>
                </div>
                <div className="navigation-body">
                  <ul>
                    <li>
                      <Link href="/perfil/quienes-somos/vision-valores">
                        Visión y Valores
                        <i className="fa-solid fa-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/perfil/quienes-somos/nuestra-historia">
                        Nuestra Historia
                        <i className="fa-solid fa-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <section id="featured-projects-section">
        <div className="featured-projects-container">
          <div className="section-header">
            <h2>Una selección de proyectos</h2>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <a href="/proyectos/carretera-longitudinal-de-la-sierra-tramo-2.html">
                <Image
                  src="/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2.webp"
                  alt="Carretera longitudinal de la Sierra - tramo 2"
                  width={400} // Especifica un ancho apropiado
                  height={300} // Especifica una altura apropiada
                  // layout="responsive" // Opcional: si necesitas diseño responsivo
                />
              </a>
              <a href="/proyectos/carretera-longitudinal-de-la-sierra-tramo-2.html">
                <div className="project-info-overlay">
                  <h4>Carretera longitudinal de la Sierra - Tramo 2</h4>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </a>
            </div>

            <div className="project-card">
              <a href="/proyectos/presa-sullana.html">
                <Image
                  src="/proyectos/proyecto-presa-sullana.webp"
                  alt="Presa Sullana"
                  width={400} // Especificar ancho
                  height={300} // Especificar altura
                  layout="responsive" // Opcional para diseño responsivo
                />
              </a>
              <a href="/proyectos/presa-sullana.html">
                <div className="project-info-overlay">
                  <h4>Presa Sullana</h4>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </a>
            </div>

            <div className="project-card">
              <a href="/proyectos/canal-miguel-checa.html">
                <Image
                  src="/proyectos/proyecto-canal-miguel-checa.webp"
                  alt="Canal Miguel Checa"
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </a>
              <a href="/proyectos/canal-miguel-checa.html">
                <div className="project-info-overlay">
                  <h4>Canal Miguel Checa</h4>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </a>
            </div>

            <div className="project-card">
              <a href="/proyectos/corredor-ferroviario-este.html">
                <Image
                  src="/proyectos/proyecto-corredor-ferroviario-este.webp"
                  alt="Corredor Ferroviario Este"
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </a>
              <a href="/proyectos/corredor-ferroviario-este.html">
                <div className="project-info-overlay">
                  <h4>Corredor Ferroviario Este</h4>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

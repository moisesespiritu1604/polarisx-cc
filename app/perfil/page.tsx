import React from "react";
import Breadcrumb from "../../components/layout/breadcrumb/breadcrumb";
import Image from "next/image";

import "./perfil.css";

export default function PerfilPage() {
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Perfil" />

      {/* Sección Hero */}
      <section id="hero-section-perfil">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Perfil</h1>
            <p className="hero-description">
              Ayudamos a que empresarios e inversores consigan el mejor valor de
              sus recursos mediante asesoramiento sin conflictos de interés.
              Nuestra imparcialidad es clave para ayudar a que los clientes
              lleven a cabo sus proyectos dentro del presupuesto, en plazo y con
              una calidad excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Principal - Información de la empresa */}
      <section id="company-profile-section">
        <article>
          <div className="profile-content-container">
            <div className="profile-main-content">
              <div className="company-description">
                <h1>PolarisX</h1>
                <p className="company-intro">
                  PolarisX está comprometida a ayudar a sus clientes a completar
                  sus proyectos dentro del plazo y del presupuesto, manteniendo
                  los más altos estándares de calidad. Nuestro equipo dinámico y
                  visionario se dedica a agregar el máximo valor a lo largo de
                  todo el ciclo de vida del proyecto.
                </p>
                <p>
                  Nuestros consultores proporcionan asesoramiento imparcial en
                  una amplia variedad de sectores, abordando cada proyecto con
                  una perspectiva fresca. Le ayudaremos a planificar, controlar,
                  supervisar e informar sobre todos los aspectos del proyecto,
                  minimizando los riesgos en todas sus fases.
                </p>

                <h3>Mejora de la certeza en los costos</h3>
                <p>
                  El costo es un factor fundamental para nuestros clientes. En
                  PolarisX, nos especializamos en la gestión de costos, y
                  nuestro equipo dedicado de planificación de costos trabaja
                  para garantizar el mejor valor en sus proyectos. Para asegurar
                  que nuestros servicios de planificación de costos sean útiles,
                  buscamos continuamente nuevas formas de mejorar nuestros
                  estándares, probándolos mediante rigurosos ejercicios de
                  benchmarking.
                </p>

                <h3>Experiencia local y regional</h3>
                <p>
                  Nuestro conocimiento del project management en el mercado
                  español y regional nos permite adaptarnos rápidamente a los
                  desafíos locales. Invertimos en la formación y el desarrollo
                  de nuestro equipo para asegurar que estamos preparados para
                  enfrentar cualquier reto en nuestro ámbito de acción.
                </p>

                <h3>Comprometidos con la calidad</h3>
                <p>
                  En PolarisX, apostamos por la calidad y el detalle. Creemos
                  que la clave para alcanzar altos estándares está en la
                  planificación. Con una visión clara y precisa de todo el
                  proceso de construcción durante la vida de un proyecto,
                  nuestros clientes pueden estar tranquilos, sabiendo que todos
                  los aspectos técnicos de su proyecto están en buenas manos.
                </p>
              </div>
            </div>

            <div className="profile-testimonial-sidebar">
              <blockquote>
                <i className="fa-solid fa-quote-left"></i>
                PolarisX ha demostrado ser un socio de confianza. Su compromiso,
                experiencia y enfoque profesional han sido cruciales para la
                finalización exitosa de nuestros complejos proyectos de
                construcción.
                <i className="fa-solid fa-quote-right"></i>
                <span></span>
              </blockquote>
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

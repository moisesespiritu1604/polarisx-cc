import React from "react";
import Breadcrumb from "../../components/layout/breadcrumb/breadcrumb";
import Image from "next/image";

import "./perfil.css";
import HeroBanner from "@/components/layout/hero/hero";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function PerfilPage() {
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Perfil" />

      {/* Sección Hero */}
      <HeroBanner
              sectionId="hero-section-perfil"
              backgroundImage="/perfil/fondo-perfil.webp"
              title="Perfil"
              description="Ayudamos a que empresarios e inversores consigan el mejor valor de
              sus recursos mediante asesoramiento sin conflictos de interés.
              Nuestra imparcialidad es clave para ayudar a que los clientes
              lleven a cabo sus proyectos dentro del presupuesto, en plazo y con
              una calidad excepcional."
            />


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
      <ProyectosSelectosPage />
    </>
  );
}

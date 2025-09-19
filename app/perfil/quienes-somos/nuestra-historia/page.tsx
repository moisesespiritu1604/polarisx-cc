import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import MainLayout from "@/components/layout/main/main";
import React from "react";
import Image from "next/image";


export default function VisionValoresPage() {
   // Configuración del índice de navegación
  const navigationIndex = {
    title: "Quiénes somos",
    items: [
      { 
        href: "/perfil/quienes-somos/vision-valores", 
        label: "Visión y Valores" 
      },
      { 
        href: "/perfil/quienes-somos/nuestra-historia", 
        label: "Nuestra Historia" 
      }
    ]
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb 
        parentPages={["Perfil", "Quiénes Somos"]} 
        currentPage="Nuestra Historia" 
      />
      
      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra Historia"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Colaboramos en proyectos destacados y nos asociamos con clientes de renombre, 
          atrayendo a los mejores talentos. Para lograrlo, es fundamental tener una 
          comprensión clara de nuestra identidad y de lo que representamos.
        </p>
        
        <p>Los tres valores principales que defendemos son la base de nuestro éxito:</p>
        
        <h3>Nos comprometemos con nuestros clientes y colaboradores</h3>
        <p>
          Nuestros clientes confían en nuestra capacidad para gestionar y ejecutar un 
          proyecto de calidad. Esto es posible porque confiamos plenamente en nuestros 
          colaboradores. Cuando las personas están seguras de que sus equipos cumplirán 
          con un alto estándar, pueden enfocarse mejor en sus propias responsabilidades. 
          En resumen, cada miembro cumple su función de manera integral, creando un 
          equipo sólido y confiable.
        </p>
        
        <h3>Somos innovadores y eficaces</h3>
        <p>
          No hay una solución universal para todos los desafíos que enfrentan nuestros 
          clientes. Nuestro servicio se fundamenta en la mezcla de experiencia y el 
          dominio de métodos innovadores que hacen la diferencia en los proyectos. Con 
          un enfoque empresarial y adaptable, estamos listos para explorar más allá de 
          lo convencional y hallar la solución ideal. Al trabajar en proyectos destacados, 
          podemos proporcionar a nuestros clientes soluciones que exceden sus expectativas.
        </p>
        
        <h3>Fusionamos profesionalidad con distinción</h3>
        <p>
          La autenticidad es clave para el éxito de un proyecto. Es tentador usar jerga 
          corporativa, pero es crucial recordar que interactuamos con personas. Ser 
          genuinos implica también reconocer que se trabaja mejor en un entorno de apoyo. 
          En PolarisX, integramos profesionalismo con personalidad de forma distintiva, 
          promoviendo un ambiente laboral agradable y eficiente.
        </p>
      </MainLayout>

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
                  width={400}
                  height={300}
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
                  width={400}
                  height={300}
                  layout="responsive"
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
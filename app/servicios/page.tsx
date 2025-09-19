import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./servicios.css";

export default function ServiciosPage() {
  const serviciosData = [
    {
      servicioId: 1,
      serviceName: "Consultoría",
      servicioImage: "/servicios/consultoria/consultoria.webp",
      servicioUrl: "/servicios/consultoria",
      description: "¿Deseas desbloquear y dar valor a tu negocio? Nuestro asesoramiento especializado te ayudará a conseguir subvenciones y ayudas fiscales, optimizar su inversión, operar de forma sostenible, gestionar riesgos o resolver disputas."
    },
    {
      servicioId: 2,
      serviceName: "Gestión de Costos y Administración de Contratos",
      servicioImage: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos-y-administracion-de-contratos.webp",
      servicioUrl: "/servicios/gestion-de-costos-y-administracion-de-contratos",
      description: "Permitenos que nos encarguemos de tus intereses comerciales. Controlamos los costes en todas las fases y eliminamos gastos innecesarios, todo ello permitiendo un avance fluido de las fases de diseño."
    },
    {
      servicioId: 3,
      serviceName: "Construcción",
      servicioImage: "/servicios/construccion/construccion.webp",
      servicioUrl: "/servicios/construccion",
      description: "Entendemos que lo que importa es la rentabilidad. Ayudamos a mantener sus propiedades en un estado seguro y sostenible, maximizando su potencial en cualquier parte del mundo."
    },
    {
      servicioId: 4,
      serviceName: "Gestión de propiedades y activos",
      servicioImage: "/servicios/gestion-de-propiedades-y-activos/gestion-de-propiedades-y-activos.webp",
      servicioUrl: "/servicios/gestion-de-propiedades-y-activos",
      description: "Nuestro equipo asegura un mantenimiento eficiente, reduce costos operativos y mejora la satisfacción de inquilinos, cumpliendo objetivos financieros y estratégicos de los propietarios."
    }
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Servicios" />
      
      {/* Sección Hero */}
      <section id="hero-section-servicios">
        <div className="hero-container-servicios">
          <div className="hero-content-servicios">
            <h1>Servicios</h1>
            <p className="hero-description-servicios">
              En PolarisX, ofrecemos asesoramiento imparcial y especializado a través de una amplia gama de servicios. Nos 
              dedicamos a salvaguardar los intereses de nuestros clientes en la complejidad de los proyectos de construcción e 
              inmobiliarios.
            </p>
            <p>
              Esto incluye soporte en la búsqueda de financiación, definición de planes de negocio, contratación del equipo técnico y de gestión, así como en 
              las fases de implantación, construcción y entrega de los proyectos.
            </p>
            <p>
              Nos enorgullece brindar el mejor servicio a nuestros clientes, aportando un valor añadido imparcial e inteligente a cada proyecto. Nuestra amplia 
              gama de servicios se divide en cuatro categorías principales. Utiliza los siguientes enlaces para obtener más información:
            </p>
          </div>
        </div>
      </section>

      {/* Título de la sección de servicios */}
      <section className="services-title-section">
        <div className="services-title-container">
          <h2>Los Servicios que ofrecemos</h2>
        </div>
      </section>

      {/* Sección de Servicios - Grid de servicios especializados */}
      <section className="services-showcase">
        <div className="services-main-container">
          <div className="services-grid-container">
            {serviciosData.map((servicio) => (
              <div key={servicio.servicioId} className="service-card">
                <div className="service-visual-wrapper">
                  <Link href={servicio.servicioUrl}>
                    <Image 
                      src={servicio.servicioImage} 
                      alt={`Servicio ${servicio.serviceName}`}
                      width={300}
                      height={200}
                      className="service-image"
                    />
                  </Link>
                  <Link href={servicio.servicioUrl}>
                    <div className="service-details-overlay">
                      <h4>{servicio.serviceName}</h4>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </Link>
                </div>
                <div className="service-description">
                  <p>{servicio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
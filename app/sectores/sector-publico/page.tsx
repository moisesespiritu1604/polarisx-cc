import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function SectorPublicoPage() {
  const highlightQuote = {
    text: "El sector público enfrenta limitaciones presupuestarias y debe optimizar recursos para mantener la calidad de los servicios. PolarisX apoya a sus clientes en el uso eficiente del dinero público, maximizando activos existentes y generando ahorros que fortalezcan los servicios esenciales.",
    author: null as string | null,
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Sector Público" />
      <HeroBanner
        sectionId="hero-section-sector-publico"
        backgroundImage="/sectores/sector-publico.webp"
        title="Sector Público"
        description="En PolarisX, asistimos a nuestros clientes en la optimización del gasto público. Al explorar métodos más eficientes para el uso de activos ya existentes, colaboramos en generar ahorros que pueden reinvertirse en el apoyo a servicios esenciales de alta calidad, así mismo desarrollamos proyectos en beneficio de la población local."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX, clientes del sector público acuden a nosotros para recibir asesoramiento en diversos proyectos. Aprecian nuestra experiencia especializada y nuestra comprensión práctica de las limitaciones presupuestarias y operativas que caracterizan a este sector.
        </p>

        <h3>Experiencia especializada</h3>
        <p>
          Nuestro equipo acumula más de 13 años de experiencia en rubro construcción, dentro de los cuales hemos desarrollado importantes proyectos para el sector público. Conocemos los elementos fundamentales para lograr la satisfacción del cliente y el retorno de la inversión, sin importar las especificaciones del proyecto.
        </p>

        <h3>Trabajando para crear grandes espacios públicos</h3>
        <p>
          Como empresa consultora y ejecutora, colaboramos de manera estrecha con los servidores públicos para la realización de los proyectos que benefician a la ciudadanía, cumpliendo las normas técnicas y legales que rigen en nuestro país, cuyo fin es garantizar las necesidades de la comunidad.
        </p>
      </MainLayout>
      
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
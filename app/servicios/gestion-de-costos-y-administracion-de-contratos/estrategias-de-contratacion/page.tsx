import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function EstrategiasDeContratacionPage() {
  const navigationIndex = {
    title: "Gestión de Costos y Administración de Contratos",
    items: [
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/benchmarking-y-auditorias",
        label: "Benchmarking y Auditorías",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/control-de-proyectos",
        label: "Control de Proyectos",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/estrategias-de-contratacion",
        label: "Estrategias de Contratación",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos",
        label: "Gestión de Costos",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-del-mantenimiento",
        label: "Gestión del Mantenimiento",
      },
    ],
  };
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={[
          "Servicios",
          "Gestión de Costos y Administración de Contratos",
        ]}
        currentPage="Estrategias de Contratación"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-costos-y-administracion-de-contratos"
        backgroundImage="/servicios/gestion-de-costos-y-administracion-de-contratos/estrategias-de-contratacion.webp"
        title="Estrategias de Contratación"
        description="Una metodología de adquisición adecuada es esencial para el éxito de un proyecto. Con acceso a la información más actualizada del mercado, nuestros asesores proporcionan a los clientes asesoramiento imparcial, ayudándoles a maximizar la rentabilidad de su inversión."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Los Servicios que ofrecemos"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En un entorno dinámico donde los factores externos y la incertidumbre
          generan riesgos y aumentos de costes, en PolarisX ayudamos a nuestros
          clientes a maximizar el rendimiento y minimizar los riesgos mediante
          estrategias de contratación efectivas. Con nuestro apoyo, logramos
          equilibrar coste, calidad y plazo, permitiendo que los clientes se
          centren en sus objetivos principales con la tranquilidad de que su
          proyecto será exitoso.
        </p>

        <h3>Gestión del riesgo para obtener el mejor valor</h3>
        <p>
          Gracias a nuestra inteligencia de mercado, apoyamos la toma de
          decisiones considerando factores políticos, económicos, sociales,
          tecnológicos, ecológicos y legislativos (PESTEL). Esto nos permite
          anticipar cambios en el mercado a corto y medio plazo, valorar riesgos
          comerciales y recomendar estrategias de contratación más rentables.
        </p>

        <h3>Soluciones prácticas</h3>
        <p>
          Nuestra independencia garantiza asesoramiento imparcial y soluciones
          prácticas. Con amplia experiencia en la creación de estrategias de
          contratación complejas, nos encargamos de la preparación,
          implementación y ejecución de estas, gestionando riesgos y mitigando
          presiones o sanciones financieras.
        </p>

        <h3>Experiencia personalizada</h3>
        <p>
          Seleccionar el método de contratación adecuado es clave para el éxito
          del proyecto. Por ello, trabajamos estrechamente con cada cliente para
          diseñar estrategias adaptadas a las particularidades de su proyecto.
        </p>
        <p>
          Ayudamos a reducir costes en entornos desafiantes, especialmente
          cuando la capacidad de la cadena de suministro es limitada o los
          precios de mano de obra y materiales se encuentran en aumento.
        </p>
        <p>
          Evaluamos integralmente los proyectos de construcción para identificar
          ahorros y oportunidades, incluyendo innovación, soluciones
          colaborativas, incentivos, prefabricación y modularización.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

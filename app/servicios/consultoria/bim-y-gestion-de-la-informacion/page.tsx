import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function BimGestionInformacionPage() {
  const navigationIndex = {
    title: "Consultoría",
    items: [
      {
        href: "/servicios/consultoria/bim-y-gestion-de-la-informacion",
        label: "BIM y Gestión de la Información",
      },
      {
        href: "/servicios/consultoria/estudios-de-preinversion",
        label: "Estudios de Preinversión",
      },
      {
        href: "/servicios/consultoria/gestion-de-proyectos-y-programas",
        label: "Gestión de Proyectos y Programas",
      },
      {
        href: "/servicios/consultoria/gestion-del-riesgo",
        label: "Gestión del Riesgo",
      },
      {
        href: "/servicios/consultoria/resolucion-de-conflictos-y-peritajes",
        label: "Resolución de Conflictos y Peritajes",
      },
      {
        href: "/servicios/consultoria/servicios-de-arquitectura-e-ingenieria",
        label: "Servicios de Arquitectura e Ingeniería",
      },
    ],
  };
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Servicios", "Consultoria"]}
        currentPage="BIM y Gestión de la Información"
      />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/bim-y-gestion-de-la-informacion.webp"
        title="BIM y Gestión de la Información"
        description="La implementación de BIM y una gestión eficaz de la información son esenciales para la planificación, diseño, construcción y mantenimiento de edificios e infraestructuras."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX, ofrecemos servicios especializados en BIM y gestión de la
          información para optimizar la creación, intercambio y uso de datos en
          proyectos de construcción. Con el uso de tecnologías y metodologías de
          vanguardia, aseguramos una gestión integral y coordinada de la
          información, mejorando la calidad y reduciendo los riesgos.
        </p>

        <h3>Modelado de Información de Construcción (BIM)</h3>
        <p>
          Desarrollamos modelos BIM precisos y detallados que facilitan la
          visualización y el análisis del proyecto en todas sus fases. Nuestros
          servicios incluyen la creación de modelos 3D, 4D (tiempo), 5D (coste)
          y 6D (sostenibilidad), brindando una comprensión completa del
          proyecto.
        </p>

        <h3>Coordinación y colaboración</h3>
        <p>
          Implementamos procesos que permiten a todos los stakeholders trabajar
          de manera integrada y eficiente. Gracias a plataformas de colaboración
          en la nube, aseguramos que la información esté siempre actualizada y
          accesible para todos los miembros del equipo.
        </p>

        <h3>Gestión de datos y documentación</h3>
        <p>
          Gestionamos de forma eficaz todos los datos y documentos del proyecto,
          garantizando su almacenamiento, organización y correcto intercambio.
          Creamos entornos de datos comunes (CDE) que facilitan el acceso y la
          trazabilidad de la información.
        </p>

        <h3>Simulación y análisis</h3>
        <p>
          Realizamos simulaciones y análisis avanzados con modelos BIM para
          anticipar el rendimiento del proyecto y apoyar la toma de decisiones.
          Esto incluye estudios de viabilidad, análisis energéticos,
          simulaciones estructurales y evaluaciones de sostenibilidad.
        </p>

        <h3>Implementación y soporte BIM</h3>
        <p>
          Acompañamos a las organizaciones en la adopción de BIM, ofreciendo
          capacitación a los equipos, desarrollo de estándares y protocolos, así
          como soporte continuo durante todas las fases del proyecto.
        </p>

        <h3>Mantenimiento y gestión de activos</h3>
        <p>
          Utilizamos BIM para la gestión de activos y el mantenimiento de
          edificios e infraestructuras, asegurando su eficiencia y prolongando
          su vida útil. También actualizamos y mantenemos los modelos BIM como
          parte del ciclo completo del activo.
        </p>

        <p>
          Nos comprometemos a ofrecer soluciones innovadoras y eficientes en BIM
          y gestión de la información, asegurando que cada proyecto se beneficie
          de una planificación precisa, colaboración efectiva y una gestión
          óptima de recursos y datos.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

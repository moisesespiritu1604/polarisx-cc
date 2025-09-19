import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function EstudiosDePreinversionPage() {
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
        currentPage="Estudios de Preinversión"
      />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/estudios-de-preinversion.webp"
        title="Estudios de Preinversión"
        description="Los estudios de preinversión son cruciales para evaluar la viabilidad y rentabilidad de proyectos antes de su ejecución. Ofrecemos un análisis exhaustivo que permite a nuestros clientes tomar decisiones informadas y estratégicas, minimizando riesgos y maximizando beneficios."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX, proporcionamos una amplia gama de servicios de estudios
          de preinversión, incluyendo evaluaciones de factibilidad, análisis de
          mercado y estudios técnicos. Nuestro enfoque integral garantiza que
          todos los aspectos del proyecto sean considerados y evaluados
          cuidadosamente desde el inicio.
        </p>

        <h3>Evaluación de factibilidad</h3>
        <p>
          Realizamos estudios detallados que analizan la viabilidad técnica,
          económica y financiera de los proyectos. Incluimos análisis de costos,
          proyecciones de ingresos y evaluaciones de rentabilidad para asegurar
          que cada iniciativa sea viable y sostenible en el tiempo.
        </p>

        <h3>Análisis de mercado</h3>
        <p>
          Examinamos las condiciones actuales del mercado, la competencia, la
          demanda y las tendencias del sector. Esta información es esencial para
          identificar oportunidades y riesgos, así como para diseñar estrategias
          de entrada efectivas.
        </p>

        <h3>Estudios técnicos</h3>
        <p>
          Abordamos todos los aspectos ingenieriles y arquitectónicos del
          proyecto, incluyendo evaluaciones de sitio, estudios de impacto
          ambiental y análisis de infraestructura y tecnología. Buscamos
          garantizar que cada proyecto sea técnicamente viable y cumpla con
          normativas y estándares aplicables.
        </p>

        <h3>Análisis de riesgos</h3>
        <p>
          Identificamos y evaluamos los riesgos potenciales asociados con el
          proyecto, desarrollando estrategias de mitigación efectivas. Nuestro
          enfoque proactivo permite anticipar desafíos y responder de manera
          oportuna.
        </p>

        <h3>Evaluación económica y financiera</h3>
        <p>
          Llevamos a cabo análisis de costo-beneficio, análisis de sensibilidad
          y proyecciones financieras para ayudar a nuestros clientes a
          comprender el impacto económico del proyecto y tomar decisiones
          informadas.
        </p>

        <h3>Planificación y estrategia</h3>
        <p>
          Desarrollamos planes estratégicos y de implementación que incluyen la
          definición de objetivos, la asignación de recursos y la identificación
          de hitos clave. Esto permite contar con una hoja de ruta clara y
          detallada hacia la ejecución exitosa.
        </p>

        <p>
          En PolarisX estamos comprometidos a proporcionar estudios de
          preinversión de alta calidad que permitan a nuestros clientes tomar
          decisiones bien fundamentadas. Con un enfoque detallado y
          multidisciplinario, aseguramos el éxito de cada proyecto desde sus
          primeras etapas.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

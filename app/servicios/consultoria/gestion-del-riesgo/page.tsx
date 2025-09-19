import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function GestionDelRiesgoPage() {
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
        currentPage="Gestión del Riesgo"
      />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/gestion-del-riesgo.webp"
        title="Gestión del Riesgo"
        description="Controlamos el riesgo desde la justificación comercial inicial hasta la venta del activo, resolviendo rápidamente imprevistos y asegurando que el dinero de los inversores se gaste sensatamente."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}

        <p className="intro-text">
          En PolarisX entendemos que los bancos y entidades de financiación solo
          respaldan un desarrollo cuando cuentan con información completa y
          confiable. Ofrecemos asesoramiento experto e independiente que brinda
          seguridad a los financiadores, asegurando que cada proyecto sea
          merecedor de inversión y cuente con procesos sólidos.
        </p>

        <h3>Asesoramiento especializado</h3>
        <p>
          Nuestro acompañamiento proporciona información precisa y oportuna,
          incluyendo evaluaciones claras de riesgos y estrategias de mitigación.
          Ayudamos a nuestros clientes a tomar decisiones fundamentadas,
          detectamos posibles problemas de forma temprana y ofrecemos soluciones
          prácticas para resolverlos.
        </p>

        <h3>El respaldo de la experiencia</h3>
        <p>
          Promotores y entidades financieras confían en nuestro equipo, que
          cuenta con más de 20 años de experiencia y un conocimiento único del
          mercado. Nos apoyamos en una base de datos extensa para garantizar que
          nuestros clientes obtengan una visión completa y precisa de cada
          proyecto.
        </p>
        <p>
          Además, somos un proveedor autorizado de servicios de project
          monitoring y contamos con acuerdos marco con inversores de renombre,
          lo que facilita la colaboración y la confianza en cada proceso.
        </p>

        <h3>Due diligence completa</h3>
        <p>
          Durante la fase inicial, realizamos un análisis exhaustivo del
          proyecto para apoyar la evaluación y mitigación del riesgo. Una vez en
          fase de construcción, supervisamos el perfil de riesgo hasta la
          entrega, informando sobre avances, solicitudes de crédito y posibles
          incidencias, sin interferir en las prioridades constructivas.
        </p>
        <p>
          Tras la finalización del desarrollo, ofrecemos servicios de
          operational monitoring para evaluar el rendimiento y mantenimiento de
          los activos. También brindamos asesoramiento en gestión de
          instalaciones y costos durante todo el ciclo de vida, incluyendo
          proyectos de financiación conjunta pública y privada.
        </p>
        <p>
          En procesos de refinanciación, venta o adquisición de propiedades,
          elaboramos informes de auditoría y recomendaciones detalladas que
          respaldan decisiones estratégicas.
        </p>

        <h3>Asistencia en situaciones de emergencia</h3>
        <p>
          Si un contratista incurre en impagos o se declara insolvente,
          intervenimos de inmediato para analizar el estado de los trabajos,
          identificar las tareas pendientes y estimar los costos necesarios para
          completar el proyecto. Nuestro objetivo es ayudar a resolver el
          problema con rapidez y garantizar la continuidad del desarrollo.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

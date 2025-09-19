import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function ResolucionDeConflictosPeritajesPage() {
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
        currentPage="Resolución de Conflictos y Peritajes"
      />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/resolucion-de-conflictos-y-peritajes.webp"
        title="Resolución de Conflictos y Peritajes"
        description="Resolver controversias rápida y eficientemente evita retrasos costosos y daños en la reputación. Como asesores independientes, somos una fuente excelente del asesoramiento imparcial requerido para resolver controversias. También contamos con un equipo de testigos expertos con experiencia que se ocupan de los temas relacionados con los contrainterrogatorios."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ayudamos a nuestros clientes a resolver los conflictos que
          generan retrasos, interrupciones o riesgos reputacionales en todo el
          Perú. Nuestro equipo experimentado actúa con rapidez para prevenir
          resoluciones largas y costosas, proporcionando asesoramiento
          independiente y especializado.
        </p>

        <h3>Asesoramiento independiente en conflictos</h3>
        <p>
          Elaboramos evaluaciones imparciales que ofrecen un análisis objetivo
          del problema y una guía clara para resolverlo. Estamos especializados
          en conflictos relacionados con retrasos, incrementos de costes,
          riesgos financieros y métodos de contratación, lo que permite a
          nuestros clientes tomar decisiones fundamentadas.
        </p>
        <p>
          Determinamos los probables daños, evaluamos reclamaciones y analizamos
          el potencial de acuerdos de conciliación rápida. En caso de
          agravamiento del conflicto, contamos con la experiencia para
          testificar en procesos judiciales y arbitrajes, ya sea como parte
          interesada o como peritos imparciales.
        </p>

        <h3>Análisis pericial de retrasos</h3>
        <p>
          Nuestros peritos cuentan con formación en los principales softwares de
          project management como Primavera, Asta PowerProject y MS Project, lo
          que les permite analizar programaciones complejas, tratar retrasos e
          interrupciones y evaluar solicitudes de ampliación de plazos.
        </p>
        <p>
          Aplicamos diversas técnicas de análisis de reclamaciones por retrasos,
          entre ellas:
        </p>
        <ul>
          <li>Planificación frente a situación real</li>
          <li>Impacto de acuerdo con la planificación</li>
          <li>Collapsed as-built</li>
          <li>Impacto en los plazos</li>
          <li>Window analyses</li>
        </ul>

        <h3>Análisis de costes / Quantum</h3>
        <p>
          Con amplia experiencia en gestión financiera de proyectos, nuestros
          expertos adaptan sus conocimientos a la resolución de controversias
          relacionadas con cuestiones económicas. Evaluamos costes de
          prolongación, pérdidas y gastos, oportunidades de beneficio no
          realizadas, sobrecostos, contabilidad incorrecta e irregularidades
          financieras.
        </p>

        <h3>Servicios de asesoramiento de contratos</h3>
        <p>
          Contamos con asesores especializados en Quantity Surveying y en el
          ámbito legal, capacitados para identificar y prevenir riesgos
          contractuales. Apoyamos en la gestión de cambios y en la creación de
          contratos y acuerdos vinculantes.
        </p>
        <p>
          También proporcionamos asesoría en project management (diseño),
          construction monitoring, inspecciones, certificaciones y gestión de la
          cadena de suministro.
        </p>

        <h3>Servicios de peritaje</h3>
        <p>
          Nuestro equipo elabora informes detallados e independientes para
          litigios y arbitrajes, y testifica en interrogatorios. Contamos con
          experiencia probada como expertos de conformidad con la Sección 35 del
          Código CPR (Civil Procedure Rules).
        </p>
        <p>Los peritos de PolarisX están especializados en:</p>
        <ul>
          <li>Retrasos e interrupciones</li>
          <li>Quantum</li>
          <li>Negligencia profesional</li>
          <li>Evaluación y compensación de pérdidas</li>
          <li>Estudios de defectos de construcción</li>
          <li>Asesoramiento especializado en formatos de contratación NEC</li>
        </ul>

        <h3>Caso práctico</h3>
        <p>
          Actuamos como peritos para un contratista de obra civil en un proyecto
          de movimiento de tierras para líneas ferroviarias en Perú.
          Contribuimos a lograr un acuerdo multimillonario que evitó los
          elevados costes de arbitraje, brindando un resultado favorable para
          todas las partes.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

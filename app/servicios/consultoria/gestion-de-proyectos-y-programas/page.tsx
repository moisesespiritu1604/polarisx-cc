import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function GestionDeProyectosYProgramasPage() {
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
      <Breadcrumb parentPages={["Servicios", "Consultoria"]} currentPage="Gestión de Proyectos y Programas" />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/gestion-de-proyectos-y-programas.webp"
        title="Gestión de Proyectos y Programas"
        description="El acceso a datos cuantificables y mensurables mejora la toma de decisiones. Nuestro sistema de análisis comparativos y base de datos ayudan a gestionar riesgos, controlar costes y tomar decisiones rápidas."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX, nos especializamos en la gestión integral de proyectos y
          programas, ofreciendo soluciones personalizadas para asegurar el éxito
          de cada iniciativa. Nuestro enfoque combina metodologías ágiles y
          tradicionales, adaptadas a las necesidades específicas de cada
          cliente.
        </p>

        <h3>Planificación estratégica</h3>
        <p>
          Desarrollamos planes estratégicos detallados que incluyen la
          definición de objetivos, la asignación de recursos y la identificación
          de riesgos. Nuestra experiencia nos permite anticipar desafíos y
          establecer las bases para una ejecución exitosa.
        </p>

        <h3>Gestión de recursos</h3>
        <p>
          Optimizamos el uso de recursos humanos, financieros y tecnológicos
          para maximizar la eficiencia y la eficacia del proyecto. Nuestro
          sistema de seguimiento y control asegura que los recursos se utilicen
          de manera óptima en todas las fases del proyecto.
        </p>

        <h3>Control de calidad</h3>
        <p>
          Implementamos estrictos procedimientos de control de calidad para
          garantizar que todos los entregables cumplan con los estándares
          establecidos. Realizamos auditorías regulares y evaluaciones de
          desempeño para mantener la calidad en cada etapa del proyecto.
        </p>

        <h3>Evaluación y mitigación de riesgos</h3>
        <p>
          Identificamos y evaluamos los riesgos potenciales desde el inicio del
          proyecto y desarrollamos estrategias de mitigación efectivas. Nuestro
          enfoque proactivo nos permite manejar los riesgos de manera eficiente
          y minimizar su impacto en el proyecto.
        </p>

        <h3>Comunicación y reportes</h3>
        <p>
          Mantenemos una comunicación constante y transparente con todas las
          partes interesadas. Proporcionamos informes periódicos y detallados
          sobre el progreso del proyecto, asegurando que todos estén alineados y
          bien informados.
        </p>

        <h3>Capacitación y desarrollo</h3>
        <p>
          Ofrecemos programas de capacitación y desarrollo para equipos de
          proyecto, fortaleciendo sus habilidades y conocimientos. Nuestro
          objetivo es empoderar a los equipos para que puedan gestionar
          proyectos de manera autónoma y eficiente en el futuro.
        </p>

        <h3>Mejora continua</h3>
        <p>
          Fomentamos una cultura de mejora continua, utilizando el feedback y
          las lecciones aprendidas para optimizar nuestros procesos y
          metodologías. Nuestro compromiso es siempre buscar formas de mejorar y
          agregar valor a los proyectos de nuestros clientes.
        </p>

        <p>
          En PolarisX, creemos que una gestión de proyectos y programas efectiva
          es clave para el éxito de cualquier iniciativa. Con nuestro enfoque
          personalizado y nuestra experiencia comprobada, estamos aquí para
          ayudar a nuestros clientes a alcanzar sus objetivos y superar sus
          expectativas.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

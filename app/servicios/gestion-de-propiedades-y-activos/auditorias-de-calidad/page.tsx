import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function AuditoriasDeCalidadPage() {
  const navigationIndex = {
    title: "Gestión de Propiedades y Activos",
    items: [
      {
        href: "/servicios/gestion-de-propiedades-y-activos/auditorias-de-calidad",
        label: "Auditorías de Calidad",
      },
      {
        href: "/servicios/gestion-de-propiedades-y-activos/gestion-de-operaciones-e-instalaciones",
        label: "Gestión de Operaciones e Instalaciones",
      },
      {
        href: "/servicios/gestion-de-propiedades-y-activos/seguridad-y-salud",
        label: "Seguridad y Salud",
      },
    ],
  };
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Servicios", "Gestión de Propiedades y Activos"]}
        currentPage="Auditorías de Calidad"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-propiedades-y-activos"
        backgroundImage="/servicios/gestion-de-propiedades-y-activos/auditorias-de-calidad.webp"
        title="Auditorías de Calidad"
        description="Las auditorías de calidad son esenciales para garantizar que los procesos y productos cumplan con los estándares y normativas establecidos. Nos especializamos en realizar auditorías detalladas y objetivas que identifican áreas de mejora y aseguran la excelencia en todas las operaciones."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos una amplia gama de servicios de auditoría de
          calidad diseñados para evaluar y mejorar la conformidad de procesos y
          productos. Nuestro enfoque integral asegura que cada auditoría se
          realice con precisión y profesionalismo, aportando información valiosa
          para la mejora continua.
        </p>

        <h3>Auditorías de procesos</h3>
        <p>
          Evaluamos la eficacia y eficiencia de los procedimientos operativos.
          Nuestro equipo analiza cada etapa, identifica áreas de mejora y
          recomienda acciones correctivas para optimizar el rendimiento.
        </p>

        <h3>Auditorías de productos</h3>
        <p>
          Verificamos que los productos cumplan con las especificaciones y
          estándares de calidad. Realizamos inspecciones y pruebas para detectar
          desviaciones y proponemos soluciones que garanticen la conformidad.
        </p>

        <h3>Auditorías de cumplimiento</h3>
        <p>
          Revisamos documentación, procedimientos y prácticas para asegurar que
          las operaciones cumplan con normativas y regulaciones vigentes, así
          como con los estándares aplicables de la industria.
        </p>

        <h3>Auditorías internas</h3>
        <p>
          Evaluamos la efectividad del sistema de gestión de calidad de la
          organización. Identificamos fortalezas y debilidades y ofrecemos
          recomendaciones que aumentan la eficiencia y efectividad de los
          procesos internos.
        </p>

        <h3>Auditorías de proveedores</h3>
        <p>
          Inspeccionamos y evaluamos operaciones de proveedores para garantizar
          que cumplan con los estándares de calidad requeridos. Aseguramos que
          sus productos y servicios se alineen con las expectativas de nuestros
          clientes.
        </p>

        <h3>Consultoría y asesoramiento</h3>
        <p>
          Ayudamos a mejorar sistemas de gestión de calidad mediante análisis
          detallados, desarrollo de estrategias de mejora y apoyo en la
          implementación de prácticas eficaces.
        </p>

        <h3>Capacitación en calidad</h3>
        <p>
          Diseñamos programas de formación para empleados y directivos enfocados
          en la comprensión y aplicación de estándares de calidad. Nuestro
          objetivo es reforzar las competencias necesarias para mantener altos
          niveles de calidad dentro de la organización.
        </p>

        <p>
          En PolarisX estamos comprometidos con auditorías de calidad que
          aseguren el cumplimiento y la excelencia en todos los aspectos de las
          operaciones. Con un enfoque detallado y profesional, ayudamos a
          nuestros clientes a identificar oportunidades de mejora y a
          implementar soluciones efectivas para mantener y elevar la calidad.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

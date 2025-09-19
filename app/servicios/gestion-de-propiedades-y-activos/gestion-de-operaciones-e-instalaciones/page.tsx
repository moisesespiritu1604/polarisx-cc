import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function GestionDeOperacionesEInstalacionesPage() {
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
        currentPage="Gestión de Operaciones e Instalaciones"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-propiedades-y-activos"
        backgroundImage="/servicios/gestion-de-propiedades-y-activos/gestion-de-operaciones-e-instalaciones.webp"
        title="Gestión de Operaciones e Instalaciones"
        description="La gestión eficiente de operaciones e instalaciones es esencial para garantizar el funcionamiento óptimo y la rentabilidad de cualquier organización. Nos especializamos en ofrecer soluciones integrales que mejoran la eficiencia operativa y aseguran el mantenimiento adecuado de las instalaciones."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos una gama completa de servicios de gestión de
          operaciones e instalaciones, diseñados para satisfacer las necesidades
          específicas de cada cliente. Nuestro enfoque integral abarca la
          administración, mantenimiento y optimización de instalaciones,
          asegurando una operación eficiente, rentable y sostenible.
        </p>

        <h3>Administración de operaciones</h3>
        <p>
          Gestionamos procesos, optimizamos recursos y supervisamos actividades
          diarias para garantizar un funcionamiento sin contratiempos.
          Coordinamos todos los aspectos operativos con el fin de lograr
          eficiencia y continuidad.
        </p>

        <h3>Mantenimiento de instalaciones</h3>
        <p>
          Nos encargamos del mantenimiento preventivo y correctivo para asegurar
          el buen funcionamiento y prolongar la vida útil de las instalaciones.
          Implementamos programas que incluyen inspecciones regulares y
          reparaciones oportunas.
        </p>

        <h3>Optimización de procesos</h3>
        <p>
          Evaluamos los procesos actuales e identificamos áreas de mejora para
          implementar prácticas que maximicen la eficiencia y reduzcan los
          costes operativos. Nuestro objetivo es crear operaciones más ágiles y
          rentables.
        </p>

        <h3>Gestión energética</h3>
        <p>
          Realizamos auditorías de consumo energético, implementamos medidas de
          ahorro y optimizamos el uso de energía en las instalaciones. Con ello
          reducimos los costes y mejoramos la sostenibilidad de las operaciones.
        </p>

        <h3>Consultoría y asesoramiento</h3>
        <p>
          Brindamos análisis de eficiencia, estudios de viabilidad y asesoría en
          la implementación de mejoras operativas. Nuestro enfoque permite a los
          clientes tomar decisiones informadas y estratégicas.
        </p>

        <h3>Gestión de proyectos de mejora</h3>
        <p>
          Coordinamos proyectos de renovación y mejora de instalaciones, desde
          la planificación inicial hasta la ejecución final, asegurando
          cumplimiento en plazos y presupuestos.
        </p>

        <h3>Servicios de auditoría</h3>
        <p>
          Evaluamos el rendimiento y el cumplimiento normativo de operaciones e
          instalaciones mediante metodologías reconocidas y datos actualizados.
          Nuestras auditorías proporcionan información precisa para la toma de
          decisiones.
        </p>

        <p>
          En PolarisX estamos comprometidos a ofrecer soluciones de gestión de
          operaciones e instalaciones que maximicen la eficiencia y el
          rendimiento. Con un enfoque integral y dedicación a la excelencia,
          aseguramos una gestión rentable que cumple y supera las expectativas
          de nuestros clientes.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

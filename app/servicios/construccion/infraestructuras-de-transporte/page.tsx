import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function TransporteInfraestructurasPage() {
  const navigationIndex = {
    title: "Construcción",
    items: [
      {
        href: "/servicios/construccion/edificacion-civil",
        label: "Edificación Civil",
      },
      {
        href: "/servicios/construccion/infraestructuras-de-transporte",
        label: "Infraestructuras de Transporte",
      },
      {
        href: "/servicios/construccion/obras-hidraulicas",
        label: "Obras Hidráulicas",
      },
    ],
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Servicios", "Construcción"]}
        currentPage="Infraestructuras de Transporte"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-propiedades-y-activos"
        backgroundImage="/servicios/construccion/infraestructuras-de-transporte.webp"
        title="Infraestructuras de Transporte"
        description="El desarrollo de infraestructuras de transporte eficientes y sostenibles es fundamental para la movilidad y el progreso de las sociedades. Nos dedicamos a diseñar y construir soluciones de transporte que mejoren la conectividad y promuevan el desarrollo económico y social."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos una gama completa de servicios para
          infraestructuras de transporte, abarcando desde la planificación y
          diseño hasta la construcción y el mantenimiento. Nuestro objetivo es
          crear sistemas de transporte seguros, eficientes y sostenibles,
          adaptados a las necesidades de cada comunidad.
        </p>

        <h3>Planificación y diseño</h3>
        <p>
          Elaboramos planes y diseños detallados para proyectos de transporte
          como carreteras, ferrocarriles, puentes y aeropuertos. Integramos
          tecnologías avanzadas y prácticas sostenibles para optimizar el
          rendimiento y la durabilidad de cada infraestructura.
        </p>

        <h3>Construcción de infraestructuras de transporte</h3>
        <p>
          Ejecutamos la construcción de proyectos con técnicas y materiales de
          vanguardia. Nuestro equipo asegura el cumplimiento de los más altos
          estándares de calidad y la entrega dentro de los plazos establecidos.
        </p>

        <h3>Gestión de proyectos</h3>
        <p>
          Coordinamos todas las fases, desde la planificación inicial hasta la
          entrega final. Nos encargamos de la gestión de recursos, la
          supervisión de obras y la comunicación con todas las partes
          interesadas para garantizar eficiencia y efectividad en la ejecución.
        </p>

        <h3>Ingeniería de transporte</h3>
        <p>
          Diseñamos soluciones que mejoran la seguridad y la eficiencia de los
          sistemas de transporte. Realizamos estudios y análisis técnicos para
          optimizar el flujo de tráfico y minimizar el impacto ambiental.
        </p>

        <h3>Consultoría en sostenibilidad</h3>
        <p>
          Asesoramos en la incorporación de prácticas sostenibles en el diseño y
          construcción de infraestructuras, fomentando el uso de tecnologías
          limpias y energías renovables para reducir el impacto ambiental.
        </p>

        <h3>Renovación y mantenimiento</h3>
        <p>
          Ofrecemos servicios de renovación y modernización para
          infraestructuras existentes, prolongando su vida útil y adaptándolas a
          las necesidades actuales y futuras. Garantizamos eficiencia y mejora
          continua.
        </p>

        <h3>Supervisión de obras</h3>
        <p>
          Nuestro equipo supervisa todas las fases de la construcción para
          asegurar el cumplimiento de especificaciones y normativas vigentes.
          Monitorizamos cada etapa, resolviendo incidencias y garantizando la
          calidad final del proyecto.
        </p>

        <p>
          En PolarisX estamos comprometidos con soluciones de transporte
          innovadoras y sostenibles que mejoran la movilidad y la calidad de
          vida de las personas. Con un enfoque integral y dedicación a la
          excelencia, aseguramos el éxito y la responsabilidad en cada proyecto
          de infraestructura de transporte.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

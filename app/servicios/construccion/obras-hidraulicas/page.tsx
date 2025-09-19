import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function ObrasHidraulicasPage() {
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
        currentPage="Obras Hidráulicas"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-propiedades-y-activos"
        backgroundImage="/servicios/construccion/obras-hidraulicas.webp"
        title="Obras Hidráulicas"
        description="El diseño y construcción de obras hidráulicas es crucial para la gestión eficiente y sostenible de los recursos hídricos. Nos especializamos en desarrollar soluciones innovadoras que optimizan el uso del agua y aseguran su disponibilidad para las generaciones futuras."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos una amplia gama de servicios en el ámbito de las
          obras hidráulicas, desde la planificación y el diseño hasta la
          construcción y el mantenimiento. Nuestro objetivo es brindar
          soluciones integrales para la gestión del agua en diversas
          aplicaciones, garantizando sostenibilidad y eficiencia.
        </p>

        <h3>Planificación y diseño</h3>
        <p>
          Elaboramos planes y diseños detallados para proyectos hidráulicos como
          presas, canales, sistemas de abastecimiento y saneamiento, plantas de
          tratamiento de aguas y estructuras de control de inundaciones.
          Aplicamos tecnologías avanzadas para asegurar la eficiencia y
          durabilidad de cada solución.
        </p>

        <h3>Construcción de obras hidráulicas</h3>
        <p>
          Ejecutamos la construcción de diversas infraestructuras hidráulicas
          bajo los más altos estándares de calidad. Nuestro equipo se asegura de
          que cada proyecto se complete de manera eficiente, dentro del
          presupuesto y del plazo acordados.
        </p>

        <h3>Gestión de proyectos</h3>
        <p>
          Coordinamos todas las fases del proyecto, desde la planificación
          inicial hasta la entrega final. Gestionamos recursos, supervisamos
          obras y mantenemos una comunicación fluida con las partes interesadas
          para garantizar una ejecución exitosa.
        </p>

        <h3>Ingeniería hidráulica</h3>
        <p>
          Nuestro equipo de ingenieros desarrolla soluciones técnicas
          especializadas en la gestión del agua. Diseñamos sistemas de drenaje,
          control de erosión y restauración de cauces, utilizando análisis y
          modelaciones avanzadas que garantizan la efectividad de cada proyecto.
        </p>

        <h3>Consultoría en sostenibilidad</h3>
        <p>
          Asesoramos en la incorporación de prácticas sostenibles en proyectos
          hidráulicos, optimizando el uso del agua, reduciendo el impacto
          ambiental e impulsando tecnologías renovables y eficientes.
        </p>

        <h3>Mantenimiento y rehabilitación</h3>
        <p>
          Ofrecemos servicios de mantenimiento y modernización de
          infraestructuras hidráulicas existentes, asegurando su funcionalidad y
          prolongando su vida útil. Realizamos mejoras y adaptaciones para
          cumplir con normativas y estándares actuales.
        </p>

        <h3>Supervisión de obras</h3>
        <p>
          Nuestro equipo supervisa todas las fases de la construcción de obras
          hidráulicas, garantizando el cumplimiento de especificaciones y
          normativas. Nos encargamos de resolver cualquier incidencia y de
          mantener una comunicación constante con todas las partes involucradas.
        </p>

        <p>
          En PolarisX estamos comprometidos con soluciones hidráulicas que
          cumplen con los requisitos técnicos y normativos, promoviendo al mismo
          tiempo la sostenibilidad y eficiencia en la gestión de los recursos
          hídricos. Nuestro enfoque integral y nuestra dedicación a la
          excelencia aseguran el éxito de cada proyecto.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

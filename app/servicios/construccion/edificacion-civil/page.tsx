import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function EdificacionCivilPage() {
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
        currentPage="Edificación Civil"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-propiedades-y-activos"
        backgroundImage="/servicios/construccion/edificacion-civil.webp"
        title="Edificación Civil"
        description="En el ámbito de la edificación civil, nuestra misión es transformar ideas en estructuras tangibles que mejoren la vida de las personas. Combinamos innovación, calidad y sostenibilidad para crear proyectos que perduren en el tiempo y satisfagan las necesidades de las comunidades."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos una gama completa de servicios en el sector de
          la edificación civil, desde el diseño y la planificación hasta la
          construcción y el mantenimiento de infraestructuras. Nuestro enfoque
          integral asegura que cada proyecto se lleve a cabo con los más altos
          estándares de calidad, eficiencia y sostenibilidad.
        </p>

        <h3>Diseño y planificación</h3>
        <p>
          Desarrollamos diseños arquitectónicos y planes de construcción
          adaptados a las necesidades específicas de cada proyecto. Trabajamos
          en estrecha colaboración con nuestros clientes para crear soluciones
          innovadoras y funcionales.
        </p>

        <h3>Construcción de infraestructuras</h3>
        <p>
          Ejecutamos la construcción de edificios residenciales, comerciales e
          industriales, utilizando técnicas avanzadas y materiales de vanguardia
          que aseguran la durabilidad y sostenibilidad de cada obra.
        </p>

        <h3>Gestión de proyectos</h3>
        <p>
          Ofrecemos servicios completos de gestión de proyectos, desde la
          planificación inicial hasta la entrega final. Coordinamos recursos,
          supervisamos obras y gestionamos a todos los stakeholders para
          garantizar cumplimiento en tiempo, coste y calidad.
        </p>

        <h3>Ingeniería estructural</h3>
        <p>
          Nuestro equipo de ingenieros estructurales desarrolla soluciones
          seguras y eficientes. Realizamos análisis y diseños detallados que
          garantizan la estabilidad y seguridad de cada infraestructura.
        </p>

        <h3>Consultoría en sostenibilidad</h3>
        <p>
          Asesoramos en la adopción de prácticas sostenibles y soluciones
          ecológicas en la construcción. Nuestro objetivo es minimizar el
          impacto ambiental y promover proyectos responsables y sostenibles a
          largo plazo.
        </p>

        <h3>Renovación y mantenimiento</h3>
        <p>
          Ofrecemos servicios de renovación y modernización de infraestructuras
          existentes, mejorando su eficiencia y funcionalidad. Nos aseguramos de
          que cumplan con normativas y estándares actuales mientras preservamos
          su valor.
        </p>

        <h3>Supervisión de obras</h3>
        <p>
          Nuestro equipo supervisa y controla todas las fases de la construcción
          para garantizar el cumplimiento de especificaciones y normativas.
          Mantenemos una comunicación fluida con todas las partes involucradas y
          resolvemos cualquier incidencia con rapidez y eficacia.
        </p>

        <p>
          En PolarisX estamos comprometidos a ofrecer soluciones de edificación
          civil que cumplan con los requisitos técnicos y normativos, aportando
          al mismo tiempo valor añadido a las comunidades. Nuestra dedicación a
          la excelencia y la sostenibilidad asegura proyectos de máxima calidad
          y responsabilidad.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function ServiciosDeArquitecturaEIngenieriaPage() {
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
        currentPage="Servicios de Arquitectura e Ingeniería"
      />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/servicios-de-arquitectura-e-ingenieria.webp"
        title="Servicios de Arquitectura e Ingeniería"
        description="Ofrecemos soluciones integrales de arquitectura e ingeniería que combinan creatividad, innovación y sostenibilidad. Nuestro equipo de expertos trabaja en estrecha colaboración con los clientes para diseñar y desarrollar proyectos que superen sus expectativas."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX proporcionamos una amplia gama de servicios de
          arquitectura e ingeniería, desde el diseño conceptual hasta la
          supervisión de la construcción. Nuestro objetivo es crear espacios
          funcionales, estéticamente agradables y sostenibles que respondan a
          las necesidades de nuestros clientes y mejoren la calidad de vida.
        </p>

        <h3>Diseño arquitectónico</h3>
        <p>
          Ofrecemos servicios que abarcan desde el desarrollo de conceptos
          iniciales hasta la elaboración de planos detallados. Nuestro enfoque
          combina innovación, funcionalidad y estética, asegurando que cada
          proyecto refleje la visión y objetivos del cliente.
        </p>

        <h3>Ingeniería estructural</h3>
        <p>
          Nuestros ingenieros estructurales desarrollan soluciones seguras y
          eficientes para edificios e infraestructuras. Aplicamos técnicas
          avanzadas de modelado y análisis para garantizar la estabilidad y
          durabilidad de cada estructura.
        </p>

        <h3>Consultoría en sostenibilidad</h3>
        <p>
          Asesoramos en la implementación de prácticas sostenibles y soluciones
          ecológicas. Ofrecemos evaluaciones de impacto ambiental, diseño de
          edificios energéticamente eficientes e integración de tecnologías
          renovables.
        </p>

        <h3>Gestión de proyectos</h3>
        <p>
          Acompañamos todo el ciclo del proyecto, desde la planificación y
          coordinación hasta la supervisión y el control de la construcción.
          Garantizamos cumplimiento en tiempo, presupuesto y calidad.
        </p>

        <h3>Supervisión de obras</h3>
        <p>
          Nuestro equipo supervisa y controla todas las fases de la
          construcción, verificando que se cumplan las especificaciones de
          diseño y normativas vigentes. Nos ocupamos de resolver incidencias y
          mantener una comunicación fluida entre todas las partes involucradas.
        </p>

        <h3>Renovación y rehabilitación</h3>
        <p>
          Rehabilitamos y renovamos edificios existentes, adaptándolos a nuevas
          necesidades y mejorando su eficiencia y funcionalidad. Nuestro enfoque
          contempla tanto la preservación de elementos históricos como la
          incorporación de mejoras modernas.
        </p>

        <h3>Diseño de interiores</h3>
        <p>
          Creamos espacios interiores acogedores y funcionales que reflejan el
          estilo y preferencias de cada cliente. Nos especializamos en la
          selección de materiales, mobiliario y acabados que optimizan el uso
          del espacio y potencian su estética.
        </p>

        <p>
          Estamos comprometidos con la excelencia en cada proyecto. Nuestro
          equipo multidisciplinario colabora para ofrecer soluciones innovadoras
          y personalizadas que satisfacen las necesidades de nuestros clientes y
          contribuyen al desarrollo sostenible de nuestras comunidades.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function SeguridadYSaludPage() {
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
        currentPage="Seguridad y Salud"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-propiedades-y-activos"
        backgroundImage="/servicios/gestion-de-propiedades-y-activos/seguridad-y-salud.webp"
        title="Seguridad y Salud"
        description="La seguridad y salud en el trabajo son aspectos fundamentales para garantizar un entorno laboral seguro y saludable. Nos comprometemos a implementar y mantener altos estándares de seguridad y salud, protegiendo a los trabajadores y cumpliendo con todas las normativas vigentes."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestros Servicios"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos una gama completa de servicios de seguridad y
          salud ocupacional, diseñados para identificar y mitigar riesgos,
          mejorar las condiciones laborales y promover el bienestar de los
          empleados. Nuestro enfoque integral asegura el cumplimiento normativo
          y la creación de ambientes de trabajo seguros.
        </p>

        <h3>Evaluación de riesgos</h3>
        <p>
          Realizamos diagnósticos exhaustivos para identificar peligros
          potenciales en el lugar de trabajo. Nuestro equipo de expertos analiza
          cada aspecto del entorno laboral y desarrolla planes de acción para
          eliminar o minimizar los riesgos identificados.
        </p>

        <h3>Capacitación y formación</h3>
        <p>
          Diseñamos programas de formación en seguridad y salud para empleados y
          empleadores. Estos programas aumentan la conciencia sobre los riesgos,
          enseñan prácticas seguras y aseguran que los trabajadores estén
          preparados para actuar de manera responsable y segura.
        </p>

        <h3>Planes de emergencia y respuesta</h3>
        <p>
          Desarrollamos y aplicamos planes de emergencia para gestionar
          situaciones críticas de manera eficaz. Incluyen preparación para
          emergencias, simulacros, formación en primeros auxilios y protocolos
          de respuesta a incidentes.
        </p>

        <h3>Auditorías de seguridad</h3>
        <p>
          Evaluamos el cumplimiento de normativas y estándares de seguridad
          mediante auditorías especializadas. Estas ayudan a identificar áreas
          de mejora y a establecer estrategias que garanticen ambientes de
          trabajo seguros y conforme a la ley.
        </p>

        <h3>Consultoría en salud ocupacional</h3>
        <p>
          Asesoramos en la evaluación de condiciones laborales, implementación
          de programas de bienestar y promoción de hábitos saludables entre los
          empleados, con el objetivo de mejorar la salud y el bienestar de la
          fuerza laboral.
        </p>

        <h3>Ergonomía</h3>
        <p>
          Ofrecemos servicios para evaluar y mejorar la ergonomía de los lugares
          de trabajo. Adaptamos estaciones de trabajo y recomendamos prácticas
          que reducen el riesgo de lesiones, mejorando la comodidad y eficiencia
          de los empleados.
        </p>

        <h3>Monitoreo y control de exposiciones</h3>
        <p>
          Implementamos programas de monitoreo de factores como químicos, ruido
          y otras exposiciones ambientales. Usamos tecnologías avanzadas para
          medir y controlar estos riesgos, asegurando entornos laborales más
          seguros y saludables.
        </p>

        <p>
          En PolarisX estamos dedicados a proteger a los trabajadores y a
          mejorar las condiciones laborales. Con un enfoque integral y
          compromiso con la excelencia, garantizamos que cada lugar de trabajo
          cumpla con los más altos estándares de seguridad y salud ocupacional.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import React from "react";
import MainLayout from "@/components/layout/main/main";

interface GestionPropiedades {
  titulo: string;
  descripcion: string;
  enlace: string;
}

export default function GestionPropiedadesPage() {
  const highlightQuote = {
    text: "En PolarisX gestionamos propiedades y activos con un enfoque integral, asegurando eficiencia operativa, reducción de costos y maximización del valor a largo plazo.",
    author: null as string | null,
  };

  const serviciosGestionPropiedades: GestionPropiedades[] = [
    {
      titulo: "Seguridad y Salud",
      descripcion:
        "Prioriza el bienestar de tu equipo y la conformidad normativa con nuestros servicios de seguridad y salud. Implementamos sistemas de gestión de seguridad y salud ocupacional, proporcionando formación, evaluación de riesgos y soluciones personalizadas. Nuestro enfoque proactivo garantiza un entorno de trabajo seguro y saludable, minimizando incidentes y asegurando el cumplimiento de todas las regulaciones pertinentes.",
      enlace: "/servicios/gestion-de-propiedades-y-activos/seguridad-y-salud",
    },
    {
      titulo: "Gestión de Operaciones e Instalaciones",
      descripcion:
        "Optimiza el rendimiento de tus instalaciones con nuestros servicios de gestión de operaciones. Ofrecemos soluciones integrales que incluyen mantenimiento preventivo, gestión de recursos, y mejora de procesos, asegurando que tus instalaciones funcionen de manera eficiente y segura. Nuestro equipo experto trabaja para maximizar la disponibilidad operativa y reducir costos, garantizando un entorno de trabajo óptimo.",
      enlace: "/servicios/gestion-de-propiedades-y-activos/gestion-de-operaciones-e-instalaciones",
    },
    {
      titulo: "Auditorías de Calidad",
      descripcion:
        "Garantiza la excelencia en tus procesos con nuestras auditorías de calidad. Realizamos evaluaciones exhaustivas de sistemas y procedimientos para asegurar que cumplen con los más altos estándares de calidad. Identificamos áreas de mejora y proporcionamos recomendaciones prácticas para optimizar el rendimiento y asegurar la conformidad con las normativas y certificaciones relevantes.",
      enlace: "/servicios/gestion-de-propiedades-y-activos/auditorias-de-calidad",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Gestión de Propiedades y Activos" />

      <HeroBanner
        sectionId="hero-section-gestion-propiedades"
        backgroundImage="/servicios/gestion-de-propiedades-y-activos/gestion-de-propiedades-y-activos.webp"
        title="Gestión de Propiedades y Activos"
        description="Optimizamos la gestión de propiedades y activos, maximizando su valor y rendimiento. Nuestro equipo asegura un mantenimiento eficiente, reduce costos operativos y mejora la satisfacción de inquilinos, cumpliendo objetivos financieros y estratégicos de los propietarios."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <div className="contenido-texto">
          <section className="consultorias">
            {serviciosGestionPropiedades.map((servicio, index) => (
              <div key={index} className="contenedor-consultorias">
                <div className="contenido-consultorias">
                  <a className="titulo-consultoria">{servicio.titulo}</a>
                  <p>{servicio.descripcion}</p>
                  <a
                    href={servicio.enlace}
                    className="leer-mas flex items-center gap-2"
                  >
                    <i className="fa-solid fa-caret-right"></i>
                    Leer más
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </MainLayout>
    </>
  );        
}
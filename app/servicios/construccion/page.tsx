import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import React from "react";
import MainLayout from "@/components/layout/main/main";
interface Construccion {
  titulo: string;
  descripcion: string;
  enlace: string;
}

export default function ConstruccionPage() {
  const highlightQuote = {
    text: "En PolarisX ejecutamos proyectos de construcción integrales, garantizando calidad, seguridad y sostenibilidad en cada etapa, desde la planificación hasta la entrega final.",
    author: null as string | null,
  };

  const construcciones: Construccion[] = [
    {
      titulo: "Edificación Civil",
      descripcion:
        "Desarrolla proyectos de edificación civil con calidad y eficiencia. Desde edificios residenciales hasta comerciales e industriales, nuestro equipo de expertos gestiona cada fase del proceso, asegurando diseños funcionales y estéticamente atractivos. Aplicamos soluciones innovadoras y sostenibles para cumplir con los más altos estándares de construcción.",
      enlace: "/servicios/construccion/edificacion-civil",
    },
    {
      titulo: "Infraestructuras de Transporte",
      descripcion:
        "Mejora la conectividad con nuestras soluciones en infraestructuras de transporte. Nos especializamos en el diseño y construcción de carreteras, puentes, y sistemas de transporte público, garantizando seguridad y eficiencia. Nuestro enfoque integral abarca desde la planificación hasta la ejecución, con un compromiso constante con la sostenibilidad y el impacto positivo en la comunidad.",
      enlace: "/servicios/construccion/infraestructuras-de-transporte",
    },
    {
      titulo: "Obras Hidráulicas",
      descripcion:
        "Gestiona el recurso más valioso con nuestras soluciones en obras hidráulicas. Diseñamos y construimos sistemas de abastecimiento de agua, saneamiento, y control de inundaciones, asegurando eficiencia y sostenibilidad. Nuestro equipo aborda proyectos de todas las escalas, proporcionando infraestructuras que cumplen con rigurosos estándares de calidad y seguridad.",
      enlace: "/servicios/construccion/obras-hidraulicas",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Construcción" />

      <HeroBanner
        sectionId="hero-section-construccion"
        backgroundImage="/servicios/construccion/construccion.webp"
        title="Construcción"
        description="Desarrollamos proyectos integrales de construcción con los más altos estándares de calidad, seguridad y sostenibilidad. Nuestra experiencia abarca desde edificación civil hasta infraestructuras complejas."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <div className="contenido-texto">
          <section className="consultorias">
            {construcciones.map((construccion, index) => (
              <div key={index} className="contenedor-consultorias">
                <div className="contenido-consultorias">
                  <a className="titulo-consultoria">{construccion.titulo}</a>
                  <p>{construccion.descripcion}</p>
                  <a
                    href={construccion.enlace}
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

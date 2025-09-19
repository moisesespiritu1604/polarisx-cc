import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

export default function CorredorFerroviarioEste() {
  // Configuración de la cita destacada
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null, // Especificar tipo explícitamente
  };
  const imagenes = [
    {
      src: "/proyectos/proyecto-corredor-ferroviario-este.webp",
      alt: "Proyecto Corredor Ferroviario Este — portada",
    },
    {
      src: "/proyectos/proyecto-corredor-ferroviario-este-2.png",
      alt: "Proyecto Corredor Ferroviario Este — página 1",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Proyectos"]}
        currentPage="Corredor Ferroviario Este"
      />
      <HeroBanner
        sectionId="hero-section-corredor-ferroviario-este"
        backgroundImage="/proyectos/proyecto-corredor-ferroviario-este.webp"
        title="Corredor Ferroviario Este"
        description="Revisión técnica del proyecto de modernización ferroviaria entre Lima Cercado y Ricardo Palma."
      />
 
      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <p className="intro-text">
          El proyecto consistió en la revisión del estudio de preinversión a nivel de perfil para el Corredor Ferroviario Este: Cercado de Lima – Ricardo Palma. Esta línea de 46.2 km conectará distritos estratégicos de Lima, mejorando la integración del transporte interurbano y promoviendo la movilidad sostenible sobre el trazo del Ferrocarril Central.
        </p>

        <h3>Alcances</h3>
        <ul>
          <li>Se revisó el estudio de preinversión.</li>
          <li>Se establecieron bases técnicas para la modernización.</li>
          <li>Se conectarán 7 distritos de Lima.</li>
          <li>Se impulsó la movilidad sostenible e integrada.</li>
        </ul>

        <h3>Documentación</h3>
        <div className="contenedor-imagenes">
          {imagenes.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="imagen-documento"
              // Opción A: tamaño fijo (recomendado si conoces dimensiones)
              width={1200}
              height={1700}
              // Opción B: si prefieres que ocupe el ancho del contenedor:
              // fill
              // sizes="(max-width: 768px) 100vw, 800px"
              priority={i === 0}
            />
          ))}
        </div>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

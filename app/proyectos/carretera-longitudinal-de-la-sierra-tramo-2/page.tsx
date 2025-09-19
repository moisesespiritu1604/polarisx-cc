import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

export default function CarreteraLongitudinalDeLaSierraTramo2() {
  // Configuración de la cita destacada
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null, // Especificar tipo explícitamente
  };
  const imagenes = [
    {
      src: "/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2-1.png",
      alt: "Proyecto Carretera Longitudinal de la Sierra Tramo 2 — portada",
    },
    {
      src: "/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2-2.png",
      alt: "Proyecto Carretera Longitudinal de la Sierra Tramo 2 — página 1",
    },
    {
      src: "/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2-3.png",
      alt: "Proyecto Carretera Longitudinal de la Sierra Tramo 2 — página 2",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Proyectos"]}
        currentPage="Carretera Longitudinal de la Sierra Tramo 2"
      />
      <HeroBanner
        sectionId="hero-section-carretera-longitudinal-de-la-sierra-tramo-2"
        backgroundImage="/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2.webp"
        title="Carretera Longitudinal de la Sierra Tramo 2"
        description="Recuperación del estándar técnico entre los km 162+160 y 162+290 mediante estudios y obras de reconstrucción y contención."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Este proyecto tuvo como objetivo restituir el estándar técnico del Corredor Vial Interoceánico del Sur – Tramo 2, ubicado entre los kilómetros 162+160 y 162+290 en la región Cusco. Se realizaron estudios geotécnicos e hidráulicos, reconstrucción de un puente y obras de contención, asegurando la funcionalidad y seguridad vial.
        </p>

        <h3>Alcances</h3>
        <ul>
          <li>Se realizaron estudios geotécnicos e hidráulicos.</li>
          <li>Se reconstruyó un puente vehicular.</li>
          <li>Se ejecutaron obras de contención.</li>
          <li>Se recuperó el estándar técnico del tramo vial.</li>
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

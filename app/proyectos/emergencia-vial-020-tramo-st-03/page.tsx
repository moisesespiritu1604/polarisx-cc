import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

export default function EmergenciaVial020() {
  // Configuración de la cita destacada
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null, // Especificar tipo explícitamente
  };
  const imagenes = [
    {
      src: "/proyectos/proyecto-emergencia-vial-020-tramo-st-03-1.png",
      alt: "Proyecto Emergencia Vial 020 — portada",
    },
    {
      src: "/proyectos/proyecto-emergencia-vial-020-tramo-st-03-2.png",
      alt: "Proyecto Emergencia Vial 020 — página 1",
    },
    {
      src: "/proyectos/proyecto-emergencia-vial-020-tramo-st-03-3.png",
      alt: "Proyecto Emergencia Vial 020 — página 2",
    },
    {
      src: "/proyectos/proyecto-emergencia-vial-020-tramo-st-03-4.png",
      alt: "Proyecto Emergencia Vial 020 — página 3",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Proyectos"]}
        currentPage="Emergencia Vial 020 – Tramo: ST 03"
      />
      <HeroBanner
        sectionId="hero-section-emergencia-vial-020-tramo-st-03"
        backgroundImage="/proyectos/proyecto-emergencia-vial-020-tramo-st-03.webp"
        title="Emergencia Vial 020 – Tramo: ST 03"
        description="Elaboración de informes y expedientes técnicos para solucionar emergencias viales en el tramo ST 03, aprobados por MTC y OSITRAN."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <p className="intro-text">
          El objetivo de este proyecto fue desarrollar los Informes Técnicos y Expedientes Técnicos de Solución Definitiva a Emergencias Viales, a fin de presentarlos al Concedente (MTC) y Regulador (OSITRAN) para su revisión y aprobación.
        </p>

        <h3>Alcances</h3>
        <ul>
          <li>Se elaboró los Informes Técnicos de Solución Definitiva de las Emergencias Viales EV020-2022 y EV077-2022.</li>
          <li>Se elaboró el plan de campañas de investigación y estudios en campo necesarios para el desarrollo del Expediente Técnico, previo a este.</li>
          <li>Se elaboró los Expedientes Técnicos de Solución Definitiva de las Emergencias Viales EV020-2022 y EV077-2022.</li>
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

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

export default function PuenteIrsa() {
  // Configuración de la cita destacada
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null, // Especificar tipo explícitamente
  };
  const imagenes = [
    {
      src: "/proyectos/proyecto-puente-irsa-1.png",
      alt: "Proyecto Puente Irsa — portada",
    },
    {
      src: "/proyectos/proyecto-puente-irsa-2.png",
      alt: "Proyecto Puente Irsa — página 1",
    },
    {
      src: "/proyectos/proyecto-puente-irsa-3.png",
      alt: "Proyecto Puente Irsa — página 2",
    },
    {
      src: "/proyectos/proyecto-puente-irsa-4.png",
      alt: "Proyecto Puente Irsa — página 3",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Proyectos"]}
        currentPage="Puente Irsa"
      />
      <HeroBanner
        sectionId="hero-section-puente-irsa"
        backgroundImage="/proyectos/proyecto-puente-irsa.webp"
        title="Puente Irsa"
        description="Elaboración del expediente técnico y mantenimiento del corredor vial IIRSA Sur tramo 2, incluyendo estudios geológicos, hidráulicos y diseño vial."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En este proyecto se elaboró el expediente técnico, bajo el alcance de un Informe Técnico de Mantenimiento (ITM), según lo establece el contrato de concesión para el corredor vial interoceánico IIRSA Sur tramo 2.
        </p>

        <h3>Alcances</h3>
        <p>La empresa realizó los siguientes estudios y diseños como parte del proyecto vial:</p>
        <ul>
          <li>Se analizó la situación existente, identificando las principales deficiencias y necesidades del tramo vial. Se evaluaron los antecedentes y se definieron los objetivos específicos del proyecto.</li>
          <li>Se realizó el Estudio Geológico y Geotécnico.</li>
          <li>Se realizó el Estudio Hidrológico e Hidráulico.</li>
          <li>Se realizó el Diseño de Estructuras y Obras de Arte.</li>
          <li>Se realizó el Diseño de Pavimentos.</li>
          <li>Se realizó el Diseño Vial, Señalización y Seguridad Vial.</li>
          <li>Se realizó el Estudio Topográfico.</li>
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

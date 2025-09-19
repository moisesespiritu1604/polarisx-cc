import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

export default function PresaSullana() {
  // Configuración de la cita destacada
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null, // Especificar tipo explícitamente
  };
  const imagenes = [
    {
      src: "/proyectos/proyecto-presa-sullana.webp",
      alt: "Proyecto Presa Sullana — portada",
    },
    {
      src: "/proyectos/proyecto-presa-sullana-2.png",
      alt: "Proyecto Presa Sullana — página 1",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Proyectos"]}
        currentPage="Presa Sullana"
      />
      <HeroBanner
        sectionId="hero-section-presa-sullana"
        backgroundImage="/proyectos/proyecto-presa-sullana.webp"
        title="Presa Sullana"
        description="Consultoría para el mejoramiento del aliviadero y protección ante eventos climáticos en la Presa Sullana, Piura."
      />
 
      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Este proyecto se desarrolló dentro del Plan Integral de Reconstrucción con Cambios y consistió en la elaboración del expediente técnico para mejorar la protección de la Poza de Disipación del Aliviadero de Compuertas de la Presa Sullana. Se buscó fortalecer la infraestructura ante eventos como El Niño, garantizando su funcionalidad a largo plazo.
        </p>

        <h3>Alcances</h3>
        <ul>
          <li>Se elaboró el expediente técnico.</li>
          <li>Se propusieron soluciones resilientes.</li>
          <li>Se fortaleció la protección del aliviadero.</li>
          <li>Se garantizó su sostenibilidad operativa.</li>
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

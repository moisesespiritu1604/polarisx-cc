import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

export default function IeN14041DelCpNarihuala() {
  // Configuración de la cita destacada
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null, // Especificar tipo explícitamente
  };
  const imagenes = [
    {
      src: "/proyectos/proyecto-ie-n-14041-del-cp-narihuala.png",
      alt: "Proyecto IE Narihuala — portada",
    },
    {
      src: "/proyectos/proyecto-ie-n-14041-del-cp-narihuala-1.png",
      alt: "Proyecto IE Narihuala — página 1",
    },
    {
      src: "/proyectos/proyecto-ie-n-14041-del-cp-narihuala-2.png",
      alt: "Proyecto IE Narihuala — página 2",
    },
    {
      src: "/proyectos/proyecto-ie-n-14041-del-cp-narihuala-3.png",
      alt: "Proyecto IE Narihuala — página 3",
    },
    {
      src: "/proyectos/proyecto-ie-n-14041-del-cp-narihuala-4.png",
      alt: "Proyecto IE Narihuala — página 4",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Proyectos"]}
        currentPage="IE N° 14041 del C.P. Narihuala"
      />
      <HeroBanner
        sectionId="hero-section-ie-n-14041-del-cp-narihuala"
        backgroundImage="/proyectos/proyecto-ie-n-14041-del-cp-narihuala.webp"
        title="IE N° 14041 del C.P. Narihuala"
        description="Mejorar la educación primaria para 243 estudiantes en IE N° 10041 del C.P. Narihuala mediante ingeniería básica y de detalle."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <p className="intro-text">
          El objetivo en este proyecto fue lograr que la población estudiantil
          de la Institución Educativa N° 10041 del C.P. NARIHUALA, distrito de
          Catacaos, provincia de Piura, región Piura. Cl 413388” acceda a una
          adecuada prestación de servicio de educación del nivel Primario. El
          proyecto beneficiará directamente a una población estudiantil actual
          de 243 alumnos, que cursan el nivel Primario.
        </p>

        <h3>Alcances</h3>
        <ul>
          <li>Se realizó la ingeniería básica</li>
          <li>Se realizó la ingeniería de detalle</li>
          <li>Se elaboró el plan de contingencia</li>
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

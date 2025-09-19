import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "@/components/layout/hero/hero";
import Image from "next/image";

type ImgItem = {
  src: string;
  alt?: string;
  caption?: string; // opcional
};

// Humaniza el nombre del archivo: "proyecto-canal-miguel-checa-ep-4.png" -> "Proyecto Canal Miguel Checa Ep 4"
function humanizeFilename(path: string) {
  const file = path.split("/").pop() ?? "";
  return file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function CanalMiguelCheca() {
  const highlightQuote = {
    text: "Comprometidos con la excelencia educativa a través de soluciones de ingeniería innovadoras. ",
    author: null as string | null,
  };

  const imagenes: ImgItem[] = [
    {
      src: "/proyectos/proyecto-canal-miguel-checa-ep-1.png",
      alt: "Estructuras principales",
      caption: "Sifones",
    },
    { src: "/proyectos/proyecto-canal-miguel-checa-ep-2.png", alt: "Detalle de estructuras", caption: "Acueductos" },
    { src: "/proyectos/proyecto-canal-miguel-checa-ep-3.png", caption: "Túneles" },
    { src: "/proyectos/proyecto-canal-miguel-checa-ep-4.png", caption: "Conductos Cerrados" },
  ];
  const imagenes2: ImgItem[] = [
    {
      src: "/proyectos/proyecto-canal-miguel-checa-oa-1.png",
      alt: "Estructuras principales",
      caption: "Tomas",
    },
    { src: "/proyectos/proyecto-canal-miguel-checa-oa-2.png", alt: "Detalle de estructuras", caption: "Aliviaderos" },
    { src: "/proyectos/proyecto-canal-miguel-checa-oa-3.png", caption: "Puentes Vehiculares" },
  ];

  return (
    <>
      <Breadcrumb parentPages={["Proyectos"]} currentPage="Canal Miguel Checa" />
      <HeroBanner
        sectionId="hero-section-canal-miguel-checa"
        backgroundImage="/proyectos/proyecto-canal-miguel-checa.webp"
        title="Canal Miguel Checa"
        description="Elaboración del Expediente Técnico para mejorar el riego en la zona de influencia del Canal Miguel Checa, Piura."
      />

      <MainLayout pageTitle="Descripción" highlightQuote={highlightQuote}>
        <p className="intro-text">
          En este proyecto se elaboró el Expediente Técnico de Obra del Proyecto de Inversión: AMPLIACION Y MEJORAMIENTO DEL SERVICIO DE AGUA PARA RIEGO EN LA ZONA DE INFLUENCIA DEL CANAL MIGUEL CHECA, PROVINCIAS DE SULLANA Y PAITA, DEPARTAMENTO DE PIURA, Código de Inversión 2382880, el cual tuvo dos componentes: Infraestructura y Capacitación.
        </p>

        <h3>Alcances</h3>
        <ul>
          <li>Se desarrollaron los estudios básicos</li>
          <li>Evaluación de la situación actual</li>
          <li>Ingeniería de detalle</li>
        </ul>

        <h3>Documentación</h3>
        <p><strong>1. Estructuras Principales</strong></p>

        <div className="contenedor-imagenes">
          {imagenes.map((item, i) => {
            const caption = item.caption ?? item.alt ?? humanizeFilename(item.src);
            const alt = item.alt ?? caption;

            return (
              <figure key={item.src} className="figura-documento">
                <Image
                  src={item.src}
                  alt={alt}
                  className="imagen-documento"
                  width={1200}
                  height={1700}
                  priority={i === 0}
                />
                <figcaption className="pie-imagen">{caption}</figcaption>
              </figure>
            );
          })}
        </div>
        <p><strong>2. Obras de Arte</strong></p>
        <div className="contenedor-imagenes">
          {imagenes2.map((item, i) => {
            const caption = item.caption ?? item.alt ?? humanizeFilename(item.src);
            const alt = item.alt ?? caption;

            return (
              <figure key={item.src} className="figura-documento">
                <Image
                  src={item.src}
                  alt={alt}
                  className="imagen-documento"
                  width={1200}
                  height={1700}
                  priority={i === 0}
                />
                <figcaption className="pie-imagen">{caption}</figcaption>
              </figure>
            );
          })}
        </div>
      </MainLayout>

      <ProyectosSelectosPage />
    </>
  );
}

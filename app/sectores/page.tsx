import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./sectores.css";

export default function SectoresPage() {
  const industryAreasData = [
    {
      sectorId: 1,
      industryName: "Oficinas",
      sectorImage: "/sectores/sector-Oficinas.webp",
      sectorUrl: "/sectores/oficinas"
    },
    {
      sectorId: 2,
      industryName: "Energía, Petróleo y Gas",
      sectorImage: "/sectores/sector-energia-petroleo-y-gas.webp",
      sectorUrl: "/sectores/energia-petroleo-y-gas"
    },
    {
      sectorId: 3,
      industryName: "Hoteles",
      sectorImage: "/sectores/sector-hoteles.webp",
      sectorUrl: "/sectores/hoteles"
    },
    {
      sectorId: 4,
      industryName: "Sector Público",
      sectorImage: "/sectores/sector-publico.webp",
      sectorUrl: "/sectores/sector-publico"
    },
    {
      sectorId: 5,
      industryName: "Residencial",
      sectorImage: "/sectores/sector-residencial.webp",
      sectorUrl: "/sectores/residencial"
    },
    {
      sectorId: 6,
      industryName: "Educación",
      sectorImage: "/sectores/sector-educacion.webp",
      sectorUrl: "/sectores/educacion"
    },
    {
      sectorId: 7,
      industryName: "Salud",
      sectorImage: "/sectores/sector-salud.webp",
      sectorUrl: "/sectores/salud"
    },
    {
      sectorId: 8,
      industryName: "Transporte e Infraestructura",
      sectorImage: "/sectores/sector-transporte-infraestructura.webp",
      sectorUrl: "/sectores/transporte-infraestructura"
    }
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Sectores" />
      
      {/* Sección Hero */}
      <section id="hero-section-sectores">
        <div className="hero-container-sectores">
          <div className="hero-content-sectores">
            <h1>Sectores</h1>
            <p className="hero-description-sectores">
              En PolarisX, trabajamos en casi todos los sectores de la industria a nivel regional. 
              Altamente experimentados y técnicamente avanzados, hemos completado numerosos proyectos 
              que van desde grandes infraestructuras y trabajos de regeneración urbana para el sector 
              público, hasta impresionantes desarrollos inmobiliarios y comerciales para el sector privado.
            </p>
            <p>
              Nuestros equipos de especialistas realizan investigaciones, intercambian conocimientos 
              y aplican las lecciones aprendidas en toda la región. Esto nos permite ofrecer 
              soluciones innovadoras a los proyectos de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Áreas Industriales - Grid de sectores especializados */}
      <section className="industrial-areas-showcase">
        <div className="sectors-main-container">
          <div className="industry-sectors-grid">
            {industryAreasData.map((industryArea) => (
              <div key={industryArea.sectorId} className="industry-sector-card">
                <div className="sector-visual-wrapper">
                  <Link href={industryArea.sectorUrl}>
                    <Image 
                      src={industryArea.sectorImage} 
                      alt={`Sector ${industryArea.industryName}`}
                      width={300}
                      height={200}
                      className="industry-sector-image"
                    />
                  </Link>
                  <Link href={industryArea.sectorUrl}>
                    <div className="sector-details-overlay">
                      <h4>{industryArea.industryName}</h4>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
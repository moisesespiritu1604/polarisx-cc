"use client";
import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./formacion.css";

// Cada bloque tiene un título y su lista de cursos
const formacionSections = [
  {
    sectionId: 1,
    title: "BIM - Modelamiento",
    items: [
      {
        id: 1,
        name: "Revit Structure",
        image: "/blog/revit-structure.jpg",
        url: "/formacion/cursos-bim-modelamiento/revit-structure.html",
      },
      {
        id: 2,
        name: "Civil 3D",
        image: "/blog/civil-3d.jpg",
        url: "/formacion/cursos-bim-modelamiento/civil-3d.html",
      },
    ],
  },
  {
    sectionId: 2,
    title: "BIM - Gestión",
    items: [
      {
        id: 3,
        name: "Planificación BIM para Proyectos",
        image: "/blog/planificacion-bim-para-proyectos.jpg",
        url: "/formacion/cursos-bim-gestion/planificacion-bim-para-proyectos.html",
      },
    ],
  },
  {
    sectionId: 3,
    title: "Gestión de Proyectos y Diseño",
    items: [
      {
        id: 4,
        name: "Fundamentos de la Gestión de Proyectos",
        image:
          "/blog/formacion-cursos-gestion-de-proyectos-fundamentos-de-la-gestion-de-proyectos.jpg",
        url: "/formacion/cursos-gestion-de-proyectos/fundamentos-de-la-gestion-de-proyectos.html",
      },
      {
        id: 5,
        name: "Diseño de Infraestructuras de Transporte",
        image:
          "/blog/formacion-cursos-diseno-diseno-de-infraestructuras-de-transporte.jpg",
        url: "/formacion/cursos-diseno/diseno-de-infraestructuras-de-transporte.html",
      },
    ],
  },
];

export default function FormacionPage() {
  return (
    <>
      <Breadcrumb currentPage="Formación" />

      {/* Sección Hero */}
      <section id="formacion-hero-section">
        <div className="formacion-hero-container">
          <div className="formacion-hero-content">
            <h1>Formación</h1>
            <p className="formacion-hero-description">
              En PolarisX, ofrecemos una gama de cursos diseñados para impulsar tu carrera en
              tecnología e innovación. Nuestro enfoque práctico y orientado a la industria te
              preparará para los desafíos del mundo digital actual.
            </p>
          </div>
        </div>
      </section>

      {formacionSections.map((section) => (
        <div key={section.sectionId} className="formacion-section">
          <h2 className="formacion-section-title">{section.title}</h2>
          <section className="formacion-showcase">
            <div className="formacion-sectors-container">
              <div className="formacion-grid">
                {section.items.map((item) => (
                  <div key={item.id} className="formacion-card">
                    <div className="formacion-card-wrapper">
                      <Link href={item.url}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={300}
                          height={200}
                          className="formacion-card-image"
                        />
                      </Link>
                      <Link href={item.url}>
                        <div className="formacion-card-overlay">
                          <h4>{item.name}</h4>
                          <i className="fa-solid fa-chevron-right"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}

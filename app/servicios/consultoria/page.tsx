import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import React from "react";
import MainLayout from "@/components/layout/main/main";

interface Consultoria {
  titulo: string;
  descripcion: string;
  enlace: string;
}

export default function ConsultoriaPage() {
  const highlightQuote = {
    text: "Nuestros servicios de consultoría le ayudan a transformar desafíos en oportunidades, mejorar la rentabilidad y fortalecer la sostenibilidad de su empresa.",
    author: null as string | null,
  };
  const consultorias: Consultoria[] = [
    {
      titulo: "Gestión de Proyectos y Programas",
      descripcion:
        "Gestiona tus proyectos y programas con eficiencia y precisión. Ofrecemos servicios de planificación, seguimiento y control, asegurando el uso óptimo de recursos y el cumplimiento de plazos. Nuestro equipo de expertos está capacitado para manejar proyectos de cualquier escala, minimizando riesgos y maximizando el rendimiento. ¡Confía en nosotros para alcanzar tus metas estratégicas!",
      enlace: "/servicios/consultoria/gestion-de-proyectos-y-programas",
    },
    {
      titulo: "Servicios de Arquitectura e Ingeniería",
      descripcion:
        "Transforma tus ideas en realidad con nuestros servicios de arquitectura e ingeniería. Desde el diseño conceptual hasta la supervisión de la construcción, nuestro equipo se encarga de cada etapa, garantizando funcionalidad, estética y cumplimiento normativo. Innovamos con soluciones sostenibles y tecnológicamente avanzadas para crear espacios únicos y eficientes.",
      enlace:
        "/servicios/consultoria/servicios-de-arquitectura-e-ingenieria",
    },
    {
      titulo: "BIM y Gestión de la Información",
      descripcion:
        "Optimiza tus proyectos con la metodología BIM (Building Information Modeling). Nuestra gestión de la información integral facilita la coordinación y comunicación en todas las fases del proyecto, desde el diseño hasta la operación. Mejoramos la precisión, reducimos los errores y aumentamos la eficiencia, asegurando que cada detalle esté alineado con tus objetivos.",
      enlace: "/servicios/consultoria/bim-y-gestion-de-la-informacion",
    },
    {
      titulo: "Estudios de Preinversión",
      descripcion:
        "Realiza una evaluación integral de la viabilidad de tus proyectos con nuestros estudios de preinversión. Analizamos aspectos técnicos, económicos y financieros para ofrecerte un panorama claro y detallado. Con nuestra ayuda, podrás identificar oportunidades, optimizar recursos y tomar decisiones estratégicas con confianza, asegurando la sostenibilidad y el éxito de tus inversiones.",
      enlace: "/servicios/consultoria/estudios-de-preinversion",
    },
    {
      titulo: "Resolución de Conflictos y Peritajes",
      descripcion:
        "Sabemos que resolver controversias de manera rápida y eficiente es crucial para evitar retrasos costosos y daños en la reputación. Como asesores independientes, ofrecemos el asesoramiento imparcial necesario para resolver disputas. Además, contamos con un equipo de peritos expertos con experiencia en el manejo de temas relacionados con los contrainterrogatorios.",
      enlace:
        "/servicios/consultoria/resolucion-de-conflictos-y-peritajes",
    },
    {
      titulo: "Gestión del Riesgo",
      descripcion:
        "Minimiza incertidumbres y maximiza oportunidades con nuestra gestión del riesgo. Identificamos, analizamos y mitigamos riesgos potenciales en todas las etapas de tus proyectos. Nuestro enfoque proactivo te ayuda a anticipar problemas y tomar medidas preventivas, asegurando la continuidad del negocio y protegiendo tus inversiones. Confía en nuestra experiencia para una gestión de riesgos eficaz y adaptativa.",
      enlace: "/servicios/consultoria/gestion-del-riesgo",
    },
  ];
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Consultoría" />
      <HeroBanner
        sectionId="hero-section-consultoria"
        backgroundImage="/servicios/consultoria/consultoria.webp"
        title="Consultoría"
        description="¿Deseas desbloquear y dar valor a tu negocio? Nuestro asesoramiento especializado te ayudará a conseguir subvenciones y ayudas fiscales, optimizar su inversión, operar de forma sostenible, gestionar riesgos o resolver disputas."
      />
      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <div className="contenido-texto">
          <section className="consultorias">
            {consultorias.map((consultoria, index) => (
              <div key={index} className="contenedor-consultorias">
                <div className="contenido-consultorias">
                  <a className="titulo-consultoria">{consultoria.titulo}</a>
                  <p>{consultoria.descripcion}</p>
                  <a
                    href={consultoria.enlace}
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

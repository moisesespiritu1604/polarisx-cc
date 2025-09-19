import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import React from "react";
import MainLayout from "@/components/layout/main/main";

interface GestionCostes {
  titulo: string;
  descripcion: string;
  enlace: string;
}

export default function GestionCostesPage() {
  const highlightQuote = {
    text: "Gestione costes con precisión y administre contratos de forma eficiente. Con PolarisX obtiene control, transparencia y mejores resultados para su negocio.",
    author: null as string | null,
  };

  const serviciosGestionCostes: GestionCostes[] = [
    {
      titulo: "Benchmarking y Auditorías",
      descripcion:
        "El acceso a datos cuantificables y mensurables permite tomar mejores decisiones. Nuestro excelente sistema de análisis comparativos y nuestra base de datos resultan fundamentales a la hora de ayudar a nuestros clientes a gestionar el riesgo, controlar costes y tomar decisiones rápidas.",
      enlace: "/servicios/gestion-de-costos-y-administracion-de-contratos/benchmarking-y-auditorias",
    },
    {
      titulo: "Gestión de Costos",
      descripcion:
        "Nuestro asesoramiento imparcial ayuda a los clientes a maximizar su rentabilidad financiera, desde la adquisición del lugar hasta la finalización del proyecto. Con décadas de inteligencia sobre construcción, ofrecemos un conocimiento sin parangón en todos los sectores, ayudando a los clientes a conseguir un valor real de sus activos.",
      enlace: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos",
    },
    {
      titulo: "Estrategias de Contratación",
      descripcion:
        "Una metodología de adquisición adecuada puede ser clave para el éxito de un proyecto. Con acceso a la última inteligencia del mercado, nuestros asesores ofrecen a los clientes asesoramiento imparcial sobre lo que genera una mayor rentabilidad de su inversión.",
      enlace: "/servicios/gestion-de-costos-y-administracion-de-contratos/estrategias-de-contratacion",
    },
    {
      titulo: "Control de Proyectos",
      descripcion:
        "Los proyectos evolucionan mejor al reducir la complejidad. Nuestro sistema basado en procesos ayuda a simplificar la gestión de los resultados y la elaboración de informes, de tal modo que los clientes siempre pueden tener una perspectiva general sin perder de vista los detalles clave.",
      enlace: "/servicios/gestion-de-costos-y-administracion-de-contratos/control-de-proyectos",
    },
    {
      titulo: "Gestión del Mantenimiento",
      descripcion:
        "Ofrecemos la evaluación independiente y rigurosa necesaria para asegurar el éxito de estos proyectos en los que el factor temporal es crucial. Desde la preaprobación hasta la liquidación, nuestros expertos ayudan a mejorar la previsibilidad de los costes y plazos, identificando también más oportunidades para crear eficiencia.",
      enlace: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-del-mantenimiento",
    },
  ];

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Gestión de Costes y Administración de Contratos" />

      <HeroBanner
        sectionId="hero-section-gestion-de-costos-y-administracion-de-contratos"
        backgroundImage="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos-y-administracion-de-contratos.webp"
        title="Gestión de Costes y Administración de Contratos"
        description="¿Deseas desbloquear y dar valor a tu negocio? Nuestro asesoramiento especializado te ayudará a conseguir subvenciones y ayudas fiscales, optimizar su inversión, operar de forma sostenible, gestionar riesgos o resolver disputas."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout pageTitle="" highlightQuote={highlightQuote}>
        {/* Contenido específico de la página */}
        <div className="contenido-texto">
          <section className="consultorias">
            {serviciosGestionCostes.map((servicio, index) => (
              <div key={index} className="contenedor-consultorias">
                <div className="contenido-consultorias">
                  <a className="titulo-consultoria">{servicio.titulo}</a>
                  <p>{servicio.descripcion}</p>
                  <a
                    href={servicio.enlace}
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
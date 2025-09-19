import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function BenchmarkingYAuditoriasPage() {
  const navigationIndex = {
    title: "Gestión de Costos y Administración de Contratos",
    items: [
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/benchmarking-y-auditorias",
        label: "Benchmarking y Auditorías",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/control-de-proyectos",
        label: "Control de Proyectos",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/estrategias-de-contratacion",
        label: "Estrategias de Contratación",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos",
        label: "Gestión de Costos",
      },
      {
        href: "/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-del-mantenimiento",
        label: "Gestión del Mantenimiento",
      },
    ],
  };
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb
        parentPages={["Servicios", "Gestión de Costos y Administración de Contratos"]}
        currentPage="Benchmarking y Auditorías"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-costos-y-administracion-de-contratos"
        backgroundImage="/servicios/gestion-de-costos-y-administracion-de-contratos/benchmarking-y-auditorias.webp"
        title="Benchmarking y Auditorías"
        description="El acceso a datos cuantificables y mensurables mejora la toma de decisiones. Nuestro sistema de análisis comparativos y base de datos ayudan a gestionar riesgos, controlar costes y tomar decisiones rápidas."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Los Servicios que ofrecemos"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX generamos valor para propiedades inmobiliarias y proyectos
          de construcción mediante modelos y análisis de datos detallados. Con
          nuestro proceso de benchmarking identificamos y gestionamos riesgos,
          ajustamos costes y facilitamos una toma de decisiones rápida y
          confiable.
        </p>

        <h3>Servicios de auditoría</h3>
        <p>
          Ofrecemos auditorías independientes y sistemáticas que incluyen el
          análisis de datos, extractos, archivos, operaciones y rendimiento,
          siempre adaptadas a los requisitos específicos de cada cliente.
        </p>

        <h3>Benchmarking desde el principio</h3>
        <p>
          Desde las fases iniciales analizamos los datos disponibles para
          acordar un presupuesto, informar sobre el diseño y la planificación y
          seleccionar al contratista adecuado. Posteriormente, gestionamos todo
          el proceso de construcción con asesoramiento basado en datos sólidos.
        </p>

        <h3>Creación de valor en todo el proyecto</h3>
        <p>
          Utilizamos datos históricos para predecir costes, estimar riesgos y
          evaluar posibles variaciones. Proporcionamos información cuantificable
          que permite a los clientes gestionar proyectos con mayor control y
          respaldar sus estrategias frente a terceros. También apoyamos la
          exploración de conceptos de diseño y metodologías de contratación
          alternativas.
        </p>

        <h3>Mejora continua</h3>
        <p>
          A partir de experiencias previas, desarrollamos modelos de datos que
          prueban y validan predicciones y estrategias. Esto fortalece la
          gestión de riesgos, maximiza el valor en el diseño y establece
          objetivos claros de mejora continua.
        </p>

        <h3>Estableciendo estándares de referencia</h3>
        <p>
          Nuestra experiencia en benchmarking y análisis de proyectos de
          construcción está reconocida en la guía de buenas prácticas del Royal
          Institution of Chartered Surveyors, desarrollada con la participación
          de PolarisX.
        </p>
        <p>
          Contamos con un extenso registro de análisis detallados de proyectos
          recientes que abarcan sectores clave de la industria, diferentes tipos
          de construcción, criterios de sostenibilidad y múltiples métodos de
          contratación.
        </p>

        <p>
          Creemos firmemente que el benchmarking permite identificar mejores
          prácticas y resaltar las oportunidades de mejora que nuestros clientes
          pueden alcanzar dentro de parámetros definidos.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

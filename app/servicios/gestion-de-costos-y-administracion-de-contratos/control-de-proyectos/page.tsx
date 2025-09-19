import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function ControlDeProyectosPage() {
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
        parentPages={[
          "Servicios",
          "Gestión de Costos y Administración de Contratos",
        ]}
        currentPage="Control de Proyectos"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-costos-y-administracion-de-contratos"
        backgroundImage="/servicios/gestion-de-costos-y-administracion-de-contratos/control-de-proyectos.webp"
        title="Control de Proyectos"
        description="Los proyectos avanzan de manera más eficiente cuando se reduce la complejidad. Nuestro sistema basado en procesos simplifica la gestión de los resultados y la elaboración de informes, permitiendo a los clientes mantener una visión general sin perder de vista los detalles clave."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Los Servicios que ofrecemos"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos servicios de control de proyectos para
          garantizar que nuestros clientes completen sus programas y proyectos
          complejos dentro del plazo y el presupuesto establecidos. Nuestro
          sistema basado en procesos proporciona información precisa y detallada
          sobre costes, rendimiento y riesgos en cada fase, simplificando la
          gestión y los informes.
        </p>

        <h3>Mejora de la eficiencia</h3>
        <p>
          Ayudamos a mejorar la eficiencia y maximizar la rentabilidad mediante
          una visión estratégica de los proyectos. Los beneficios incluyen:
        </p>
        <ul>
          <li>
            Reducción de costes y mejora de la eficiencia mediante procesos y
            metodologías innovadoras.
          </li>
          <li>Mayor predictibilidad de costes y cumplimiento de los plazos.</li>
          <li>
            Medidas flexibles y personalizadas para adaptarse a las necesidades
            individuales.
          </li>
        </ul>
        <p>
          Utilizamos herramientas y técnicas avanzadas para ofrecer información
          esencial que permita tomar decisiones basadas en datos y asegurar una
          gestión efectiva a lo largo de todo el ciclo de vida del proyecto.
        </p>

        <h3>Experiencia especializada</h3>
        <p>
          Conocemos los marcos, estructuras y protocolos de planificación de
          nuestros clientes, así como sus objetivos fundamentales. Somos
          expertos en gestión de riesgos, cambios, valor ganado y protocolos de
          información, lo que nos permite adaptarnos a distintos contextos
          organizacionales.
        </p>
        <p>
          Apoyamos el desarrollo de procesos clave, incluyendo la creación de
          Work Breakdown Structures (WBS), la definición de plazos detallados y
          la evaluación de riesgos cualitativos y cuantitativos. Además,
          utilizamos software especializado como PACE para evaluación de costes
          y planificación, y Polarisx Space para transparencia y auditoría.
        </p>

        <h3>Servicios adicionales</h3>
        <ul>
          <li>Creación de WBS para la gestión de la cartera de productos.</li>
          <li>
            Acordar los puntos de partida del cliente con documentos de apoyo.
          </li>
          <li>Establecimiento de plazos detallados.</li>
          <li>Evaluaciones ajustadas al ciclo de vida del proyecto.</li>
          <li>
            Registros de riesgos para evaluación y creación de modelos de
            riesgos.
          </li>
          <li>
            Registros de control de tendencias y cambios para apoyo en
            evaluación y monitorización.
          </li>
          <li>
            Informes de progreso y cuadros de mando, incluyendo SPI y CPI.
          </li>
        </ul>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function GestionDelMantenimientoPage() {
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
        currentPage="Gestión del Mantenimiento"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-costos-y-administracion-de-contratos"
        backgroundImage="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-del-mantenimiento.webp"
        title="Gestión del Mantenimiento"
        description="Realizamos evaluaciones independientes y exhaustivas para garantizar el éxito de los proyectos donde el tiempo es un factor esencial. Desde la preaprobación hasta la finalización, nuestros expertos mejoran la previsibilidad de costos y tiempos, y también identifican oportunidades adicionales para incrementar la eficiencia."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Los Servicios que ofrecemos"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX ofrecemos servicios de gestión del mantenimiento para
          ayudar a los clientes en todo el Perú a manejar proyectos complejos y
          de alto costo que requieren una adecuada administración de proyectos,
          costos, contratos y gestión comercial. Nuestro objetivo es asegurar
          rentabilidad a través de una evaluación constructiva e independiente
          en cuanto a plazos, costos y actividades de contratación.
        </p>

        <h3>Ahorre tiempo y dinero, añada valor</h3>
        <p>
          Brindamos un servicio integral desde la fase previa a la autorización
          hasta la finalización, con información detallada sobre costes, métodos
          de contratación, contratos, plazos, recursos y riesgos. Nuestra
          gestión independiente y proactiva reduce la carga de trabajo del
          cliente y le permite obtener una visión global estratégica.
        </p>
        <p>
          Adaptamos cada servicio a las necesidades específicas, facilitando la
          toma de decisiones informadas y el desarrollo de estrategias que
          mejoren la eficiencia. Reducimos plazos y costes de puesta en marcha
          mediante procesos comprobados, mejoramos la predictibilidad de
          resultados y establecemos objetivos realistas a través del
          benchmarking, incentivando mayor rentabilidad y eficiencia.
        </p>
        <p>
          Podemos generar rápidamente diversos escenarios de recursos, plazos,
          presupuestos y flujos de caja, lo que permite decisiones estratégicas
          basadas en datos.
        </p>

        <h3>Expertos especializados independientes</h3>
        <p>
          Con más de 15 años de experiencia en gestión del mantenimiento, hemos
          asesorado en más de 20 casos en Perú y en el extranjero. Ofrecemos
          auditorías de planificación y preparación de hasta 18 meses antes del
          inicio de un cierre, identificando fortalezas y debilidades.
        </p>
        <p>
          Nuestros especialistas se integran al equipo del cliente para aportar
          conocimiento experto, asesoría independiente y transferencia de buenas
          prácticas. Implementamos métodos de contratación personalizados que
          optimizan el uso de recursos, añadiendo valor mediante la gestión y
          predicción de costes, así como la gestión comercial, contractual y de
          riesgos.
        </p>
        <p>
          Utilizamos herramientas y software especializados como Primavera P6 y
          nuestro propio paquete PACE (evaluación de costes y planificación),
          que nos permiten generar estimaciones detalladas, modelos de costes y
          planificación de paquetes de trabajo específicos para cierres,
          reacondicionamientos o actividades de mantenimiento.
        </p>

        <h3>Casos prácticos</h3>
        <p>
          <strong>Ineos:</strong> gracias a PACE logramos reducir
          sustancialmente el tiempo de planificación y disminuir a menos de la
          mitad el número de planificadores necesarios. Además, el software
          permite conservar todos los datos para reutilizarlos en el futuro,
          evitando duplicaciones.
        </p>
        <p>
          <strong>Centrica:</strong> nuestro asesoramiento en estrategias
          comerciales permitió una reducción del 24% en los gastos de
          mantenimiento.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

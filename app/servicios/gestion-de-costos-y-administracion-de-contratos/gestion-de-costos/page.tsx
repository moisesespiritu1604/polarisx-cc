import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import HeroBanner from "../../../../components/layout/hero/hero";

export default function GestionDeCostosPage() {
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
        currentPage="Gestión de Costos"
      />
      <HeroBanner
        sectionId="hero-section-gestion-de-costos-y-administracion-de-contratos"
        backgroundImage="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos.webp"
        title="Gestión de Costos"
        description="En PolarisX, nuestro asesoramiento imparcial ayuda a los clientes a maximizar su rentabilidad financiera, desde la adquisición del terreno hasta la finalización del proyecto. Con nuestra vasta experiencia en construcción, ofrecemos un conocimiento excepcional en todos los sectores, ayudando a los clientes a obtener un valor real de sus activos."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Los Servicios que ofrecemos"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX proporcionamos asesoramiento especializado en costos para
          asegurar la viabilidad y rentabilidad de los proyectos de nuestros
          clientes. Desde la adquisición de terrenos hasta la ejecución,
          gestionamos costes y cadena de suministro para maximizar el retorno de
          la inversión, equilibrando plazo, calidad, coste y riesgo.
        </p>

        <h3>Inteligencia de mercado</h3>
        <p>
          Con décadas de experiencia en gestión de costos en múltiples sectores,
          contamos con un profundo conocimiento del mercado y de la industria de
          la construcción. Esto nos permite evaluar y reducir costes, aumentando
          el valor de los activos.
        </p>
        <p>
          Nuestra amplia base de datos de benchmarking sectorial ofrece modelos
          fiables para prever escenarios y minimizar excesos a lo largo de todo
          el ciclo del proyecto. Adoptamos un enfoque personal y proactivo, con
          la participación activa de personal sénior cualificado para asegurar
          resultados exitosos.
        </p>

        <h3>Asesoramiento previo a la adquisición</h3>
        <p>
          Sabemos que las decisiones de adquisición suelen tomarse con
          información limitada y bajo presión de tiempo. Nuestros quantity
          surveyors, acreditados por el Royal Institution of Chartered
          Surveyors, evalúan rápidamente la viabilidad, los costes y el retorno
          de inversión.
        </p>
        <p>
          Gracias a nuestra experiencia en mercados volátiles y competitivos,
          ayudamos a nuestros clientes a tomar decisiones fundamentadas y a
          asegurar desarrollos sin exponerse a riesgos elevados.
        </p>

        <h3>Apoyo posterior a la adquisición</h3>
        <p>
          Como agentes independientes, ofrecemos asesoramiento imparcial,
          gestionando la cadena de suministro, garantizando el cumplimiento
          contractual y protegiendo los intereses de nuestros clientes mientras
          administramos presupuestos de manera eficaz.
        </p>
        <p>
          También orientamos sobre la mejor estrategia de contratación y
          supervisamos su proceso. Redactamos contratos, controlamos la
          ejecución de los trabajos y gestionamos cambios y evaluaciones para
          entregar proyectos conforme a las especificaciones, los plazos y los
          costes acordados.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

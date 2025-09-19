import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function TransporteInfraestructurasPage() {
  const highlightQuote = {
    text: "En PolarisX, optimizamos proyectos de transporte e infraestructuras. Nuestro equipo gestiona cada fase, asegurando eficiencia, calidad y seguridad. Cumplimos plazos y presupuestos, superando expectativas de clientes y usuarios finales.",
    author: null as string | null,
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Transporte e Infraestructuras" />
      <HeroBanner
        sectionId="hero-section-transporte-infraestructuras"
        backgroundImage="/sectores/sector-transporte-infraestructura.webp"
        title="Transporte e Infraestructuras"
        description="En PolarisX, nuestros asesores han trabajado en algunos de los proyectos de infraestructuras más importantes, tanto en el sector de carreteras, ferrocarriles, marítimo como de la aviación. Su asesoramiento experto e independiente ayuda a nuestros clientes a tomar decisiones fundamentadas en cuanto a costos, riesgos y seguridad."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Todos confiamos en infraestructuras de transporte eficientes. Para que sean posibles, nuestros clientes del sector acuden a PolarisX en busca de rentabilidad, gestión rigurosa de riesgos y gran responsabilidad financiera.
        </p>
        <p>
          Somos conscientes de que los usuarios finales desean seguridad, fiabilidad, valor óptimo y una experiencia cómoda y agradable.
        </p>

        <h3>Soluciones, no problemas</h3>
        <p>
          A nadie le gustan los problemas, especialmente a los clientes. Aunque los proyectos de gran envergadura pueden aportar beneficios a largo plazo, a menudo causan problemas y molestias a corto plazo a los usuarios.
        </p>
        <p>
          Trabajamos para ayudar a nuestros clientes a cumplir las promesas que han hecho y a que todo transcurra de la forma más fluida posible, asegurándonos de que el proyecto finalice a tiempo y dentro del presupuesto.
        </p>
        <p>
          Como expertos en infraestructuras, conocemos a la perfección los últimos materiales, precios, tendencias de mercado y vías de contratación para ayudarle a generar valor con todos los activos de nuestros clientes.
        </p>

        <h3>El mejor asesoramiento práctico</h3>
        <p>
          Los clientes acuden a PolarisX por nuestra experiencia en la gestión de proyectos de infraestructuras de índole muy diversa. Trabajamos con clientes públicos y privados del sector ferroviario, marítimo, de la aviación y de carreteras. Como consultores independientes, los clientes se benefician de un servicio imparcial, con un asesoramiento equilibrado y objetivo.
        </p>
        <p>
          Nuestros equipos están formados por expertos en una gran variedad de disciplinas, como la edificación, ingeniería civil y telecomunicaciones. Gracias a su experiencia, aportamos una perspectiva valiosa a iniciativas de contratación, contratos, resolución de conflictos, sostenibilidad, colaboración, riesgos y seguridad y salud.
        </p>
      </MainLayout>
      
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
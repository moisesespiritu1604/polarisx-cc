import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function EnergiaPetroleoGasPage() {
  const highlightQuote = {
    text: "Nuestro compromiso es generar el máximo valor para nuestros clientes, con soluciones energéticas que combinan eficiencia, seguridad y sostenibilidad, sin concesiones.",
    author: null as string | null,
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Energía, Petróleo y Gas" />
      <HeroBanner
        sectionId="hero-section-energia-petroleo-gas"
        backgroundImage="/sectores/sector-energia-petroleo-y-gas.webp"
        title="Energía, Petróleo y Gas"
        description="La certeza y la eficiencia son cruciales en estos sectores globales de alto riesgo. Ya sea en tierra o en el mar, en energía nuclear o renovable, nuestros expertos se integran a su equipo para maximizar el valor en cada etapa de su proyecto energético."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX, brindamos a nuestros clientes la seguridad de costos y el control de gestión necesarios para obtener el máximo valor en este entorno dinámico y frecuentemente riesgoso. Nuestro equipo de expertos tiene experiencia en proyectos de los sectores de energía nuclear, no nuclear, renovables, procesos y defensa nuclear.
        </p>

        <h3>Valor agregado</h3>
        <p>
          Nuestros clientes cuentan con nosotros para gestionar programas, controlar costos y ofrecer asesoramiento especializado para sus proyectos. Aportamos valor mediante estudios de viabilidad, planes de nuevas construcciones, puesta en marcha, renovación y mantenimiento, así como desmantelamiento, demolición y remediación de terrenos.
        </p>

        <h3>Experiencia integral</h3>
        <p>
          Además de alcanzar la máxima eficiencia operativa en su proyecto, nuestros colaboradores destacan en todos los aspectos, desde la estrategia de adquisiciones y el control de costos a lo largo del ciclo de vida, hasta la gestión de proyectos, la ingeniería de valor y la capacitación.
        </p>
      </MainLayout>
      
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function SaludPage() {
  const highlightQuote = {
    text: "En PolarisX, acompañamos a nuestros clientes en un entorno de salud en constante cambio, ofreciendo soluciones ágiles y sostenibles que optimizan recursos y elevan la calidad de los servicios.",
    author: null as string | null,
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Salud" />
      <HeroBanner
        sectionId="hero-section-salud"
        backgroundImage="/sectores/sector-salud.webp"
        title="Salud"
        description="El crecimiento de la población ejerce más presión sobre los servicios de salud a nivel regional. En PolarisX, nuestros especialistas tienen experiencia trabajando en proyectos para clientes del sector salud, ajustando los objetivos a los presupuestos y sacando el mayor partido de lo que a menudo son recursos escasos."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Los cambios en la prestación de la asistencia sanitaria están motivados por avances en los procedimientos clínicos, la tecnología, cambios organizativos, la financiación y una población que crece y se diversifica.
        </p>
        <p>
          Estos factores impulsores del cambio hacen necesario replantearse constantemente dónde es mejor prestar la asistencia y el tratamiento, cómo se prestan y qué resultados se esperan del dinero invertido.
        </p>
        <p>
          En PolarisX, hemos trabajado con clientes tanto del sector privado como del público en toda la gama de servicios sanitarios, incluyendo atención primaria, secundaria, servicios de atención especializada, centros de salud mental y de rehabilitación.
        </p>

        <h3>Operaciones más eficientes</h3>
        <p>
          En los últimos años, ha habido mucha presión para alcanzar ciertos rendimientos y se han examinado con detalle todos los presupuestos operativos. Esto ha resultado en nuevas formas de trabajar, un mejor uso de los espacios caros y la adopción de medidas comerciales, auditorías de rendimiento y soluciones innovadoras para las contrataciones.
        </p>
        <p>
          Con una experiencia considerable en la asistencia sanitaria tanto pública como privada, PolarisX está en posición de proponerle formas más efectivas de desarrollar, revisar o reestructurar su estrategia inmobiliaria.
        </p>

        <h3>Aprovechando los servicios de un especialista</h3>
        <p>
          Nuestra experiencia con diversos clientes en el sector de la sanidad nos permite saber lo que se necesita para proporcionar soluciones sostenibles en el sector. En PolarisX, aportamos conocimientos especializados para asegurar que cada proyecto se ejecute de manera eficiente y efectiva.
        </p>
      </MainLayout>
      
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
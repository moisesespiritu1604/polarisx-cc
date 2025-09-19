import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function ResidencialPage() {
  const highlightQuote = {
    text: "La economía actual exige que las familias optimicen sus recursos. En PolarisX, ayudamos a nuestros clientes a gestionar mejor sus finanzas domésticas, maximizando el uso de sus espacios y generando ahorros para mejorar su calidad de vida.",
    author: null as string | null,
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Residencial" />
      <HeroBanner
        sectionId="hero-section-residencial"
        backgroundImage="/sectores/sector-residencial.webp"
        title="Residencial"
        description="Gracias a nuestra experiencia, gestionamos proyectos de desarrollo residencial. En PolarisX, nuestros consultores colaboran con propietarios y promotores para crear viviendas atractivas, rentables y sostenibles que sean deseables para alquiler o compra."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Constructores y propietarios conocen los deseos de los compradores, y nosotros también. Sabemos cómo equilibrar sus expectativas con la necesidad de optimizar las ventas.
        </p>

        <h3>Servicios que añaden valor</h3>
        <p>
          Inicialmente, proporcionamos la información necesaria para evaluar la viabilidad de un proyecto en cualquier ubicación y aconsejamos sobre cómo maximizar el rendimiento de la inversión al menor costo. Una vez que el proyecto está en marcha, ofrecemos servicios de gestión de proyectos y control de costos, desde el diseño y la contratación hasta la entregafinal.
        </p>
        <p>
          Buscamos equilibrar las expectativas de ventas con el potencial de cada ubicación. Nuestros conocimientos en especificaciones de construcción y equipamiento nos permiten ayudarle a alcanzar sus objetivos sin gastos innecesarios.
        </p>
        <p>
          Colaboramos con usted y sus arquitectos para mantener los proyectos en buen camino y ahorrar dinero mediante ejercicios de value engineering durante el proceso de construcción, sugiriendo soluciones que añaden valor.
        </p>
        <p>
          Ayudamos a los clientes a optimizar la cadena de suministro y aprovechar las economías de escala. Además, revisamos los costos de ciclo de vida y los costos de uso de los productos utilizados para equilibrar el capital invertido y el gasto de mantenimiento.
        </p>
      </MainLayout>
      
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
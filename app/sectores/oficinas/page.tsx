import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function OficinasPage() {
  const highlightQuote = {
    text: "Nuestro profundo conocimiento de este mercado tan dinámico nos permite proporcionar a nuestros clientes asesoramiento en tiempo real para que tomen decisiones bien fundadas.",
    author: null as string | null, // Especificar tipo explícitamente
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Oficinas" />
      <HeroBanner
        sectionId="hero-section-sector-oficinas"
        backgroundImage="/sectores/sector-Oficinas.webp"
        title="Oficinas"
        description="Nuestra amplia experiencia en el sector de oficinas nos permite
              tener un conocimiento de primera mano sobre las necesidades de los
              ocupantes. Trabajamos estrechamente con propietarios y
              desarrolladores de edificios, desde la fase de concepción hasta la
              finalización del proyecto, ayudándoles a conseguir una buena
              rentabilidad financiera."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En un mercado tan competitivo, entendemos que una inversión rentable
          requiere una acción rápida y acceso a información confiable.
          Colaboramos con nuestros clientes para definir una estrategia que
          ofrezca las oficinas deseadas por los ocupantes y que se ajuste a su
          presupuesto.
        </p>

        <h3>Conocimientos especializados</h3>
        <p>
          Armonizamos sus metas con las realidades prácticas del proyecto.
          Comprendemos cómo la ubicación, las tendencias actuales y las
          necesidades específicas de los usuarios finales influyen en el
          potencial del proyecto. También sabemos cómo gestionar y salvaguardar
          los objetivos de todas las partes interesadas.
        </p>
        <p>
          Desde pequeños proyectos de oficinas hasta grandes desarrollos
          corporativos, y desde renovaciones hasta nuevas construcciones, nos
          ocupamos de todos los aspectos de cualquier proyecto, sin importar su
          complejidad.
        </p>

        <h3>El poder de la experiencia</h3>
        <p>
          Nuestros servicios incluyen la gestión de costos, que en la fase
          conceptual ofrece una evaluación preliminar de la inversión, ayudando
          a los clientes a obtener un buen rendimiento del capital invertido.
        </p>
        <p>
          Además, proporcionamos servicios de evaluación de edificios, gestión
          de instalaciones, asesoramiento fiscal especializado, gestión de
          riesgos y project management a lo largo de todo el proceso.
        </p>
        <p>
          Nuestra extensa base de datos de benchmarking es esencial para
          identificar las prioridades de los ocupantes y analizar los costos, lo
          que ayuda a los clientes a evaluar la viabilidad de los proyectos y
          tomar decisiones informadas.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

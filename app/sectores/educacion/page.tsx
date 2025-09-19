import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function EducacionPage() {
  const highlightQuote = {
    text: "El panorama de la educación superior ha cambiado. En PolarisX, le ayudaremos a crear un campus más eficiente, sacando el máximo partido a la financiación y respetando los compromisos de reducción de dióxido de carbono.",
    author: null as string | null, // Especificar tipo explícitamente
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Educación" />
      <HeroBanner
        sectionId="hero-section-sector-educacion"
        backgroundImage="/sectores/sector-educacion.webp"
        title="Educación"
        description="En PolarisX, trabajamos con nuestros clientes del sector educación, para proporcionar infraestructura educativos de alta calidad. Les asistimos en la creación y mantenimiento de escuelas, colegios y universidades tecnológicamente avanzados, colaborando con los principales interesados y gestionando recursos limitados para asegurar que los proyectos se completen según lo previsto."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          Nuestros clientes del sector educativo tienen una ambición común:
          crear entornos que inspiren y eduquen a los estudiantes. En PolarisX,
          disponemos de especialistas en educación primaria, secundaria,
          superior y complementaria para asegurarnos de entender completamente
          las prioridades y desafíos de nuestros clientes.
        </p>

        <h3>Los tiempos actuales demandan una nueva manera de pensar</h3>
        <p>
          Brindamos asesoramiento en proyectos desde la planificación hasta la
          ejecución, incluyendo la gestión energética del edificio para
          conseguir ahorros a largo plazo. Nuestros expertos en educación saben
          cómo adaptar sus propuestas a los diferentes planes de financiación y
          gestión de escuelas e instituciones educativas.
        </p>

        <h3>Escuelas y otros centros educativos</h3>
        <p>
          Muchos edificios educativos nuevos son muy diferentes de los de antes.
          Los proyectos en los que participamos son innovadores e imaginativos.
          Hemos transformado oficinas de empleo y edificios corporativos en
          escuelas, convertido terrazas en áreas recreativas y logrado que
          centros en pleno centro de la ciudad sean exitosos.
        </p>
        <p>
          Colaboramos estrechamente con nuestros clientes para ayudarlos a
          priorizar el aprendizaje sobre la enseñanza. Esto a menudo significa
          emplear tecnologías avanzadas para crear entornos equipados con las
          últimas tecnologías de la información y la comunicación.
        </p>

        <h3>Manejo de la participación de los interesados</h3>
        <p>
          Nuestros especialistas facilitan la gestión de la participación de los
          interesados, un elemento crucial para el éxito de un proyecto.
          Identifican y priorizan factores clave, como los estándares
          ambientales y las instalaciones de investigación de alta calidad,
          asegurándose de que todos los involucrados se enfoquen en el proyecto
          y sus implicaciones.
        </p>
      </MainLayout>
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import React from "react";
import HeroBanner from "../../../components/layout/hero/hero";
import MainLayout from "@/components/layout/main/main";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";

export default function HotelesPage() {
  const highlightQuote = {
    text: "Tanto si busca un hostal económico, un hotel de negocios en el centro de la ciudad o un complejo de lujo, en PolarisX ponemos a su disposición nuestros profundos conocimientos sobre el sector y un servicio a medida de las necesidades de su proyecto hotelero.",
    author: null as string | null,
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Sectores"]} currentPage="Hoteles" />
      <HeroBanner
        sectionId="hero-section-hoteles"
        backgroundImage="/sectores/sector-hoteles.webp"
        title="Hoteles"
        description="En PolarisX, comprendemos lo que garantiza la satisfacción del cliente y maximiza el potencial de los proyectos hoteleros. Sin importar el tamaño o las especificaciones, nuestros asesores saben cómo proporcionar el máximo valor desde la adquisición hasta el acondicionamiento del hotel."
      />

      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Nuestra experiencia"
        highlightQuote={highlightQuote}
      >
        {/* Contenido específico de la página */}
        <p className="intro-text">
          En PolarisX, los clientes acuden a nosotros para asesorarlos en una variedad de proyectos hoteleros. Aprecian nuestra experiencia y comprensión práctica de las presiones comerciales del sector.
        </p>
        <p>
          Independientemente del tipo de hotel o su ubicación, conocemos los factores que llevan a proyectos exitosos y rentables, proporcionando soluciones efectivas en términos de costos.
        </p>

        <h3>Experiencia especializada</h3>
        <p>
          Nuestro equipo acumula más de 13 años de experiencia en rubro construcción, combinada en la industria hotelera. Conocemos los elementos fundamentales para lograr la satisfacción del cliente y el retorno de la inversión, sin importar las especificaciones del proyecto.
        </p>
        <p>
          Nuestros clientes valoran nuestra comprensión de las tendencias actuales en el diseño de hoteles, así como nuestros profundos conocimientos en los mercados de construcción, mobiliario, instalaciones y equipamiento.
        </p>

        <h3>Soluciones rentables</h3>
        <p>
          Hemos ayudado a desarrollar proyectos hoteleros en diversos entornos donde el suelo es un bien muy preciado y la inversión de capital debe moverse con rapidez. Esta experiencia nos permite entender la importancia de una respuesta rápida para ayudar a identificar, definir y conseguir oportunidades de desarrollo viables. Nuestras prioridades son resolver asuntos clave y ahorrarle tiempo y dinero.
        </p>
        <p>
          No todos somos iguales. Innovamos y adaptamos nuestros servicios y equipo para satisfacer las necesidades del cliente. Con nuestra amplia base de datos de costos de construcción y normas de espacio, podemos demostrar el valor de la inversión y ofrecerle los resultados que necesita.
        </p>

        <h3>Trabajando para crear grandes espacios</h3>
        <p>
          Como consultores independientes, trabajamos con sus arquitectos y su equipo de diseño para ofrecerle los estándares que espera, sin pagar más de lo necesario y sin comprometer el diseño.
        </p>
      </MainLayout>
      
      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
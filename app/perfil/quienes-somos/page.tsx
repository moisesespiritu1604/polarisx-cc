import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import MainLayout from "@/components/layout/main/main";
import React from "react";
import ProyectosSelectosPage from "@/components/layout/proyectos-selectos/proyectos-selectos";
import "./quienes-somos.css";

export default function QuienesSomosPage() {
  
  // Configuración del índice de navegación
  const navigationIndex = {
    title: "Quiénes somos",
    items: [
      { 
        href: "/perfil/quienes-somos/vision-valores", 
        label: "Visión y Valores" 
      },
      { 
        href: "/perfil/quienes-somos/nuestra-historia", 
        label: "Nuestra Historia" 
      }
    ]
  };

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb parentPages={["Perfil"]} currentPage="Quiénes Somos" />
      
      {/* Sección principal usando MainLayout */}
      <MainLayout
        pageTitle="Quiénes somos"
        navigationIndex={navigationIndex}
      >
        {/* Contenido específico de la página */}
        <p>
          En PolarisX estamos comprometidos con la excelencia en la
          gestión de proyectos. Trabajamos en diversos sectores y
          entendemos los retos singulares de cada uno de ellos.
        </p>
        <p>
          Nos ubicamos de manera estratégica para asistir a nuestros
          clientes a nivel nacional, utilizando nuestra experiencia y
          conocimiento, para proporcionar soluciones eficientes.
        </p>
        <p>
          Nuestra filosofía es recupltar a los mejores profesionales,
          aquellos que poseen un amplio conocimiento en áreas
          específicas.
        </p>
        <p>
          Nuestro equipo está compuesto por profesionales dedicados y
          comprometidos con la calidad, detalle y sostenibilidad del
          sector. Nos dedicamos a desarrollar nuestro talento,
          esforzándonos por alcanzar los más altos estándares en todas
          nuestras actividades.
        </p>
      </MainLayout>

      {/* Sección Adicional - Portafolio de proyectos seleccionados */}
      <ProyectosSelectosPage />
    </>
  );
}
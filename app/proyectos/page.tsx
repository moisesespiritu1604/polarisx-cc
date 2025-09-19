"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import "./proyectos.css";

interface Project {
  nombre: string;
  imagen: string;
  enlace: string;
}

export default function ProyectosPage() {
  // Configuración de datos del carousel
  const blogPosts = [
    {
      imageSrc:
        "/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2.webp",
      imageAlt: "Carretera Longitudinal de la Sierra - Tramo 2",
      postTitle: "Carretera Longitudinal de la Sierra - Tramo 2",
      postUrl: "/blog/carretera-longitudinal-de-la-sierra-tramo-2",
    },
    {
      imageSrc: "/proyectos/proyecto-presa-sullana.webp",
      imageAlt: "Presa Sullana",
      postTitle: "Presa Sullana",
      postUrl: "/blog/presa-sullana",
    },
    {
      imageSrc: "/proyectos/proyecto-canal-miguel-checa.webp",
      imageAlt: "Canal Miguel Checa",
      postTitle: "Canal Miguel Checa",
      postUrl: "/blog/canal-miguel-checa",
    },
    {
      imageSrc: "/proyectos/proyecto-corredor-ferroviario-este.webp",
      imageAlt: "Corredor Ferroviario Este",
      postTitle: "Corredor Ferroviario Este",
      postUrl: "/blog/corredor-ferroviario-este",
    },
  ];

  // Estados y referencias del carousel
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteractingRef = useRef(false);

  // Estados del portafolio
  const [currentPage, setCurrentPage] = useState(0);

  // Datos del portafolio
  const projects: Project[] = [
    { 
      nombre: 'IE N° 14041 del C.P. Narihuala', 
      imagen: '/proyectos/proyecto-ie-n-14041-del-cp-narihuala.webp',
      enlace: '/proyectos/ie-n-14041-del-cp-narihuala' 
    },
    { 
      nombre: 'Emergencia Vial 020 – Tramo: ST 03', 
      imagen: '/proyectos/proyecto-emergencia-vial-020-tramo-st-03.webp', 
      enlace: '/proyectos/emergencia-vial-020-tramo-st-03'
    },
    { 
      nombre: 'Canal Miguel Checa', 
      imagen: '/proyectos/proyecto-canal-miguel-checa.webp',
      enlace: '/proyectos/canal-miguel-checa' 
    },
    { 
      nombre: 'Puente Irsa', 
      imagen: '/proyectos/proyecto-puente-irsa.webp',
      enlace: '/proyectos/puente-irsa' 
    },
    { 
      nombre: 'Corredor Vial Interocánico del Sur – Tramo 2, Cusco', 
      imagen: '/proyectos/proyecto-corredor-vial-interocanico-del-sur-tramo-2-cusco.webp',
      enlace: '/proyectos/corredor-vial-interocanico-del-sur-tramo-2-cusco' 
    },
    { 
      nombre: 'Carretera Longitudinal de la Sierra – Tramo 2', 
      imagen: '/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2.webp',
      enlace: '/proyectos/carretera-longitudinal-de-la-sierra-tramo-2' 
    },
    { 
      nombre: 'Presa Sullana', 
      imagen: '/proyectos/proyecto-presa-sullana.webp', 
      enlace: '/proyectos/presa-sullana' 
    },
    { 
      nombre: 'Corredor Ferroviario Este', 
      imagen: '/proyectos/proyecto-corredor-ferroviario-este.webp', 
      enlace: '/proyectos/corredor-ferroviario-este' 
    } 
  ];

  const projectsPerPage = 16;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Funciones de navegación del carousel
  const navigateToSlide = (targetIndex: number) => {
    const validIndex = (targetIndex + blogPosts.length) % blogPosts.length;
    setActiveSlideIndex(validIndex);
  };

  const initializeAutoPlay = () => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    autoPlayIntervalRef.current = setInterval(() => {
      if (!isUserInteractingRef.current) {
        setActiveSlideIndex(
          (currentIndex) => (currentIndex + 1) % blogPosts.length
        );
      }
    }, 10000);
  };

  const pauseAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  // Funciones del portafolio
  const getCurrentProjects = (): Project[] => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  const getDisplayRange = (): string => {
    const start = currentPage * projectsPerPage + 1;
    const end = Math.min((currentPage + 1) * projectsPerPage, projects.length);
    return `Mostrando ${start} a ${end} de ${projects.length}`;
  };

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Inicialización del carousel
  useEffect(() => {
    initializeAutoPlay();
    return () => pauseAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Proyectos" />
      
      <div className="blog-carousel-container">
        <div
          className="blog-carousel-wrapper"
          style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
          onMouseEnter={() => {
            isUserInteractingRef.current = true;
            pauseAutoPlay();
          }}
          onMouseLeave={() => {
            isUserInteractingRef.current = false;
            initializeAutoPlay();
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Entradas del Blog"
        >
          {blogPosts.map((post, slideIndex) => (
            <div
              className="blog-carousel-slide"
              key={post.postUrl}
              aria-hidden={activeSlideIndex !== slideIndex}
            >
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                width={1920}
                height={670}
                priority={slideIndex === 0}
              />
              <div className="blog-slide-content">
                <div className="blog-slide-info">
                  <h2>{post.postTitle}</h2>
                  <Link href={post.postUrl}>Leer más</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="blog-carousel-btn blog-carousel-btn-prev"
          aria-label="Entrada anterior"
          onClick={() => {
            navigateToSlide(activeSlideIndex - 1);
            initializeAutoPlay();
          }}
        >
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="blog-carousel-btn blog-carousel-btn-next"
          aria-label="Siguiente entrada"
          onClick={() => {
            navigateToSlide(activeSlideIndex + 1);
            initializeAutoPlay();
          }}
        >
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>

        <div
          className="blog-carousel-pagination"
          role="tablist"
          aria-label="Navegación de entradas"
        >
          {blogPosts.map((_, bulletIndex) => (
            <button
              key={bulletIndex}
              type="button"
              className={`blog-pagination-bullet${
                bulletIndex === activeSlideIndex
                  ? " blog-pagination-bullet-active"
                  : ""
              }`}
              aria-label={`Ir a la entrada ${bulletIndex + 1}`}
              aria-current={bulletIndex === activeSlideIndex}
              onClick={() => {
                navigateToSlide(bulletIndex);
                initializeAutoPlay();
              }}
            />
          ))}
        </div>
      </div>

      {/* Portafolio de Proyectos */}
      <section className="portfolio-section">
        <h3 className="portfolio-title">{getDisplayRange()}</h3>
        
        <div className="portfolio-grid">
          {getCurrentProjects().map((project, index) => (
            <div key={`${project.enlace}-${index}`} className="project-card">
              <Link href={project.enlace} className="project-link">
                <div className="project-image-container">
                  <Image
                    src={project.imagen}
                    alt={project.nombre}
                    width={450}
                    height={300}
                    className="project-image"
                  />
                </div>
              </Link>
              <Link href={project.enlace} className="project-info-link">
                <div className="project-info">
                  <h4 className="project-name">{project.nombre}</h4>
                  <i className="fa-solid fa-chevron-right project-arrow" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`pagination-link ${currentPage === index ? 'pagination-active' : ''}`}
                onClick={() => handlePageChange(index)}
                aria-label={`Ir a la página ${index + 1}`}
                aria-current={currentPage === index ? 'page' : undefined}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <div className="pagination-controls">
            <button
              type="button"
              className={`pagination-btn pagination-prev ${currentPage === 0 ? 'pagination-disabled' : ''}`}
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              aria-label="Página anterior"
            >
              <i className="fa-solid fa-caret-up" />
            </button>
            <button
              type="button"
              className={`pagination-btn pagination-next ${currentPage === totalPages - 1 ? 'pagination-disabled' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              aria-label="Página siguiente"
            >
              <i className="fa-solid fa-caret-up" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
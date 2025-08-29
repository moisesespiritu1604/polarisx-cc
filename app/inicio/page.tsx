"use client";

import "./inicio.css";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  // Configuración de datos del carousel
  const blogPosts = [
    {
      imageSrc:
        "/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2.webp",
      imageAlt: "Carretera Longitudinal de la Sierra - Tramo 2",
      postTitle: "Carretera Longitudinal de la Sierra - Tramo 2",
      postUrl: "/blog/carretera-longitudinal-de-la-sierra-tramo-2.html",
    },
    {
      imageSrc: "/proyectos/proyecto-presa-sullana.webp",
      imageAlt: "Presa Sullana",
      postTitle: "Presa Sullana",
      postUrl: "/blog/presa-sullana.html",
    },
    {
      imageSrc: "/proyectos/proyecto-canal-miguel-checa.webp",
      imageAlt: "Canal Miguel Checa",
      postTitle: "Canal Miguel Checa",
      postUrl: "/blog/canal-miguel-checa.html",
    },
    {
      imageSrc: "/proyectos/proyecto-corredor-ferroviario-este.webp",
      imageAlt: "Corredor Ferroviario Este",
      postTitle: "Corredor Ferroviario Este",
      postUrl: "/blog/corredor-ferroviario-este.html",
    },
  ];

  // Estados y referencias del carousel
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteractingRef = useRef(false);

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

  // Inicialización del carousel
  useEffect(() => {
    initializeAutoPlay();
    return () => pauseAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="hero-section-inicio">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Somos PolarisX</h1>
            <p className="hero-description">
              PolarisX es una empresa independiente del sector construcción.
              Nuestra visión es crear un negocio con alianzas estratégicas, que
              atraiga a los mejores clientes, proyectos y personal en la
              industria.
            </p>
          </div>
        </div>
      </section>
      <section id="blog-section">
        <div className="blog-container">
          <div>
            <div className="blog-section-header">
              <div className="blog-header-content">
                <h2 className="blog-section-title">Blog</h2>
                <div>
                  <p>
                    <Link href="/blog">
                      Ir a Blog
                      <i className="fa-solid fa-caret-up"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="blog-content">
              <div className="blog-grid">
                <div className="main-grid-container desktop-only">
                  <div className="featured-post">
                    <div className="post-wrapper">
                      <div className="blog-post">
                        <Link href="/blog/geometria-de-la-carretera">
                          <Image
                            src="/inicio/blog-geometria-de-la-carretera.webp"
                            alt="Geometría de la Carretera"
                            width={800} // pon un ancho mayor al real de tu contenedor
                            height={500}
                            unoptimized
                          />
                          <div className="post-info">
                            <p>21.06.24</p>
                            <h4>
                              <span>Publicación</span> Presentación del Conector
                              de Navisworks para el Intercambio de Datos de
                              Autodesk
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-posts">
                    <div className="post-wrapper">
                      <div className="blog-post">
                        <Link href="/blog/presentacion-del-conector-de-navisworks-para-el-intercambio-de-datos-de-autodesk">
                          <Image
                            src="/inicio/blog-presentacion-del-conector-de-navisworks-para-el-intercambio-de-datos-de-autodesk.gif"
                            alt="Presentación del Conector de Navisworks para el Intercambio de Datos de Autodesk"
                            width={400}
                            height={250}
                            unoptimized
                          />
                          <div className="post-info">
                            <p>20.06.24</p>
                            <h4>
                              <span>Publicación</span> Método revisado asegura
                              precisión y consistencia en estimaciones y
                              planificación de construcción
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="post-wrapper">
                      <div className="blog-post">
                        <Link href="/blog/uso-del-modelo-bim-analizar-criterios-de-seleccion-del-sitio">
                          <Image
                            src="/inicio/blog-uso-del-modelo-bim-analizar-criterios-de-seleccion-del-sitio.webp"
                            alt="Uso del Modelo BIM: Analizar Criterios de Selección del Sitio"
                            width={400}
                            height={250}
                            unoptimized
                          />
                          <div className="post-info">
                            <p>19.06.24</p>
                            <h4>
                              <span>Publicación</span> Uso del Modelo BIM:
                              Analizar Criterios de Selección del Sitio
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="post-wrapper">
                      <div className="blog-post">
                        <Link href="/blog/13s-90-metodo-recomendado-para-determinar-el-area-de-construccion">
                          <Image
                            src="/inicio/blog-13s-90-metodo-recomendado-para-determinar-el-area-de-construccion.webp"
                            alt="13S-90: Método Recomendado para Determinar el Área de Construcción"
                            width={400}
                            height={250}
                            unoptimized
                          />
                          <div className="post-info">
                            <p>18.06.24</p>
                            <h4>
                              <span>Publicación</span> 13S-90: Método
                              Recomendado para Determinar el Área de
                              Construcción
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-grid">
                <div className="cards-grid">
                  <div className="cards-container">
                    <div className="post-wrapper mobile-tablet-only">
                      <div className="blog-card">
                        <div>
                          <Link href="/blog/geometria-de-la-carretera">
                            <Image
                              src="/inicio/blog-geometria-de-la-carretera.webp"
                              alt="Geometría de la Carretera"
                              width={400}
                              height={250}
                              unoptimized
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <p className="card-date">21.06.24</p>
                          <h4>
                            <span>Publicación</span> Artículo sobre geometría
                            horizontal y vertical de carreteras y diseño vial
                          </h4>
                          <div className="read-more">
                            <Link href="/blog/geometria-de-la-carretera">
                              <p>Leer Mas</p>
                              <i className="fa-solid fa-caret-up"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="post-wrapper mobile-tablet-only">
                      <div className="blog-card">
                        <div>
                          <Link href="/blog/presentacion-del-conector-de-navisworks-para-el-intercambio-de-datos-de-autodesk">
                            <Image
                              src="/inicio/blog-presentacion-del-conector-de-navisworks-para-el-intercambio-de-datos-de-autodesk.gif"
                              alt="Presentación del Conector de Navisworks para el Intercambio de Datos de Autodesk"
                              width={400}
                              height={250}
                              unoptimized
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <p className="card-date">20.06.24</p>
                          <h4>
                            <span>Publicación</span> Método revisado asegura
                            precisión y consistencia en estimaciones y
                            planificación de construcción
                          </h4>
                          <div className="read-more">
                            <Link href="/blog/presentacion-del-conector-de-navisworks-para-el-intercambio-de-datos-de-autodesk">
                              <p>Leer Mas</p>
                              <i className="fa-solid fa-caret-up"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="post-wrapper mobile-tablet-only">
                      <div className="blog-card">
                        <div>
                          <Link href="/blog/uso-del-modelo-bim-analizar-criterios-de-seleccion-del-sitio">
                            <Image
                              src="/inicio/blog-uso-del-modelo-bim-analizar-criterios-de-seleccion-del-sitio.webp"
                              alt="Uso del Modelo BIM: Analizar Criterios de Selección del Sitio"
                              width={400}
                              height={250}
                              unoptimized
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <p className="card-date">19.06.24</p>
                          <h4>
                            <span>Publicación</span> Uso del Modelo BIM:
                            Analizar Criterios de Selección del Sitio
                          </h4>
                          <div className="read-more">
                            <Link href="/blog/uso-del-modelo-bim-analizar-criterios-de-seleccion-del-sitio">
                              <p>Leer Mas</p>
                              <i className="fa-solid fa-caret-up"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="post-wrapper mobile-tablet-only">
                      <div className="blog-card">
                        <div>
                          <Link href="/blog/13s-90-metodo-recomendado-para-determinar-el-area-de-construccion">
                            <Image
                              src="/inicio/blog-13s-90-metodo-recomendado-para-determinar-el-area-de-construccion.webp"
                              alt="13S-90: Método Recomendado para Determinar el Área de Construcción"
                              width={400}
                              height={250}
                              unoptimized
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <p className="card-date">18.06.24</p>
                          <h4>
                            <span>Publicación</span> 13S-90: Método Recomendado
                            para Determinar el Área de Construcción
                          </h4>
                          <div className="read-more">
                            <Link href="/blog/13s-90-metodo-recomendado-para-determinar-el-area-de-construccion">
                              <p>Leer Mas</p>
                              <i className="fa-solid fa-caret-up"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import "./blog.css";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/layout/hero/hero";



export default function BlogPage() {
  return (
    <>
      <Breadcrumb currentPage="Blog" />
      <HeroBanner
        sectionId="hero-section-blog"
        backgroundImage="/blog/blog-portada.webp"
        title="Blog"
        description="Explora nuestras nuevas publicaciones en ingeniería y construcción: temas innovadores y actualizaciones clave para mantenerte al día en el sector. ¡No te lo pierdas!"
      />
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
    </>
  );
}

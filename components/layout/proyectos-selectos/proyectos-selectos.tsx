
import React from "react";
import Image from "next/image";
import "./proyectos-selectos.css";


export default function ProyectosSelectosPage() {
  return (
    <section id="featured-projects-section">
            <div className="featured-projects-container">
              <div className="section-header">
                <h2>Una selección de proyectos</h2>
              </div>
    
              <div className="projects-grid">
                <div className="project-card">
                  <a href="/proyectos/carretera-longitudinal-de-la-sierra-tramo-2">
                    <Image
                      src="/proyectos/proyecto-carretera-longitudinal-de-la-sierra-tramo-2.webp"
                      alt="Carretera longitudinal de la Sierra - tramo 2"
                      width={400}
                      height={300}
                    />
                  </a>
                  <a href="/proyectos/carretera-longitudinal-de-la-sierra-tramo-2">
                    <div className="project-info-overlay">
                      <h4>Carretera longitudinal de la Sierra - Tramo 2</h4>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </a>
                </div>
    
                <div className="project-card">
                  <a href="/proyectos/presa-sullana">
                    <Image
                      src="/proyectos/proyecto-presa-sullana.webp"
                      alt="Presa Sullana"
                      width={400}
                      height={300}
                    />
                  </a>
                  <a href="/proyectos/presa-sullana">
                    <div className="project-info-overlay">
                      <h4>Presa Sullana</h4>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </a>
                </div>
    
                <div className="project-card">
                  <a href="/proyectos/canal-miguel-checa">
                    <Image
                      src="/proyectos/proyecto-canal-miguel-checa.webp"
                      alt="Canal Miguel Checa"
                      width={400}
                      height={300}
                    />
                  </a>
                  <a href="/proyectos/canal-miguel-checa">
                    <div className="project-info-overlay">
                      <h4>Canal Miguel Checa</h4>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </a>
                </div>
    
                <div className="project-card">
                  <a href="/proyectos/corredor-ferroviario-este">
                    <Image
                      src="/proyectos/proyecto-corredor-ferroviario-este.webp"
                      alt="Corredor Ferroviario Este"
                      width={400}
                      height={300}
                    />
                  </a>
                  <a href="/proyectos/corredor-ferroviario-este">
                    <div className="project-info-overlay">
                      <h4>Corredor Ferroviario Este</h4>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
  );
}
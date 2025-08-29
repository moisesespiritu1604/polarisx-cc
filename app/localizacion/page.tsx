"use client"
import React, { useState, useRef, useEffect } from "react";
import Breadcrumb from "../../components/layout/breadcrumb/breadcrumb";
import Image from "next/image";
import "./localizacion.css";

export default function LocalizacionPage() {
  const [activeRegion, setActiveRegion] = useState<string>("");              // string
  const [currentActiveRegion, setCurrentActiveRegion] = useState<string | null>(null); // string | null
  const explorerPanelRef = useRef<HTMLDivElement | null>(null); 

  // Función para mostrar una región específica
  const showRegion = (regionName: string | null) => {
    if (regionName) {
      setActiveRegion(regionName);
      setCurrentActiveRegion(regionName);
    } else {
      setActiveRegion('');
      setCurrentActiveRegion(null);
    }
  };

  // Manejador de click en botones
  const handleRegionClick = (region: string) => {
    if (currentActiveRegion === region) {
      // Si ya está activa, la ocultamos
      showRegion(null);
    } else {
      // Mostrar la nueva región
      showRegion(region);
    }
  };

  // Manejador de hover en botones
  const handleRegionHover = (region: string) => {
    showRegion(region);
  };

  // Manejador cuando el mouse sale del panel
  const handlePanelMouseLeave = () => {
    // Solo volver al mapa base si no hay una región seleccionada
    if (!currentActiveRegion) {
      showRegion(null);
    }
  };

  // Effect para manejar clicks fuera del mapa
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInsideMapContainer = target.closest('.interactive-map-container');
      const isInsideButtons = target.closest('.region-buttons-container');
      
      if (!isInsideMapContainer && !isInsideButtons && currentActiveRegion) {
        showRegion(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [currentActiveRegion]);
  return (
    <>
      <Breadcrumb currentPage="localizacion" />
      {/* Sección de encabezado */}
      <section className="location-header-section">
        <div className="location-header-content">
          <h1>PolarisX en la Región</h1>
          <p>Con presencia en diversas localidades, somos una consultora de ámbito regional. Cada una de nuestras oficinas cuenta con personal local con experiencia y conocimientos muy específicos. Combinamos talento local con conocimientos técnicos para ayudar a los clientes a enfrentar desafíos en diferentes áreas, sin fronteras.</p>
        </div>
      </section>
      
      {/* Contenedor principal del mapa interactivo */}
      <div className="main-location-container">
        <div className="layout-wrapper">
          {/* Contenedor del mapa */}
          <div className="interactive-map-container">
            {/* Mapa base de Perú - siempre visible */}
            <div className="base-map">
              <Image 
                src="/localizacion/mapa-peru.webp" 
                alt="Mapa de Perú" 
                width={600} 
                height={600}
                priority
              />
            </div>

            {/* Regiones overlay */}
            <div 
              className={`region-overlay region-north ${activeRegion === 'norte' ? 'region-active' : ''}`}
              onMouseEnter={() => handleRegionHover('norte')}
              style={{ zIndex: activeRegion === 'norte' ? 3 : 2 }}
            >
              <Image 
                src="/localizacion/mapa-zona-norte.webp" 
                alt="Región Norte"
                width={600} 
                height={600}
              />
            </div>
            <div 
              className={`region-overlay region-center ${activeRegion === 'centro' ? 'region-active' : ''}`}
              onMouseEnter={() => handleRegionHover('centro')}
              style={{ zIndex: activeRegion === 'centro' ? 3 : 2 }}
            >
              <Image 
                src="/localizacion/mapa-zona-centro.webp" 
                alt="Región Centro"
                width={600} 
                height={600}
              />
            </div>
            <div 
              className={`region-overlay region-south ${activeRegion === 'sur' ? 'region-active' : ''}`}
              onMouseEnter={() => handleRegionHover('sur')}
              style={{ zIndex: activeRegion === 'sur' ? 3 : 2 }}
            >
              <Image 
                src="/localizacion/mapa-zona-sur.webp" 
                alt="Región Sur"
                width={600} 
                height={600}
              />
            </div>
            <div 
              className={`region-overlay region-east ${activeRegion === 'oriente' ? 'region-active' : ''}`}
              onMouseEnter={() => handleRegionHover('oriente')}
              style={{ zIndex: activeRegion === 'oriente' ? 3 : 2 }}
            >
              <Image 
                src="/localizacion/mapa-zona-oriente.webp" 
                alt="Región Oriente"
                width={600} 
                height={600}
              />
            </div>
          </div>

          {/* Panel lateral de exploración */}
          <div 
            className="location-explorer-panel"
            ref={explorerPanelRef}
            onMouseLeave={handlePanelMouseLeave}
          >
            <h3>Explorar Localizaciones</h3>
            <div className="region-buttons-container">
              <button 
                className={`region-button ${currentActiveRegion === 'norte' ? 'region-button-active' : ''}`}
                onClick={() => handleRegionClick('norte')}
                onMouseEnter={() => handleRegionHover('norte')}
              >
                Región Norte
              </button>
              <button 
                className={`region-button ${currentActiveRegion === 'centro' ? 'region-button-active' : ''}`}
                onClick={() => handleRegionClick('centro')}
                onMouseEnter={() => handleRegionHover('centro')}
              >
                Región Metropolitana y Centro
              </button>
              <button 
                className={`region-button ${currentActiveRegion === 'sur' ? 'region-button-active' : ''}`}
                onClick={() => handleRegionClick('sur')}
                onMouseEnter={() => handleRegionHover('sur')}
              >
                Región Sur
              </button>
              <button 
                className={`region-button ${currentActiveRegion === 'oriente' ? 'region-button-active' : ''}`}
                onClick={() => handleRegionClick('oriente')}
                onMouseEnter={() => handleRegionHover('oriente')}
              >
                Región Oriente
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

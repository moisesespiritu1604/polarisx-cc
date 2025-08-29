"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';
import { useRouter, usePathname } from 'next/navigation';


export default function Header() {

  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 👉 refs para detectar clicks fuera
  const submenuRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // Función para toggle del menú móvil
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (newState) {
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 10000);
    }
  };

  // Función para toggle de submenús principales
  const toggleSubmenu = (menuId: string) => {
    const submenuElement = document.getElementById('submenu-container-' + menuId);
    const activeSubmenus = document.querySelectorAll('.submenu-container.active');
    
    // Oculta todos los submenús activos
    activeSubmenus.forEach((item) => {
      if (item !== submenuElement) {
        item.classList.remove('active');
      }
    });

    // Activa o desactiva el submenú actual
    if (submenuElement) {
      submenuElement.classList.toggle('active');
      setActiveSubmenu(submenuElement.classList.contains('active') ? menuId : null);
    }
  }

  // Función para menú de idiomas
  const toggleLanguageSelector = () => {
    const languageMenu = document.getElementById("language-dropdown");
    if (languageMenu) {
      if (languageMenu.style.display === "block") {
        languageMenu.style.display = "none";
        setIsLanguageSelectorOpen(false);
      } else {
        languageMenu.style.display = "block";
        setIsLanguageSelectorOpen(true);
      }
    }
  }
  // 👉 Detectar click fuera para cerrar menús
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current && !submenuRef.current.contains(event.target as Node) &&
        languageRef.current && !languageRef.current.contains(event.target as Node)
      ) {
        setActiveSubmenu(null);
        setIsLanguageSelectorOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  // 🔒 Cierra todos los submenús y menús auxiliares
  const closeAllMenus = () => {
    setActiveSubmenu(null);
    setIsLanguageSelectorOpen(false);
    const activeSubmenus = document.querySelectorAll('.submenu-container.active');
    activeSubmenus.forEach((item) => item.classList.remove('active'));
  };

  // 👇 Cierra el submenú si se hace click en cualquier enlace dentro del submenú
  const handleSubmenuItemClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor) {
      // No evitamos la navegación; solo cerramos antes
      closeAllMenus();
    }
  };
  return (
    <section id="header-section">
      <header className="main-header">
        <div className="header-content" ref={submenuRef}>
          <div className="primary-navigation">
            <div className="brand-logo">
              <Link href="/inicio">
                <Image 
                  src="/header/logo2.png" 
                  alt="PolarisX Logo" 
                  width={152} 
                  height={40}
                  className="logo-image"
                />
              </Link>
            </div>
            <div id="desktop-navigation">
              <ul className="main-menu">
                <li>
                  <div className="menu-item" onClick={() => toggleSubmenu('profile')}>
                    <Link href="#">PERFIL</Link>
                    <i className="fa-solid fa-caret-up"></i>
                  </div>
                  <div 
                    id="submenu-container-profile" 
                    className={`submenu-container ${activeSubmenu === 'profile' ? 'active' : ''}`}
                  >
                    <div className="submenu-content" onClick={handleSubmenuItemClick}>
                      <div className="submenu-intro">
                        <p className="submenu-description">
                          PolarisX es una empresa independiente del sector construcción. 
                          Nuestra visión es crear un negocio con alianzas estratégicas, 
                          que atraiga a los mejores clientes, proyectos y personal en la industria.
                        </p>
                        <Link href="/perfil">Perfil</Link>
                      </div>
                      <div className="submenu-section">
                        <div className="submenu-column">
                          <Link href="/perfil/quienes-somos">Quiénes Somos</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/perfil/quienes-somos/vision-valores">Misión y Visión</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/perfil/quienes-somos/nuestra-historia">Nuestra Historia</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="menu-item" onClick={() => toggleSubmenu('locations')}>
                    <Link href="#">LOCALIZACIONES</Link>
                    <i className="fa-solid fa-caret-up"></i>
                  </div>
                  <div 
                    id="submenu-container-locations" 
                    className={`submenu-container ${activeSubmenu === 'locations' ? 'active' : ''}`}
                  >
                    <div className="submenu-content" onClick={handleSubmenuItemClick}>
                      <div className="submenu-intro">
                        <p className="submenu-description">
                          Con oficinas repartidas por 5 regiones, somos una empresa de ámbito nacional. 
                          Cada una de nuestras oficinas cuenta con personal local con experiencia y 
                          conocimientos muy específicos. Aunamos talento local con conocimientos técnicos 
                          globales para ayudar a los clientes a hacer frente a los desafíos en las regiones, sin fronteras.
                        </p>
                        <Link href="/localizacion">Localizaciones</Link>
                      </div>
                      <div className="regions-container">
                        <div className="region-item">
                          <Link href="#" className="region-link">
                            <Image src="/header/region-metropolitana-centro.png" alt="Región Metropolitana y Centro" width={100} height={130} />
                          </Link>
                          <Link href="#">Región Metropolitana y Centro</Link>
                        </div>
                        <div className="vertical-divider"></div>
                        <div className="region-item">
                          <Link href="#" className="region-link">
                            <Image src="/header/region-sur.png" alt="Región Sur" width={100} height={130} />
                          </Link>
                          <Link href="#">Región Sur</Link>
                        </div>
                        <div className="vertical-divider"></div>
                        <div className="region-item">
                          <Link href="#" className="region-link">
                            <Image src="/header/region-norte.png" alt="Región Norte" width={100} height={130} />
                          </Link>
                          <Link href="#">Región Norte</Link>
                        </div>
                        <div className="vertical-divider"></div>
                        <div className="region-item">
                          <Link href="#" className="region-link">
                            <Image src="/header/region-oriente.png" alt="Región Oriente" width={100} height={130} />
                          </Link>
                          <Link href="#">Región Oriente</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="menu-item" onClick={() => toggleSubmenu('sectors')}>
                    <Link href="#">SECTORES</Link>
                    <i className="fa-solid fa-caret-up"></i>
                  </div>
                  <div 
                    id="submenu-container-sectors" 
                    className={`submenu-container ${activeSubmenu === 'sectors' ? 'active' : ''}`}
                  >
                    <div className="submenu-content" onClick={handleSubmenuItemClick}>
                      <div className="submenu-intro">
                        <p className="submenu-description">
                          Contamos con experiencia en casi todos los sectores industriales de la construcción, 
                          aportando una amplia gama de habilidades y conocimientos especializados a cada proyecto.
                        </p>
                        <Link href="/sectores">Sectores</Link>
                      </div>
                      <div className="sectors-grid">
                        <div className="submenu-column">
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/sectores/oficinas">Oficinas</Link>
                              <Link href="/sectores/oficinas"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/sectores/energia-petroleo-y-gas">Energía, Petróleo y Gas</Link>
                              <Link href="/sectores/energia-petroleo-y-gas"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                        <div className="submenu-column">
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/sectores/sector-publico">Sector Público</Link>
                              <Link href="/sectores/sector-publico"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/sectores/residencial">Residencial</Link>
                              <Link href="/sectores/residencial"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                        <div className="submenu-column">
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/sectores/educacion">Educación</Link>
                              <Link href="/sectores/educacion"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/sectores/sanidad">Salud</Link>
                              <Link href="/sectores/sanidad"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                        <div className="submenu-column">
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/sectores/transporte-infraestructura">Transporte e Infraestructura</Link>
                              <Link href="/sectores/transporte-infraestructura"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/sectores/hoteles">Hoteles</Link>
                              <Link href="/sectores/hoteles"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="menu-item" onClick={() => toggleSubmenu('services')}>
                    <Link href="#">SERVICIOS</Link>
                    <i className="fa-solid fa-caret-up"></i>
                  </div>
                  <div 
                    id="submenu-container-services" 
                    className={`submenu-container ${activeSubmenu === 'services' ? 'active' : ''}`}
                  >
                    <div className="submenu-content" onClick={handleSubmenuItemClick}>
                      <div className="submenu-intro">
                        <p className="submenu-description">
                          Como consultora multidisciplinar independiente, ofrecemos soluciones para todas 
                          las etapas del ciclo de vida de un proyecto de construcción y promoción inmobiliaria.
                        </p>
                        <Link href="/servicios">Servicios</Link>
                      </div>
                      <div className="services-grid">
                        {/* Consultoría */}
                        <div className="submenu-column">
                          <Link href="/servicios/consultoria">Consultoría</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/servicios/consultoria/gestion-de-proyectos-y-programas">Gestión de Proyectos y Programas</Link>
                              <Link href="/servicios/consultoria/gestion-de-proyectos-y-programas"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/consultoria/servicios-de-arquitectura-e-ingenieria">Servicios de Arquitectura e Ingeniería</Link>
                              <Link href="/servicios/consultoria/servicios-de-arquitectura-e-ingenieria"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/consultoria/bim-y-gestion-de-la-informacion">BIM y Gestión de la Información</Link>
                              <Link href="/servicios/consultoria/bim-y-gestion-de-la-informacion"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/consultoria/estudios-de-preinversion">Estudios de Preinversión</Link>
                              <Link href="/servicios/consultoria/estudios-de-preinversion"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/consultoria/resolucion-de-conflictos-y-peritajes">Resolución de Conflictos y Peritajes</Link>
                              <Link href="/servicios/consultoria/resolucion-de-conflictos-y-peritajes"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/consultoria/gestion-del-riesgo">Gestión del Riesgo</Link>
                              <Link href="/servicios/consultoria/gestion-del-riesgo"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                        
                        {/* Gestión de Costos */}
                        <div className="submenu-column">
                          <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos">Gestión de Costos y Administración de Contratos</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/benchmarking-y-auditorias">Benchmarking y Auditorías</Link>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/benchmarking-y-auditorias"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos">Gestión de Costos</Link>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-de-costos"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/estrategias-de-contratacion">Estrategias de Contratación</Link>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/estrategias-de-contratacion"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/control-de-proyectos">Control de Proyectos</Link>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/control-de-proyectos"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-del-mantenimiento">Gestión del Mantenimiento</Link>
                              <Link href="/servicios/gestion-de-costos-y-administracion-de-contratos/gestion-del-mantenimiento"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>

                        {/* Construcción */}
                        <div className="submenu-column">
                          <Link href="/servicios/construccion">Construcción</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/servicios/construccion/edificacion-civil">Edificación Civil</Link>
                              <Link href="/servicios/construccion/edificacion-civil"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/construccion/infraestructuras-de-transporte">Infraestructuras de Transporte</Link>
                              <Link href="/servicios/construccion/infraestructuras-de-transporte"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/construccion/obras-hidraulicas">Obras Hidráulicas</Link>
                              <Link href="/servicios/construccion/obras-hidraulicas"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>

                        {/* Gestión de Propiedades */}
                        <div className="submenu-column">
                          <Link href="/servicios/gestion-de-propiedades-y-activos">Gestión de propiedades y activos</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/servicios/gestion-de-propiedades-y-activos/seguridad-y-salud">Seguridad y Salud</Link>
                              <Link href="/servicios/gestion-de-propiedades-y-activos/seguridad-y-salud"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/gestion-de-propiedades-y-activos/gestion-de-operaciones-e-instalaciones">Gestión de Operaciones e Instalaciones</Link>
                              <Link href="/servicios/gestion-de-propiedades-y-activos/gestion-de-operaciones-e-instalaciones"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/servicios/gestion-de-propiedades-y-activos/auditorias-de-calidad">Auditorías de Calidad</Link>
                              <Link href="/servicios/gestion-de-propiedades-y-activos/auditorias-de-calidad"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="menu-item">
                    <Link href="/proyectos">PROYECTOS</Link>
                  </div>
                </li>

                <li>
                  <div className="menu-item menu-item-spacing" onClick={() => toggleSubmenu('training')}>
                    <Link href="#">FORMACIÓN</Link>
                    <i className="fa-solid fa-caret-up"></i>
                  </div>
                  <div 
                    id="submenu-container-training" 
                    className={`submenu-container ${activeSubmenu === 'training' ? 'active' : ''}`}
                  >
                    <div className="submenu-content" onClick={handleSubmenuItemClick}>
                      <div className="submenu-intro">
                        <p className="submenu-description">
                          En PolarisX, ofrecemos una gama de cursos diseñados para impulsar tu carrera 
                          en tecnología e innovación. Nuestro enfoque práctico y orientado a la industria 
                          te preparará para los desafíos del mundo digital actual.
                        </p>
                        <Link href="/formacion">Cursos</Link>
                      </div>
                      <div className="training-grid">
                        {/* BIM - Modelamiento */}
                        <div className="submenu-column">
                          <Link href="#">BIM - Modelamiento</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/formacion/cursos-bim-modelamiento/revit-structure">Revit Structure</Link>
                              <Link href="/formacion/cursos-bim-modelamiento/revit-structure"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/formacion/cursos-bim-modelamiento/civil-3d">Civil 3D</Link>
                              <Link href="/formacion/cursos-bim-modelamiento/civil-3d"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Navisworks</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Revit Architecture</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Revit MEP</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Infraworks</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>

                        {/* BIM - Gestión */}
                        <div className="submenu-column">
                          <Link href="#">BIM - Gestión</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="#">BIM: Una Introducción</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/formacion/cursos-bim-gestion/planificacion-bim-para-proyectos">Planificación BIM para Proyectos</Link>
                              <Link href="/formacion/cursos-bim-gestion/planificacion-bim-para-proyectos"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Planificación BIM para Organizaciones</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Estandarización BIM</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>

                        {/* Gestión de Proyectos */}
                        <div className="submenu-column">
                          <Link href="#">Gestión de Proyectos</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="/formacion/cursos-gestion-de-proyectos/fundamentos-de-la-gestion-de-proyectos">Fundamentos de la Gestión de Proyectos</Link>
                              <Link href="/formacion/cursos-gestion-de-proyectos/fundamentos-de-la-gestion-de-proyectos"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión de Cambios</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión de Costos</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión del Cronograma</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión de Riesgos</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión de Contratos</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión de la Calidad</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Gestión de Diseño</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>

                        {/* Diseño */}
                        <div className="submenu-column">
                          <Link href="#">Diseño</Link>
                          <hr />
                          <ul className="submenu-list">
                            <li>
                              <Link href="#">Diseño de Edificación Civil</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="/formacion/cursos-diseno/diseno-de-infraestructuras-de-transporte">Diseño de Infraestructuras de Transporte</Link>
                              <Link href="/formacion/cursos-diseno/diseno-de-infraestructuras-de-transporte"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                            <li>
                              <Link href="#">Diseño de Obras Hidráulicas</Link>
                              <Link href="#"><i className="fa-solid fa-angle-down menu-arrow"></i></Link>
                            </li>
                            <hr />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          
          <div className="secondary-navigation" ref={languageRef}>
            <div id="language-selector-container">
              <div className="language-selector">
                <div onClick={toggleLanguageSelector}>
                  <span className="language-text">Español</span>
                  <i className="fa-solid fa-caret-up"></i>
                </div>
                {isLanguageSelectorOpen && (
                  <nav id="language-dropdown">
                    <ul>
                      <li>
                        <Link href="#">English</Link>
                        <hr />
                      </li>
                      <li>
                        <Link href="#">Español</Link>
                        <hr />
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            </div>
            <div className="search-container">
              <span className="search-icon"><i className="fa-solid fa-search"></i></span>
              <input type="text" placeholder="Buscar en polarisx-cc.com" />
            </div>
            <div className="utility-nav">
              <ul>
                <li><Link href="/blog">Blog</Link></li>
                <p>|</p>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-white shadow-lg border-b border-gray-200 z-[1000] animate-in slide-in-from-top-3 duration-200">
          <div className="px-8 py-4">
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  pathname === '/' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Inicio
              </button>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/perfil');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  pathname === '/perfil' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Perfil
              </button>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/localizaciones');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  pathname === '/localizaciones' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Localizaciones
              </button>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/sectores');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  pathname === '/sectores' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Sectores
              </button>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/servicios');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  pathname === '/servicios' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Servicios
              </button>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/proyectos');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  pathname === '/proyectos' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Proyectos
              </button>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/formacion');
                }}
                className={`text-center p-4 font-medium text-sm uppercase tracking-wide transition-all duration-200 border-b-2 col-start-2 ${
                  pathname === '/formacion' 
                    ? 'border-b-[#f7c400] bg-[#f7c400]/10 text-black shadow-sm' 
                    : 'border-b-transparent text-black hover:border-b-[#f7c400] hover:bg-[#f7c400]/5'
                }`}
              >
                Formación
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import Link from "next/link";
import "./main.css";

interface HighlightQuote {
  text: string;
  author?: string | null;
}

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationIndex {
  title: string;
  items: NavigationItem[];
}

interface MainLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
  highlightQuote?: HighlightQuote | null;
  navigationIndex?: NavigationIndex | null;
  theme?: "primary" | "secondary";
}

export default function MainLayout({ 
  pageTitle, 
  children, 
  highlightQuote = null, 
  navigationIndex = null,
  theme = "primary" 
}: MainLayoutProps) {
  return (
    <>
      {/* Sección principal estandarizada */}
      <section className="main-section">
        <article>
          <div className="main-container">
            {/* Contenedor principal del contenido */}
            <div className="content-wrapper">
              {/* Contenido de texto principal */}
              <div className="text-content">
                {/* El contenido específico de cada página va aquí */}
                <h1>{pageTitle}</h1>
                {children}
              </div>

              {/* Módulo de compartir en redes sociales */}
              <div className="share-module">
                <div className="share-title">
                  <h2>Compartir</h2>
                </div>
                <div className="social-media-container">
                  <ul className="social-media-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/polarisx-cc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/polarisx.construction"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/polarisxc.construction/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Información lateral - Configuración dinámica */}
            <aside className="sidebar-info">
              {/* Información de contacto - Siempre presente */}
              <div className="contact-section">
                <div className="contact-info-container">
                  <ul className="contact-info-list">
                    <li>
                      <a
                        href="mailto:informes@polarisx-cc.com"
                        aria-label="Email"
                      >
                        <i className="fa-solid fa-envelope"></i>
                        informes@polarisx-cc.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://chat.whatsapp.com/K3BBoRQ8LBlBPjZ4dC3nXU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!text-black"
                        aria-label="WhatsApp"
                      >
                        <i className="fa-solid fa-phone"></i>
                        +51 987 425 953
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cita destacada - Opcional */}
              {highlightQuote && (
                <div className={`highlight-quote-sidebar ${theme === 'secondary' ? 'secondary-theme' : ''}`}>
                  <blockquote>
                    <i className="fa-solid fa-quote-left"></i>
                    {highlightQuote.text}
                    <i className="fa-solid fa-quote-right"></i>
                    {highlightQuote.author && (
                      <span className="quote-author">
                        {highlightQuote.author}
                      </span>
                    )}
                  </blockquote>
                </div>
              )}

              {/* Índice de navegación - Opcional */}
              {navigationIndex && (
                <div className={`navigation-index ${theme === 'secondary' ? 'secondary-theme' : ''}`}>
                  <div className="navigation-title">
                    <h2>{navigationIndex.title}</h2>
                  </div>
                  <div className="navigation-body">
                    <ul>
                      {navigationIndex.items.map((item, index) => (
                        <li key={index}>
                          <Link href={item.href}>
                            {item.label}
                            <i className="fa-solid fa-chevron-right"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </article>
      </section>
    </>
  );
}
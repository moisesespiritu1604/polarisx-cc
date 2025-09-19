import React from 'react';
import "./breadcrumb.css";

// Tipos para las props del componente
interface BreadcrumbProps {
  currentPage: string;
  parentPages?: string[];
  icon?: string;
}

// Componente Breadcrumb dinámico y reutilizable
const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  currentPage, 
  parentPages = [], 
  icon = "fa-solid fa-house" 
}) => {
  return (
    <div className="breadcrumb-wrapper">
      <div className="main-container-breadcrumb">
        <nav className="breadcrumb-navigation">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <i className={icon}></i>
            </li>
            {parentPages.map((page, index) => (
              <li key={index} className="breadcrumb-item">
                <span className="breadcrumb-separator">/</span>
                {page}
              </li>
            ))}
            <li className="breadcrumb-item">
              <span className="breadcrumb-separator">/</span>
              {currentPage}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
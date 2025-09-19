"use client";
import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import React, { useState } from "react";
import "./contacto.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Cambio en inputs/textarea
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Mensaje enviado correctamente");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      {/* Navegación breadcrumb */}
      <Breadcrumb currentPage="Contacto" />
      
      {/* Banner principal con imagen de fondo */}
      <HeroBanner
        sectionId="hero-section-contacto"
        backgroundImage="/contacto/contacto.webp"
        title="Contacto"
        description="En Polarisx, valoramos la comunicación con nuestros clientes y socios. Estamos aquí para atender sus consultas, recibir sus comentarios y brindarle el soporte que necesita. Nuestro equipo de atención al cliente está disponible a través de múltiples canales para garantizar una respuesta rápida y eficiente."
      />
      
      {/* Sección principal - Formulario de contacto */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Título principal de la sección */}
          <h2 className="section-title">Contáctanos aquí</h2>

          <div className="two-column-layout">
            {/* Columna izquierda: Información de contacto */}
            <div className="contact-info">
              <h3 className="contact-title">Déjame un mensaje</h3>
              
              <div className="contact-cards">
                {/* Tarjeta de email */}
                <div className="contact-card">
                  <h3 className="card-title">Email</h3>
                  <span className="card-data">informes@polarisx-cc.com</span>
                  <a 
                    href="mailto:informes@polarisx-cc.com" 
                    className="contact-button"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Escríbeme
                  </a>
                </div>
                
                {/* Tarjeta de WhatsApp */}
                <div className="contact-card">
                  <h3 className="card-title">Whatsapp</h3>
                  <span className="card-data">+51 987 425 953</span>
                  <a 
                    href="https://wa.me/+51908866548" 
                    className="contact-button"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Escríbeme
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha: Formulario de contacto */}
            <div className="form-section">
              <h3 className="contact-title">Envíame un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Campo de nombre */}
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Escribe tus nombres"
                    className="form-input"
                    required
                  />
                </div>

                {/* Campo de email */}
                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Escribe tu correo"
                    className="form-input"
                    required
                  />
                </div>

                {/* Campo de mensaje */}
                <div className="form-field textarea-field">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    cols={30}
                    rows={10}
                    placeholder="Escribe tu mensaje"
                    className="form-input"
                    required
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="submit-button"
                  disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  aria-label="Enviar formulario de contacto"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


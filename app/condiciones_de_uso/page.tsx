import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import Link from "next/link";
import "./condiciones.css";

export default function CondicionesDeUsoPage() {
  return (
    <>
      <Breadcrumb currentPage="Condiciones de Uso" />

      <HeroBanner
        sectionId="hero-section-condiciones"
        backgroundImage="/contacto/condiciones-de-uso.webp"
        title="Condiciones de Uso"
        description="Al usar nuestros servicios, acepta cumplir nuestras políticas, respetar la propiedad intelectual, no realizar actividades ilegales y permitir el procesamiento de sus datos según la legislación vigente."
      />

      <section id="cond-outer">
        <article className="cond-article">
          <header className="cond-header">
            <p className="cond-eyebrow">PolarisX</p>
            <h1>Condiciones de Uso</h1>
            <p className="cond-lead">
              Estas condiciones regulan el uso de los sitios web ubicados en polarisx-cc.com.
            </p>
          </header>

          <section id="intro" className="cond-section">
            <h2>1. Introducción</h2>
            <p>
              Al usar los Sitios Web, usted acepta estos Términos. PolarisX puede modificar
              estos Términos en cualquier momento publicando la versión actualizada. Si no está
              de acuerdo, por favor no utilice los Sitios Web.
            </p>
          </section>

          <section id="acceso" className="cond-section">
            <h2>2. Acceso y disponibilidad</h2>
            <p>
              No se garantiza acceso continuo o libre de errores y los Sitios Web pueden
              retirarse o modificarse sin previo aviso. Usted es responsable de contar con
              los medios para el acceso y de mantener la confidencialidad de sus credenciales.
            </p>
          </section>

          <section id="uso-legal" className="cond-section">
            <h2>3. Uso legal</h2>
            <p>
              El uso debe cumplir la ley y no deberá implicar envío de contenido no autorizado
              (incluidos virus o spam), ni reproducir o revender partes del sitio, ni intentar
              accesos no autorizados.
            </p>
          </section>

          <section id="privacidad" className="cond-section">
            <h2>4. Privacidad</h2>
            <p>
              Para saber cómo recopilamos y usamos su información personal, consulte nuestra{" "}
              <Link href="/politica_de_privacidad" className="cond-link">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          <section id="actualizaciones" className="cond-section">
            <h2>5. Actualizaciones</h2>
            <p>
              PolarisX puede actualizar el contenido o suspender el acceso si fuese necesario.
            </p>
            <p className="cond-updated">Última actualización: 2025-01-15</p>
          </section>
        </article>
      </section>
    </>
  );
}

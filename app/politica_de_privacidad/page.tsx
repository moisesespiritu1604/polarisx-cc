import Breadcrumb from "@/components/layout/breadcrumb/breadcrumb";
import HeroBanner from "@/components/layout/hero/hero";
import "./politica_de_privacidad.css";

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Breadcrumb currentPage="Política de Privacidad" />

      <HeroBanner
        sectionId="hero-section-politica"
        backgroundImage="/contacto/politica-de-privacidad.webp"
        title="Política de Privacidad"
        description="Protegemos su información personal conforme a la legislación vigente, garantizando seguridad, confidencialidad y transparencia."
      />

      <section id="cond-outer">
        <article className="cond-article">
          <header className="cond-header">
            <p className="cond-eyebrow">PolarisX</p>
            <h1>Política de Privacidad</h1>
            <p className="cond-lead">
              Protegemos su información personal conforme a la legislación vigente. Recopilamos,
              usamos y almacenamos datos de manera segura, respetando su privacidad y ofreciendo
              transparencia en nuestras prácticas.
            </p>
          </header>

          <section className="cond-section">
            <h2>1. Introducción</h2>
            <p>
              Gracias por visitar nuestro sitio web. En PolarisX estamos comprometidos con la
              protección de tus datos personales. A continuación, te presentamos nuestra Política
              de Privacidad, aplicable al tratamiento de tus datos personales.
            </p>
          </section>

          <section className="cond-section">
            <h2>2. Autorización para el tratamiento de datos</h2>
            <p>
              Al registrarte en nuestro sitio web, autorizas de manera indefinida a PolarisX para
              almacenar tus datos personales, como nombres, apellidos, teléfono, correo electrónico,
              entre otros, en una base de datos de nuestra titularidad. También nos autorizas a
              procesar tu información, directamente o a través de terceros, con el fin de contactarte
              y enviarte información sobre nuestros servicios.
            </p>
            <p>
              Tu autorización es esencial para que podamos llevar a cabo las actividades de
              prospección descritas. Si decides no autorizar, no podremos realizar dichas actividades.
            </p>
          </section>

          <section className="cond-section">
            <h2>3. Uso y confidencialidad</h2>
            <ul className="cond-list">
              <li>
                La información mencionada podrá ser tratada por PolarisX o por otras empresas de
                nuestro grupo empresarial para contactarte e informarte sobre nuestras ofertas.
              </li>
              <li>
                Garantizamos la seguridad y confidencialidad de tu información. Los datos recibidos
                serán incorporados a una base de datos titularidad de PolarisX.
              </li>
              <li>
                Tu información será tratada de manera confidencial, respetando las garantías de la
                Ley 29733, Ley de Protección de Datos Personales, y su reglamento.
              </li>
              <li>
                Hemos adoptado medidas técnicas y organizativas necesarias para prevenir la pérdida,
                mal uso, alteración, acceso no autorizado y robo de los datos facilitados.
              </li>
            </ul>
            <p>
              PolarisX no vende, cede ni comparte a terceros los datos personales recibidos en este
              sitio.
            </p>
          </section>

          <section className="cond-section">
            <h2>4. Derechos del titular de los datos</h2>
            <p>
              Para revocar tu autorización o ejercer cualquiera de los derechos reconocidos en la
              Ley de Protección de Datos Personales, puedes comunicarte sin costo al correo
              electrónico <strong>informes@polarisx-cc.com</strong>.
            </p>
          </section>

          <section className="cond-section">
            <h2>5. Cookies</h2>
            <p>
              PolarisX puede utilizar cookies para mejorar el contacto con las personas que han
              visitado nuestro sitio.
            </p>
          </section>

          <section className="cond-section">
            <h2>6. Datos de menores de edad</h2>
            <p>
              En nuestro sitio web, podemos recibir datos personales de contacto de menores de edad
              entre 14 y 18 años con el objetivo de proporcionarles más información sobre nuestra
              oferta. Si eres menor de 14 años, necesitas la autorización de tus padres para
              registrar tu información en nuestro sitio. Deberás proporcionarnos los datos de
              contacto de tus padres o tutores para obtener su consentimiento.
            </p>
          </section>

          <p className="cond-updated">Última actualización: 2025-01-15</p>
        </article>
      </section>
    </>
  );
}

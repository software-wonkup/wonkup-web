import Link from "next/link";
import styles from "./servicios.module.scss";

const services = [
  {
    icon: "🎯",
    title: "Validación de ideas",
    text: "Talleres y consultorías para validar problemas, mercado y propuesta de valor.",
  },
  {
    icon: "🧪",
    title: "Diseño de MVP",
    text: "Acompañamiento para construir un producto mínimo viable que aprenda rápido.",
  },
  {
    icon: "📈",
    title: "Crecimiento",
    text: "Estrategia y ejecución comercial, marketing digital y métricas de tracción.",
  },
  {
    icon: "💰",
    title: "Fundraising",
    text: "Preparamos a tu startup para levantar capital ángel, semilla o Serie A.",
  },
  {
    icon: "🤖",
    title: "Innovación corporativa",
    text: "Diseñamos retos, pilotos y nuevos negocios junto a empresas líderes.",
  },
  {
    icon: "🌐",
    title: "Comunidad y networking",
    text: "Eventos, mentorías y acceso a una red regional de emprendedores e inversionistas.",
  },
];

const audience = [
  {
    title: "Para emprendedores",
    text: "Si tienes una idea o startup en cualquier etapa, te ayudamos a construir el siguiente paso.",
    cta: "Postula tu startup",
    href: "/web/contacto",
  },
  {
    title: "Para empresas",
    text: "Conecta tu organización con startups, talento y nuevas formas de innovar para crecer.",
    cta: "Conversemos",
    href: "/web/contacto",
  },
  {
    title: "Para inversionistas",
    text: "Accede a un pipeline curado de startups con tracción y potencial regional.",
    cta: "Únete a la red",
    href: "/web/contacto",
  },
];

export default function Servicios() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Servicios</span>
          <h1>Soluciones para emprendedores, empresas e inversionistas</h1>
          <p>
            Más allá de los programas, ofrecemos servicios especializados para
            acompañar el crecimiento del ecosistema en cada etapa.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.gridInner}>
            {services.map((s) => (
              <article key={s.title} className={styles.card}>
                <div className={styles.icon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.container}>
          <div className={styles.head}>
            <span className={styles.eyebrowDark}>¿Para quién?</span>
            <h2>Trabajamos con quienes mueven el ecosistema</h2>
          </div>
          <div className={styles.audienceGrid}>
            {audience.map((a) => (
              <article key={a.title} className={styles.audienceCard}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <Link href={a.href} className={styles.link}>{a.cta} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>¿Listo para empezar con Wonkup?</h2>
          <Link href="/web/contacto" className={styles.ctaBtn}>Contáctanos</Link>
        </div>
      </section>
    </div>
  );
}

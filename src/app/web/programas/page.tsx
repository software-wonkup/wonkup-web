import Image from "next/image";
import Link from "next/link";
import styles from "./programas.module.scss";

const programs = [
  {
    id: "idea",
    tag: "01 · Pre-incubación",
    title: "Idea",
    text: "Para emprendedores que tienen una idea y quieren validarla con clientes reales antes de invertir tiempo y dinero.",
    duration: "4 semanas",
    image: "/images/web/programa-idea.svg",
    bullets: [
      "Validación de problema y mercado",
      "Diseño de propuesta de valor",
      "Primer prototipo y experimentos",
      "Mentoría 1:1 semanal",
    ],
  },
  {
    id: "incubacion",
    tag: "02 · Incubación",
    title: "Incubación",
    text: "Para startups que ya validaron el problema y necesitan encontrar un modelo de negocio escalable y los primeros clientes.",
    duration: "12 semanas",
    image: "/images/web/programa-incubacion.svg",
    bullets: [
      "Modelo de negocio y pricing",
      "Estrategia comercial y de adquisición",
      "Construcción de MVP funcional",
      "Acceso a inversionistas semilla",
    ],
  },
  {
    id: "aceleracion",
    tag: "03 · Aceleración",
    title: "Aceleración",
    text: "Para startups con tracción y métricas que buscan escalar, internacionalizarse y levantar capital de inversión.",
    duration: "16 semanas",
    image: "/images/web/programa-aceleracion.svg",
    bullets: [
      "Plan de crecimiento y métricas",
      "Estrategia de fundraising",
      "Internacionalización",
      "Demo Day con inversionistas",
    ],
  },
  {
    id: "corporativo",
    tag: "04 · Innovación Corporativa",
    title: "Corporativo",
    text: "Para empresas que quieren innovar conectándose con startups, resolviendo retos y diseñando nuevos modelos de negocio.",
    duration: "A medida",
    image: "/images/web/programa-corporativo.svg",
    bullets: [
      "Diagnóstico de innovación",
      "Retos abiertos con startups",
      "Pilotos y pruebas de concepto",
      "Spin-off y corporate venture",
    ],
  },
];

export default function Programas() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Programas</span>
          <h1>Un programa para cada etapa de tu startup</h1>
          <p>
            Diseñamos rutas claras para que emprendedores y empresas avancen
            con foco, método y comunidad.
          </p>
        </div>
      </section>

      <section className={styles.list}>
        <div className={styles.container}>
          {programs.map((p, i) => (
            <article key={p.id} id={p.id} className={`${styles.card} ${i % 2 === 1 ? styles.flip : ""}`}>
              <div className={styles.cardCopy}>
                <span className={styles.tag}>{p.tag}</span>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
                <ul className={styles.bullets}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className={styles.cardFoot}>
                  <span>Duración: <strong>{p.duration}</strong></span>
                  <Link href="/web/contacto" className={styles.btn}>Postula</Link>
                </div>
              </div>
              <div className={styles.cardArt}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={300}
                  className={styles.cardImg}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>¿No sabes qué programa es para ti?</h2>
          <p>Conversemos. Te ayudamos a identificar el camino correcto para tu startup o empresa.</p>
          <Link href="/web/contacto" className={styles.ctaBtn}>Habla con nosotros</Link>
        </div>
      </section>
    </div>
  );
}

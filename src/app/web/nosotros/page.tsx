import Image from "next/image";
import Link from "next/link";
import styles from "./nosotros.module.scss";

const values = [
  {
    title: "Audacia",
    text: "Apostamos por ideas que parecen imposibles hasta que se vuelven inevitables.",
  },
  {
    title: "Comunidad",
    text: "Creemos en construir redes que multipliquen el talento de la región.",
  },
  {
    title: "Impacto",
    text: "Medimos nuestro éxito por las vidas y negocios que ayudamos a transformar.",
  },
  {
    title: "Excelencia",
    text: "Metodologías probadas, mentores de primer nivel y ejecución rigurosa.",
  },
];

const timeline = [
  { year: "2018", title: "Nace Wonkup", text: "Empezamos como una comunidad de emprendedores tecnológicos." },
  { year: "2020", title: "Primer programa", text: "Lanzamos nuestro primer programa de incubación con 12 startups." },
  { year: "2022", title: "Expansión regional", text: "Abrimos operaciones en tres países de Latinoamérica." },
  { year: "2024", title: "+250 startups", text: "Superamos las 250 startups apoyadas y US$25M levantados." },
];

export default function Nosotros() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Nosotros</span>
          <h1>Somos Wonkup, una comunidad que cree en lo que aún no existe.</h1>
          <p className={styles.lead}>
            Nacimos para acompañar a quienes quieren construir negocios que
            transformen industrias y mejoren vidas en Latinoamérica.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              <span className={styles.eyebrowDark}>Nuestra historia</span>
              <h2>Una incubadora hecha por emprendedores, para emprendedores</h2>
              <p>
                Wonkup empezó como un grupo pequeño de emprendedores que
                necesitaban mentoría, capital y comunidad. Lo que comenzó como
                una conversación se convirtió en una incubadora con presencia
                regional, programas estructurados y una red de aliados que
                hacen posible el ecosistema.
              </p>
              <p>
                Hoy seguimos siendo la misma comunidad: cercana, ambiciosa y
                obsesionada con resolver problemas reales.
              </p>
            </div>
            <div className={styles.storyArt}>
              <Image
                src="/images/web/nosotros-historia.svg"
                alt="Equipo Wonkup"
                width={800}
                height={500}
                className={styles.storyImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <article>
              <h3>Misión</h3>
              <p>
                Impulsar emprendedores y startups con programas, capital y
                comunidad para construir negocios sostenibles en la región.
              </p>
            </article>
            <article>
              <h3>Visión</h3>
              <p>
                Ser la incubadora de referencia en Latinoamérica, conectando
                talento, inversión y empresas para que las mejores ideas se
                vuelvan realidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.head}>
            <span className={styles.eyebrowDark}>Valores</span>
            <h2>Lo que nos mueve cada día</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.container}>
          <div className={styles.head}>
            <span className={styles.eyebrowDark}>Nuestra trayectoria</span>
            <h2>Hitos que cuentan nuestra historia</h2>
          </div>
          <div className={styles.timelineList}>
            {timeline.map((t) => (
              <article key={t.year} className={styles.timelineItem}>
                <span className={styles.year}>{t.year}</span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>¿Tienes una startup que quiere crecer con Wonkup?</h2>
          <Link href="/web/contacto" className={styles.ctaBtn}>Postula tu startup</Link>
        </div>
      </section>
    </div>
  );
}

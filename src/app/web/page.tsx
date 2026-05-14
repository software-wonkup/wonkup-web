import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

const features = [
  {
    icon: "🚀",
    title: "Acelera tu startup",
    text: "Programas diseñados para llevar tu negocio de la idea al mercado en meses.",
  },
  {
    icon: "🤝",
    title: "Mentoría experta",
    text: "Conecta con mentores, inversionistas y aliados estratégicos del ecosistema.",
  },
  {
    icon: "💡",
    title: "Innovación abierta",
    text: "Acompañamos a corporativos a innovar de la mano de startups y emprendedores.",
  },
  {
    icon: "🌎",
    title: "Impacto regional",
    text: "Apoyamos a emprendedores con proyectos sostenibles en toda Latinoamérica.",
  },
];

const programs = [
  {
    tag: "01",
    title: "Idea",
    text: "Validamos tu idea de negocio y construimos contigo el primer prototipo.",
    duration: "4 semanas",
  },
  {
    tag: "02",
    title: "Incubación",
    text: "Acompañamiento intensivo para encontrar tu modelo de negocio y los primeros clientes.",
    duration: "12 semanas",
  },
  {
    tag: "03",
    title: "Aceleración",
    text: "Escalamos tu startup con foco en métricas, levantamiento de capital y expansión.",
    duration: "16 semanas",
  },
  {
    tag: "04",
    title: "Corporativo",
    text: "Programas de innovación abierta para empresas que buscan resolver retos con startups.",
    duration: "A medida",
  },
];

const stats = [
  { value: "+250", label: "Startups apoyadas" },
  { value: "+120", label: "Mentores activos" },
  { value: "+15", label: "Países de origen" },
  { value: "+US$25M", label: "Inversión levantada" },
];

const verticals = [
  "Fintech",
  "Edtech",
  "Healthtech",
  "Agtech",
  "Sostenibilidad",
  "IA & SaaS",
  "Logística",
  "Comercio",
];

const team = [
  { name: "Noel Gonzales", role: "Founder", photo: "/images/web/equipo/noel-gonzales.jpeg" },
  { name: "Edinson Gonzales", role: "CEO", photo: "/images/web/equipo/edinson-gonzales.jpeg" },
  { name: "Kevin Veliz", role: "CTO", photo: "/images/web/equipo/kevin-veliz.jpeg" },
  { name: "Daniel Ordoñez", role: "Head of Prototyping", photo: "/images/web/equipo/daniel-ordonez.jpeg" },
  { name: "Jhean Anco", role: "PMO", photo: "/images/web/equipo/jhean-anco.jpeg" },
];

const partners = [
  {
    name: "Agora",
    logo: "/images/web/aliados/agora.jpg",
    url: "https://www.facebook.com/ColegioAgoraChanchamayo",
  },
  {
    name: "Academia Personal Class",
    logo: "/images/web/aliados/personalclass.png",
    url: "https://www.personalclass.edu.pe/",
  },
  {
    name: "Vapetra",
    logo: "/images/web/aliados/vapetra.png",
    url: "https://vapetra.com/web/inicio",
  },
  {
    name: "Inkaris",
    logo: "/images/web/aliados/inkaris.png",
    url: "https://inkarisgrains.com/web/inicio",
  },
  {
    name: "Hermoza Luz",
    logo: "/images/web/aliados/hermosa-luz.jpeg",
    url: "https://www.facebook.com/people/Inversiones-y-Servicios-Hermoza-Luz-SRL/100063532483963/?locale=es_ES&ref=1",
  },
  {
    name: "Milagritos",
    logo: "/images/web/aliados/milagritos.png",
    url: "https://www.facebook.com/people/Caf%C3%A9-Restaurante-Milagritos/100066489910653/",
  },
  {
    name: "Hemingway",
    logo: "/images/web/aliados/hemingway.png",
    url: "https://hemingway.edu.pe/",
  },
  {
    name: "Nija",
    logo: "/images/web/aliados/nija.png",
    url: "https://www.facebook.com/nija.peru",
  },
];

export default function WebHome() {
  return (
    <div className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBanner}>
          <Image
            src="/images/web/portada.png"
            alt="Wonkup — Asciende más alto"
            width={2660}
            height={985}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className={styles.heroBannerImg}
          />
        </div>
        <div className={styles.heroIntro}>
          <span className={styles.eyebrow}>Incubadora de startups</span>
          <h1 className={styles.heroTitle}>
            Construimos el futuro junto a <span>emprendedores</span> que se atreven.
          </h1>
          <p className={styles.heroLead}>
            En Wonkup acompañamos a startups y empresas a convertir ideas
            audaces en negocios sostenibles, escalables y con impacto real en
            la región.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/web/programas" className={styles.btnPrimary}>
              Conoce nuestros programas
            </Link>
            <Link href="/web/contacto" className={styles.btnGhost}>
              Postula tu startup
            </Link>
          </div>
          <div className={styles.heroMeta}>
            <div>
              <strong>+250</strong>
              <span>Startups</span>
            </div>
            <div>
              <strong>+120</strong>
              <span>Mentores</span>
            </div>
            <div>
              <strong>+15</strong>
              <span>Países</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>¿Por qué Wonkup?</span>
            <h2>Una comunidad que impulsa tu próximo paso</h2>
            <p>
              Somos una incubadora que combina metodología, capital, mentoría y
              una red regional de aliados para que las startups crezcan más
              rápido y mejor.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <article key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className={styles.programs}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Programas</span>
            <h2>Un camino para cada etapa de tu startup</h2>
            <p>
              Desde la primera idea hasta levantar capital internacional, tenemos
              un programa diseñado para acelerar tu crecimiento.
            </p>
          </div>
          <div className={styles.programsGrid}>
            {programs.map((p) => (
              <article key={p.title} className={styles.programCard}>
                <span className={styles.programTag}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className={styles.programFoot}>
                  <span>{p.duration}</span>
                  <Link href="/web/programas">Más info →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className={styles.verticals}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Verticales</span>
            <h2>Industrias en las que apostamos</h2>
            <p>
              Trabajamos con emprendedores que están transformando sectores
              clave de la economía latinoamericana.
            </p>
          </div>
          <div className={styles.verticalsGrid}>
            {verticals.map((v) => (
              <div key={v} className={styles.verticalChip}>
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Equipo</span>
            <h2>Personas que creen en lo que aún no existe</h2>
            <p>
              Detrás de Wonkup hay un equipo apasionado por construir el
              ecosistema emprendedor de la región.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((t) => (
              <article key={t.name} className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="(max-width: 800px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className={styles.partners}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Aliados</span>
            <h2>Construimos junto a quienes mueven el ecosistema</h2>
          </div>
          <div className={styles.partnersGrid}>
            {partners.map((p) => {
              const card = (
                <div className={styles.partnerLogo}>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={240}
                    height={140}
                    className={styles.partnerImg}
                  />
                </div>
              );
              return p.url ? (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerLink}
                  aria-label={p.name}
                >
                  {card}
                </a>
              ) : (
                <div key={p.name} aria-label={p.name}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>¿Listo para hacer crecer tu startup con Wonkup?</h2>
          <p>
            Postula y conversemos sobre cómo podemos acompañar tu próximo paso.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/web/contacto" className={styles.btnPrimary}>
              Postula ahora
            </Link>
            <Link href="/web/nosotros" className={styles.btnGhostDark}>
              Conoce más
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

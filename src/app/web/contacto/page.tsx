import ContactForm from "./contact-form";
import styles from "./contacto.module.scss";

export default function Contacto() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Contacto</span>
          <h1>Conversemos sobre tu próximo paso</h1>
          <p>
            Cuéntanos sobre tu startup, tu empresa o el reto que quieres
            resolver. Te responderemos en menos de 48 horas.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <aside className={styles.info}>
              <h2>Habla con Wonkup</h2>
              <p>
                Estamos en Huancayo, pero acompañamos startups y empresas en
                toda Latinoamérica.
              </p>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.label}>Email</span>
                  <a href="mailto:hola@wonkup.edu.pe">hola@wonkup.edu.pe</a>
                </li>
                <li>
                  <span className={styles.label}>Celular</span>
                  <a href="tel:+51922339108">+51 922 339 108</a>
                </li>
                <li>
                  <span className={styles.label}>Dirección</span>
                  <span>Av. Ferrocarril 378 - 2° piso, Huancayo - Perú</span>
                </li>
                <li>
                  <span className={styles.label}>Horario</span>
                  <span>Lun a Vie · 9:00 – 18:00</span>
                </li>
              </ul>
            </aside>

            <div className={styles.formWrap}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

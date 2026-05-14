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
                  <span>Av. Ferrocarril 378 — Segundo piso, Huancayo — Perú</span>
                </li>
                <li>
                  <span className={styles.label}>Horario</span>
                  <span>Lun a Vie · 9:00 – 18:00</span>
                </li>
              </ul>
            </aside>

            <div className={styles.formWrap}>
              <form
                className={styles.contactForm}
                action="https://formsubmit.co/hola@wonkup.edu.pe"
                method="POST"
              >
                <input type="hidden" name="_subject" value="Nuevo mensaje desde wonkup.edu.pe" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <h3>Escríbenos</h3>
                <div className={styles.row}>
                  <label>
                    Nombre
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </label>
                </div>
                <div className={styles.row}>
                  <label>
                    Empresa / Startup
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu organización"
                    />
                  </label>
                  <label>
                    Celular
                    <input
                      type="tel"
                      name="celular"
                      placeholder="+51 999 000 000"
                    />
                  </label>
                </div>
                <label>
                  ¿En qué te podemos ayudar?
                  <select name="motivo" defaultValue="" required>
                    <option value="" disabled>Selecciona una opción</option>
                    <option>Postular a un programa</option>
                    <option>Servicios para mi empresa</option>
                    <option>Quiero ser mentor / inversionista</option>
                    <option>Prensa o alianzas</option>
                    <option>Otro</option>
                  </select>
                </label>
                <label>
                  Cuéntanos tu proyecto
                  <textarea
                    name="mensaje"
                    rows={5}
                    placeholder="Comparte un poco más de contexto..."
                    required
                  />
                </label>
                <button type="submit" className={styles.submit}>Enviar mensaje</button>
                <p className={styles.disclaimer}>
                  Al enviar este formulario aceptas que Wonkup procese tus
                  datos para contactarte.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

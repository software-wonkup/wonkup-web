"use client";

import { FormEvent } from "react";
import styles from "./contacto.module.scss";

const WHATSAPP_NUMBER = "51922339108";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const nombre = (data.get("nombre") as string || "").trim();
    const email = (data.get("email") as string || "").trim();
    const empresa = (data.get("empresa") as string || "").trim();
    const celular = (data.get("celular") as string || "").trim();
    const motivo = (data.get("motivo") as string || "").trim();
    const mensaje = (data.get("mensaje") as string || "").trim();

    const lines = [
      `¡Hola Wonkup! Soy ${nombre}.`,
      "",
      `*Email:* ${email}`,
      empresa ? `*Empresa / Startup:* ${empresa}` : null,
      celular ? `*Celular:* ${celular}` : null,
      `*Motivo:* ${motivo}`,
      "",
      "*Mensaje:*",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
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
      <button type="submit" className={styles.submit}>
        Enviar por WhatsApp
      </button>
      <p className={styles.disclaimer}>
        Al enviar este formulario abriremos WhatsApp con tu mensaje listo para
        enviarlo a nuestro equipo. Aceptas que Wonkup procese tus datos para
        contactarte.
      </p>
    </form>
  );
}

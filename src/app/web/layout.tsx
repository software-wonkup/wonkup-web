import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Wonkup — Incubadora y aceleradora de startups",
  description:
    "Wonkup impulsa emprendedores y startups con programas de incubación, aceleración y servicios de innovación para empresas.",
};

const navLinks = [
  { href: "/web", label: "Inicio" },
  { href: "/web/nosotros", label: "Nosotros" },
  { href: "/web/programas", label: "Programas" },
  { href: "/web/servicios", label: "Servicios" },
  { href: "/web/contacto", label: "Contacto" },
];

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.site}>
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <span>hola@wonkup.edu.pe</span>
          <span>·</span>
          <span>Huancayo · Perú</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/web" className={styles.brand}>
            <Image
              src="/images/web/logo-horizontal-azul.svg"
              alt="Wonkup"
              width={140}
              height={36}
              priority
              className={styles.brandLogo}
            />
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://bit.ly/MarketPlaceImpresion3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.headerMarketplace}
          >
            Marketplace 3D
          </a>

          <Link href="/web/contacto" className={styles.headerCta}>
            Postula
          </Link>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <Link href="/web" className={styles.footerBrand}>
              <Image
                src="/images/web/logo-horizontal-blanco.svg"
                alt="Wonkup"
                width={160}
                height={40}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.footerTagline}>
              Incubadora y aceleradora de startups con impacto en
              Latinoamérica.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>Wonkup</h4>
            <Link href="/web/nosotros">Nosotros</Link>
            <Link href="/web/programas">Programas</Link>
            <Link href="/web/servicios">Servicios</Link>
            <Link href="/web/contacto">Contacto</Link>
          </div>

          <div className={styles.footerCol}>
            <h4>Programas</h4>
            <Link href="/web/programas#idea">Idea</Link>
            <Link href="/web/programas#incubacion">Incubación</Link>
            <Link href="/web/programas#aceleracion">Aceleración</Link>
            <Link href="/web/programas#corporativo">Corporativo</Link>
          </div>

          <div className={styles.footerCol}>
            <h4>Contacto</h4>
            <a href="mailto:hola@wonkup.edu.pe">hola@wonkup.edu.pe</a>
            <a href="tel:+51922339108">+51 922 339 108</a>
            <span>Av. Ferrocarril 378 - 2° piso, Huancayo - Perú</span>
          </div>
        </div>

        <div className={styles.footerEndorsement}>
          <span className={styles.endorsementLabel}>Respaldado por</span>
          <div className={styles.endorsementLogo}>
            <Image
              src="/images/web/logo-proinnovate.png"
              alt="ProInnovate"
              width={400}
              height={129}
            />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Wonkup. Todos los derechos reservados.</span>
          <div className={styles.legal}>
            <Link href="/web/contacto">Términos</Link>
            <Link href="/web/contacto">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

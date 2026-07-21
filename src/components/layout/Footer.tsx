import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "../ui/Container";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Portal", href: "#portal" },
  { label: "Contacto", href: "#contacto" },
];

const socialClass = `
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-white/10
text-[var(--color-text-muted)]
transition-all
duration-300
hover:border-[var(--color-gold)]
hover:text-[var(--color-gold)]
hover:-translate-y-1
`;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg)]">
      <Container>

        <div className="grid gap-12 py-16 lg:grid-cols-3">

          {/* Marca */}

          <div>
            <h3 className="font-title text-3xl tracking-[5px]">
              13 de Enero
            </h3>

            <p className="mt-5 max-w-sm">
              Mezcal artesanal elaborado respetando los tiempos,
              la tierra y la tradición.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                aria-label="Instagram"
                className={socialClass}
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className={socialClass}
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className={socialClass}
              >
                <FaWhatsapp size={18} />
              </a>

            </div>
          </div>

          {/* Navegación */}

          <div>
           

            <nav className="flex flex-col gap-4">

              {footerLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    w-fit
                    text-[var(--color-text-muted)]
                    transition-colors
                    duration-300
                    hover:text-[var(--color-gold)]
                  "
                >
                  {item.label}
                </a>
              ))}

            </nav>
          </div>

          {/* Legal */}

          <div>
            <h4 className="mb-6 text-lg">
              Información
            </h4>

            <div className="flex flex-col gap-4">

              <a
                href="/terminos"
                className="
                  w-fit
                  text-[var(--color-text-muted)]
                  transition-colors
                  hover:text-[var(--color-gold)]
                "
              >
                Términos y condiciones
              </a>

              <a
                href="/privacidad"
                className="
                  w-fit
                  text-[var(--color-text-muted)]
                  transition-colors
                  hover:text-[var(--color-gold)]
                "
              >
                Aviso de privacidad
              </a>

              <a
                href="mailto:contacto@13deenero.com"
                className="
                  w-fit
                  text-[var(--color-text-muted)]
                  transition-colors
                  hover:text-[var(--color-gold)]
                "
              >
                contacto@13denero.com
              </a>

            </div>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-sm text-[var(--color-text-muted)] md:flex-row">

          <p>
           13 deNero © {new Date().getFullYear()} Todos los derechos reservados.
          </p>

          <p>
            Prohibida la venta de bebidas alcohólicas a menores de edad.
          </p>

        </div>

      </Container>
    </footer>
  );
}
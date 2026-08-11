import {
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";

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
  const { t } = useTranslation();

  const footerLinks = [
    {
      label: t("footer.navigation.home"),
      href: "/",
    },
    {
      label: t("footer.navigation.products"),
      href: "/productos/misterio",
    },
    {
      label: t("footer.navigation.portal"),
      href: "/portal",
    },
    {
      label: t("footer.navigation.contact"),
      href: "/contacto",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-bg">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-3">

          {/* Marca */}

          <div>
            <h3 className="font-title text-3xl tracking-[5px]">
              13 deNERO
            </h3>

            <p className="mt-5 max-w-sm text-text-muted">
              {t("footer.description")}
            </p>

            <div className="mt-8 flex gap-4">

           <a
              href="https://www.instagram.com/mezcal.13denero/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={socialClass}
            >
              <FaInstagram size={18} />
            </a>

              <a
                href="#"
                aria-label="TikTok"
                className={socialClass}
              >
                <FaTiktok size={17} />
              </a>

              <a
                href="https://wa.me/525525610941"
                aria-label="WhatsApp"
                className={socialClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>
          </div>

          {/* Navegación */}

          <div>
            <h4 className="mb-6 text-lg text-text">
              {t("footer.navigation.title")}
            </h4>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="
                    w-fit
                    text-text-muted
                    transition-colors
                    duration-300
                    hover:text-gold
                  "
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Información */}

          <div>
            <h4 className="mb-6 text-lg text-text">
              {t("footer.information.title")}
            </h4>

            <div className="flex flex-col gap-4">

              <NavLink
                to="/terminos"
                className="
                  w-fit
                  text-text-muted
                  transition-colors
                  hover:text-gold
                "
              >
                {t("footer.information.terms")}
              </NavLink>

              <NavLink
                to="/privacidad"
                className="
                  w-fit
                  text-text-muted
                  transition-colors
                  hover:text-gold
                "
              >
                {t("footer.information.privacy")}
              </NavLink>

              <a
                href="mailto:mezcal.13denero@gmail.com"
                className="
                  w-fit
                  text-text-muted
                  transition-colors
                  hover:text-gold
                "
              >
                mezcal.13denero@gmail.com
              </a>

            </div>
          </div>

        </div>
          {/* Parte inferior */}
          <div className="border-t border-white/10 py-6">
            
            <p
              className="
                text-center
                text-sm
                leading-6
                text-text-muted
              "
            >
              {t("footer.copyright", {
                year: new Date().getFullYear(),
              })}
            </p>

            
            <div
              className="
                mt-2
                flex
                flex-col
                items-center
                gap-2
                text-center

                md:flex-row
                md:justify-between
                md:gap-6
              "
            >
              
              <p
                className="
                  text-[0.7rem]
                  leading-5
                  text-white/40

                  md:text-left
                "
              >
                {t("footer.designBy")}{" "}
                <a
                  href="https://didascaliadev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/55
                    transition-colors
                    duration-300
                    hover:text-gold
                  "
                >
                  Didascalia Dev
                </a>
              </p>

              
              <p
                className="
                  max-w-sm
                  text-[0.7rem]
                  leading-5
                  text-white/45

                  md:text-right
                "
              >
                {t("footer.alcoholWarning")}
              </p>
            </div>
          </div>
      </Container>
    </footer>
  );
}
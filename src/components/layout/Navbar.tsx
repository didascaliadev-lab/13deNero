import { useState } from "react";
import type {
  FocusEvent,
  MouseEvent,
} from "react";

import {
  HiBars3,
  HiChevronDown,

  HiXMark,
} from "react-icons/hi2";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import { productos } from "../../data/productos";

type NavbarLink = {
  translationKey: string;
  href: string;
};

const links: NavbarLink[] = [
  {
    translationKey: "navbar.home",
    href: "/",
  },
  {
    translationKey: "navbar.portal",
    href: "/portal",
  },
  {
    translationKey: "navbar.contact",
    href: "/contacto",
  },
];

const navLinkClass = `
  relative
  text-sm
  tracking-[2px]
  text-muted
  transition-colors
  duration-300
  hover:text-gold

  after:absolute
  after:-bottom-2
  after:left-0
  after:h-px
  after:w-0
  after:bg-gold
  after:transition-all
  after:duration-300

  hover:after:w-full
`;

const mobileLinkClass = `
  text-lg
  tracking-[2px]
  text-muted
  transition-colors
  duration-300
  hover:text-gold
`;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [
    mobileProductsOpen,
    setMobileProductsOpen,
  ] = useState(false);

  const [
    desktopProductsOpen,
    setDesktopProductsOpen,
  ] = useState(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLanguage =
    i18n.resolvedLanguage ?? i18n.language;

  const productsActive =
    location.pathname === "/productos" ||
    location.pathname.startsWith("/productos/");

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);

    if (mobileMenuOpen) {
      setMobileProductsOpen(false);
    }
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  const closeDesktopProducts = () => {
    setDesktopProductsOpen(false);
  };

  const closeAllMenus = () => {
    closeMobileMenu();
    closeDesktopProducts();
  };

  const changeLanguage = (
    language: "es" | "en",
  ) => {
    void i18n.changeLanguage(language);
    closeAllMenus();
  };

  const handleDesktopProductClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    closeDesktopProducts();
    event.currentTarget.blur();
  };

  const handleDesktopProductsBlur = (
    event: FocusEvent<HTMLDivElement>,
  ) => {
    const nextFocusedElement =
      event.relatedTarget as Node | null;

    if (
      !nextFocusedElement ||
      !event.currentTarget.contains(
        nextFocusedElement,
      )
    ) {
      closeDesktopProducts();
    }
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/5
        bg-bg/55
        backdrop-blur-xl
      "
    >
      <Container size="2xl">
        <div
          className="
            grid
            h-20
            grid-cols-[auto_1fr_auto]
            items-center
            gap-4
            lg:h-24
            lg:gap-8
          "
        >
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeAllMenus}
            aria-label={t("navbar.goHome")}
            className="
              z-20
              flex
              shrink-0
              items-center
              justify-start
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <img
              src="/images/logo.webp"
              alt="13 de Enero"
              className="
                h-14
                w-auto
                object-contain
                sm:h-16
                lg:h-[4.5rem]
              "
            />
          </NavLink>

          {/* Navegación de escritorio */}
          <nav
            className="
              hidden
              items-center
              justify-center
              gap-8
              lg:flex
              xl:gap-12
            "
            aria-label={t(
              "navbar.mainNavigation",
            )}
          >
            {/* Inicio */}
            <NavLink
              to="/"
              end
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `${navLinkClass} ${
                  isActive
                    ? "text-gold after:w-full"
                    : ""
                }`
              }
            >
              {t("navbar.home")}
            </NavLink>

            {/* Productos de escritorio */}
            <div
              className="relative"
              onMouseEnter={() =>
                setDesktopProductsOpen(true)
              }
              onMouseLeave={
                closeDesktopProducts
              }
              onFocus={() =>
                setDesktopProductsOpen(true)
              }
              onBlur={
                handleDesktopProductsBlur
              }
            >
              <NavLink
                to="/productos/misterio"
                onClick={closeDesktopProducts}
                className={`
                  ${navLinkClass}
                  flex
                  items-center
                  gap-1.5
                  ${
                    productsActive
                      ? "text-gold after:w-full"
                      : ""
                  }
                `}
                aria-haspopup="menu"
                aria-expanded={
                  desktopProductsOpen
                }
                aria-controls="desktop-products-menu"
              >
                <span>
                  {t("navbar.products")}
                </span>

                <HiChevronDown
                  size={15}
                  aria-hidden="true"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      desktopProductsOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </NavLink>

              {/* Submenú de escritorio */}
              <div
                id="desktop-products-menu"
                className={`
                  absolute
                  left-1/2
                  top-full
                  w-60
                  -translate-x-1/2
                  pt-6
                  transition-all
                  duration-300

                  ${
                    desktopProductsOpen
                      ? `
                        visible
                        translate-y-0
                        opacity-100
                        pointer-events-auto
                      `
                      : `
                        invisible
                        -translate-y-2
                        opacity-0
                        pointer-events-none
                      `
                  }
                `}
              >
                <div
                  className="
                    border
                    border-white/10
                    bg-bg/95
                    p-2
                    shadow-2xl
                    backdrop-blur-2xl
                  "
                  role="menu"
                  aria-label={t(
                    "navbar.products",
                  )}
                >
                  {productos.map(
                    (producto) => {
                      const nombreProducto = t(
                        `${producto.translationKey}.state`,
                      );

                      return (
                        <NavLink
                          key={producto.slug}
                          to={`/productos/${producto.slug}`}
                          onClick={
                            handleDesktopProductClick
                          }
                          role="menuitem"
                          className={({
                            isActive,
                          }) =>
                            `
                              group/item
                              flex
                              items-center
                              justify-between
                              px-4
                              py-3
                              text-sm
                              tracking-[0.12em]
                              transition-colors
                              duration-300
                              hover:bg-white/5
                              hover:text-gold

                              ${
                                isActive
                                  ? "bg-white/5 text-gold"
                                  : "text-muted"
                              }
                            `
                          }
                        >
                          <span>
                            {nombreProducto}
                          </span>

                          <span
                            aria-hidden="true"
                            className="
                              text-gold/60
                              transition-transform
                              duration-300
                              group-hover/item:translate-x-1
                            "
                          >
                            →
                          </span>
                        </NavLink>
                      );
                    },
                  )}
                </div>
              </div>
            </div>

            {/* Portal y contacto */}
            {links
              .filter(
                (item) => item.href !== "/",
              )
              .map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={closeAllMenus}
                  className={({ isActive }) =>
                    `${navLinkClass} ${
                      isActive
                        ? "text-gold after:w-full"
                        : ""
                    }`
                  }
                >
                  {t(item.translationKey)}
                </NavLink>
              ))}
          </nav>

          {/* Acciones */}
          <div
            className="
              flex
              items-center
              justify-end
              gap-4
              lg:gap-6
            "
          >
            {/* Idioma escritorio */}
            <div
              className="
                hidden
                items-center
                gap-2
                lg:flex
              "
              aria-label={t(
                "navbar.languageSelector",
              )}
            >
              <button
                type="button"
                onClick={() =>
                  changeLanguage("es")
                }
                className={`
                  text-xs
                  tracking-[2px]
                  transition-colors
                  duration-300
                  hover:text-gold

                  ${
                    currentLanguage.startsWith(
                      "es",
                    )
                      ? "text-gold"
                      : "text-muted"
                  }
                `}
                aria-pressed={currentLanguage.startsWith(
                  "es",
                )}
              >
                ES
              </button>

              <span className="text-white/30">
                |
              </span>

              <button
                type="button"
                onClick={() =>
                  changeLanguage("en")
                }
                className={`
                  text-xs
                  tracking-[2px]
                  transition-colors
                  duration-300
                  hover:text-gold

                  ${
                    currentLanguage.startsWith(
                      "en",
                    )
                      ? "text-gold"
                      : "text-muted"
                  }
                `}
                aria-pressed={currentLanguage.startsWith(
                  "en",
                )}
              >
                EN
              </button>
            </div>

           
            {/* Botón móvil */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="
                text-text
                transition-colors
                duration-300
                hover:text-gold
                lg:hidden
              "
              aria-label={
                mobileMenuOpen
                  ? t("navbar.closeMenu")
                  : t("navbar.openMenu")
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <HiXMark size={30} />
              ) : (
                <HiBars3 size={30} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Navegación móvil */}
      <div
        id="mobile-navigation"
        className={`
          overflow-hidden
          border-b
          border-white/10
          bg-bg/95
          backdrop-blur-2xl
          transition-[max-height]
          duration-500
          lg:hidden

          ${
            mobileMenuOpen
              ? "max-h-[900px]"
              : "max-h-0"
          }
        `}
      >
        <Container>
          <nav
            className="
              flex
              flex-col
              py-7
            "
            aria-label={t(
              "navbar.mobileNavigation",
            )}
          >
            {/* Inicio */}
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `
                  ${mobileLinkClass}
                  border-b
                  border-white/10
                  py-4

                  ${
                    isActive
                      ? "text-gold"
                      : ""
                  }
                `
              }
            >
              {t("navbar.home")}
            </NavLink>

            {/* Productos móvil */}
            <div className="border-b border-white/10">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <NavLink
                  to="/productos/misterio"
                  onClick={closeMobileMenu}
                  className={`
                    flex-1
                    py-4
                    text-lg
                    tracking-[2px]
                    transition-colors
                    duration-300
                    hover:text-gold

                    ${
                      productsActive
                        ? "text-gold"
                        : "text-muted"
                    }
                  `}
                >
                  {t("navbar.products")}
                </NavLink>

                <button
                  type="button"
                  onClick={
                    toggleMobileProducts
                  }
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-end
                    text-muted
                    transition-colors
                    duration-300
                    hover:text-gold
                  "
                  aria-label={
                    mobileProductsOpen
                      ? t(
                          "navbar.closeProductsMenu",
                          {
                            defaultValue:
                              "Cerrar menú de productos",
                          },
                        )
                      : t(
                          "navbar.openProductsMenu",
                          {
                            defaultValue:
                              "Abrir menú de productos",
                          },
                        )
                  }
                  aria-expanded={
                    mobileProductsOpen
                  }
                  aria-controls="mobile-products-submenu"
                >
                  <HiChevronDown
                    size={20}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        mobileProductsOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>
              </div>

              <div
                id="mobile-products-submenu"
                className={`
                  overflow-hidden
                  transition-[max-height,opacity]
                  duration-300

                  ${
                    mobileProductsOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    mb-4
                    border-l
                    border-gold/30
                    pl-5
                  "
                >
                  {productos.map(
                    (producto) => {
                      const nombreProducto = t(
                        `${producto.translationKey}.state`,
                      );

                      return (
                        <NavLink
                          key={producto.slug}
                          to={`/productos/${producto.slug}`}
                          onClick={
                            closeMobileMenu
                          }
                          className={({
                            isActive,
                          }) =>
                            `
                              block
                              py-3
                              text-base
                              tracking-[0.12em]
                              transition-colors
                              duration-300
                              hover:text-gold

                              ${
                                isActive
                                  ? "text-gold"
                                  : "text-muted"
                              }
                            `
                          }
                        >
                          {nombreProducto}
                        </NavLink>
                      );
                    },
                  )}
                </div>
              </div>
            </div>

            {/* Portal y contacto móvil */}
            {links
              .filter(
                (item) => item.href !== "/",
              )
              .map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `
                      ${mobileLinkClass}
                      border-b
                      border-white/10
                      py-4

                      ${
                        isActive
                          ? "text-gold"
                          : ""
                      }
                    `
                  }
                >
                  {t(item.translationKey)}
                </NavLink>
              ))}

            {/* Idioma móvil */}
            <div
              className="
                flex
                items-center
                gap-3
                pt-7
              "
            >
              <button
                type="button"
                onClick={() =>
                  changeLanguage("es")
                }
                className={`
                  text-sm
                  tracking-[2px]
                  transition-colors
                  duration-300
                  hover:text-gold

                  ${
                    currentLanguage.startsWith(
                      "es",
                    )
                      ? "text-gold"
                      : "text-muted"
                  }
                `}
                aria-pressed={currentLanguage.startsWith(
                  "es",
                )}
              >
                ES
              </button>

              <span className="text-white/30">
                |
              </span>

              <button
                type="button"
                onClick={() =>
                  changeLanguage("en")
                }
                className={`
                  text-sm
                  tracking-[2px]
                  transition-colors
                  duration-300
                  hover:text-gold

                  ${
                    currentLanguage.startsWith(
                      "en",
                    )
                      ? "text-gold"
                      : "text-muted"
                  }
                `}
                aria-pressed={currentLanguage.startsWith(
                  "en",
                )}
              >
                EN
              </button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
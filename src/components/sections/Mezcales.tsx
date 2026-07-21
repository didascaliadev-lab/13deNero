import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {HiArrowRight,HiChevronLeft, HiChevronRight,} from "react-icons/hi2";
import Container from "../ui/Container";

type Mezcal = {
  id: string;
  nameKey: string;
  agaveKey: string;
  image: string;
  href: string;
};

const mezcales: Mezcal[] = [
  {
    id: "chaman",
    nameKey: "home.mezcales.products.chaman.name",
    agaveKey: "home.mezcales.products.chaman.agave",
    image: "/fotos/mezcales/misterio_fuego.jpg",
    href: "/productos/chaman-del-valle-oculto",
  },
  {
    id: "llama",
    nameKey: "home.mezcales.products.llama.name",
    agaveKey: "home.mezcales.products.llama.agave",
    image: "/fotos/mezcales/deseo_fuego.jpg",
    href: "/productos/la-llama-que-invoca",
  },
  {
    id: "joven",
    nameKey: "home.mezcales.products.joven.name",
    agaveKey: "home.mezcales.products.joven.agave",
    image: "/fotos/mezcales/alegria_fuego.jpg",
    href: "/productos/joven-de-luz",
  },
  {
    id: "guerrero",
    nameKey: "home.mezcales.products.guerrero.name",
    agaveKey: "home.mezcales.products.guerrero.agave",
    image: "/fotos/mezcales/nostalgia_fuego_2.jpg",
    href: "/productos/guerrero-del-monte",
  },
];

export default function Mezcales() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 24;
    const distance = firstCard.offsetWidth + gap;

    carousel.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-bg pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
      <Container size="2xl">
        {/* Frase principal */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="block text-[0.65rem] uppercase tracking-[0.4em] text-gold sm:text-xs">
            {t("home.mezcales.badge")}
          </span>

          <h2 className="mt-5 font-title text-3xl leading-[1.12] text-text sm:text-4xl lg:text-5xl">
            {t("home.mezcales.title")}
          </h2>

          <div className="mx-auto mt-8 h-px w-20 bg-gold" />
        </div>

        {/* Encabezado de la colección */}
        <div className="mb-7 mt-14 flex items-end justify-between gap-6 sm:mt-16 lg:mb-9 lg:mt-20">
          <div>
            <span className="block text-[0.65rem] uppercase tracking-[0.35em] text-gold sm:text-xs">
              {t("home.mezcales.collectionBadge")}
            </span>

            <h3 className="mt-2 font-title text-2xl text-text sm:text-3xl lg:text-4xl">
              {t("home.mezcales.collectionTitle")}
            </h3>
          </div>

          {/* Flechas de escritorio */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label={t("home.mezcales.previous")}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-gold/40
                text-gold
                transition-all
                duration-300
                hover:border-gold
                hover:bg-gold
                hover:text-black
                lg:h-12
                lg:w-12
              "
            >
              <HiChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label={t("home.mezcales.next")}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-gold/40
                text-gold
                transition-all
                duration-300
                hover:border-gold
                hover:bg-gold
                hover:text-black
                lg:h-12
                lg:w-12
              "
            >
              <HiChevronRight size={21} />
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={carouselRef}
          className="
            flex
            w-full
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-6
          "
        >
          {mezcales.map((mezcal) => (
            <article
              key={mezcal.id}
                className="
                group
                flex-none
                snap-start
                overflow-hidden
                border
                border-white/10
                bg-black

                w-full
                min-w-full

                sm:w-[72%]
                sm:min-w-[72%]

                md:w-[46%]
                md:min-w-[46%]

                lg:w-[calc(50%-12px)]
                lg:min-w-[calc(50%-12px)]
                "
            >
              <NavLink
                to={mezcal.href}
                className="block"
                aria-label={t(mezcal.nameKey)}
              >
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/3.4]">
                  <img
                    src={mezcal.image}
                    alt={t(mezcal.nameKey)}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Oscurecimiento general */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/15
                      to-transparent
                    "
                  />

                  {/* Zona oscura exclusiva para el texto */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[48%]
                      bg-gradient-to-t
                      from-black/95
                      via-black/70
                      to-transparent
                    "
                  />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-8">
                    <span
                      className="
                        block
                        text-[0.65rem]
                        uppercase
                        tracking-[0.35em]
                        text-white
                        drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]
                      "
                    >
                      {t(mezcal.agaveKey)}
                    </span>

                    <h4
                      className="
                        mt-2
                        max-w-[13ch]
                        font-title
                        text-2xl
                        leading-tight
                        text-white
                        drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]
                        lg:text-3xl
                      "
                    >
                      {t(mezcal.nameKey)}
                    </h4>

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-[0.65rem]
                        uppercase
                        tracking-[0.22em]
                        text-white/80
                        transition-colors
                        duration-300
                        group-hover:text-gold
                      "
                    >
                      {t("home.mezcales.discover")}

                      <HiArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </NavLink>
            </article>
          ))}
        </div>

        {/* Flechas de móvil */}
        <div className="mt-5 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label={t("home.mezcales.previous")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gold/40
              text-gold
              transition-colors
              duration-300
              active:bg-gold
              active:text-black
            "
          >
            <HiChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label={t("home.mezcales.next")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gold/40
              text-gold
              transition-colors
              duration-300
              active:bg-gold
              active:text-black
            "
          >
            <HiChevronRight size={20} />
          </button>
        </div>
        {/* Transición hacia el proceso */}
      <div className="mx-auto mt-10 max-w-6xl px-6 lg:mt-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
      </Container>
    </section>
  );
}
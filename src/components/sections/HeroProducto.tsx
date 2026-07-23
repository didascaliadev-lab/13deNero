import { useTranslation } from "react-i18next";

import type { Producto } from "../../data/productos";
import Container from "../ui/Container";

type HeroProductoProps = {
  producto: Producto;
};

export default function HeroProducto({
  producto,
}: HeroProductoProps) {
  const { t } = useTranslation();

  const key = producto.translationKey;

  const estado = t(`${key}.state`);
  const nombre = t(`${key}.name`);
  const entrada = t(`${key}.entry`);

  const agave = t(`${key}.alchemy.agave`);
  const alcohol = t(`${key}.alchemy.alcohol`);
  const tipo = t(`${key}.alchemy.type`);

  return (
    <section
      className="
        relative
        min-h-[680px]
        overflow-hidden
        bg-bg
        sm:min-h-[720px]
        lg:min-h-screen
      "
    >
      <picture className="absolute inset-0">
        {producto.imagenes.heroMobile && (
          <source
            media="(max-width: 639px)"
            srcSet={producto.imagenes.heroMobile}
          />
        )}

        <img
          src={producto.imagenes.heroDesktop}
          alt={nombre}
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-black/15" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/90
          via-black/55
          to-black/20
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-bg
          via-transparent
          to-black/20
        "
      />

      <Container
        size="2xl"
        className="
          relative
          z-10
          flex
          min-h-[680px]
          items-end
          pb-16
          pt-32
          sm:min-h-[720px]
          sm:pb-20
          lg:min-h-screen
          lg:items-center
          lg:py-32
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-[1fr_0.7fr]
            lg:gap-16
          "
        >
          <div className="max-w-3xl">
            <span
              className="
                block
                text-[0.65rem]
                tracking-[0.45em]
                text-gold
                sm:text-xs
              "
            >
              {t("products.common.soulState")}
            </span>

            <p
              className="
                mt-5
                text-sm
                tracking-[0.3em]
                text-gold
                sm:text-base
              "
            >
              {estado}
            </p>

            <h1
              className="
                mt-4
                max-w-3xl
                font-title
                text-5xl
                leading-[0.98]
                text-text
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              {nombre}
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-white/75
                sm:text-lg
                sm:leading-9
              "
            >
              {entrada}
            </p>

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                text-xs
                tracking-[0.15em]
                text-white/65
                sm:text-sm
              "
            >
              <span>{agave}</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-gold"
              />

              <span>{alcohol}</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-gold"
              />

              <span>{tipo}</span>
            </div>
          </div>

         
        </div>
      </Container>
    </section>
  );
}
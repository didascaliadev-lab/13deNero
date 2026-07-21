import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HeroProducto from "../components/sections/HeroProducto";
import Container from "../components/ui/Container";

import {
  obtenerProductoPorSlug,
  productos,
} from "../data/productos";

export default function Producto() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const producto = obtenerProductoPorSlug(slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!producto) {
    return (
      <Navigate
        to="/productos/misterio"
        replace
      />
    );
  }

  const key = producto.translationKey;

  const estado = t(`${key}.state`);
  const nombre = t(`${key}.name`);
  const relato = t(`${key}.story`);
  const introspeccion = t(`${key}.introspection`);
  const manifiesto = t(`${key}.manifesto`);
  const momento = t(`${key}.moment`);
  const ritual = t(`${key}.ritual`);
  const invocacion = t(`${key}.invocation`);

  const agave = t(`${key}.alchemy.agave`);
  const alcohol = t(`${key}.alchemy.alcohol`);
  const tipo = t(`${key}.alchemy.type`);

  const productosRelacionados = productos.filter(
    (item) => item.slug !== producto.slug,
  );

  return (
    <main className="bg-bg">
      <HeroProducto producto={producto} />

      {/* Relato */}
      <section className="bg-bg py-20 sm:py-24 lg:py-32">
        <Container size="xl">
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-2
              lg:gap-16
              xl:gap-24
            "
          >
            {producto.imagenes.relato && (
              <div
                className="
                  overflow-hidden
                  border
                  border-white/10
                "
              >
                <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                  <img
                    src={producto.imagenes.relato}
                    alt={nombre}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  />
                </div>
              </div>
            )}

            <div>
              <span
                className="
                  text-[0.65rem]
                  tracking-[0.4em]
                  text-gold
                  sm:text-xs
                "
              >
                {estado}
              </span>

              <h2
                className="
                  mt-4
                  font-title
                  text-4xl
                  leading-tight
                  text-text
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {nombre}
              </h2>

              <p
                className="
                  mt-7
                  text-base
                  leading-8
                  text-text-muted
                  sm:text-lg
                  sm:leading-9
                "
              >
                {relato}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Introspección */}
      <section className="bg-surface/40 py-20 sm:py-24 lg:py-28">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-8
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <div className="h-px w-14 bg-gold/40" />

              <span className="text-xs text-gold">
                ✦
              </span>

              <div className="h-px w-14 bg-gold/40" />
            </div>

            <p
              className="
                font-title
                text-2xl
                leading-[1.6]
                text-text
                sm:text-3xl
                lg:text-4xl
              "
            >
              {introspeccion}
            </p>
          </div>
        </Container>
      </section>

      {/* Manifiesto */}
      <section className="bg-bg py-20 sm:py-24 lg:py-32">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
                block
                text-[0.65rem]
                tracking-[0.4em]
                text-gold
                sm:text-xs
              "
            >
              {t("products.common.soulStates")}
            </span>

            <p
              className="
                mt-6
                font-title
                text-3xl
                leading-[1.45]
                text-text
                sm:text-4xl
                lg:text-5xl
              "
            >
              {manifiesto}
            </p>
          </div>
        </Container>
      </section>

      {/* Momento */}
      <section className="relative min-h-[600px] overflow-hidden">
        {producto.imagenes.momento && (
          <img
            src={producto.imagenes.momento}
            alt={`${t("products.common.moment")} ${estado}`}
            loading="lazy"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
        )}

        <div className="absolute inset-0 bg-black/55" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/85
            via-black/45
            to-transparent
          "
        />

        <Container
          size="xl"
          className="
            relative
            z-10
            flex
            min-h-[600px]
            items-center
            py-20
          "
        >
          <div className="max-w-2xl">
            <span
              className="
                text-[0.65rem]
                tracking-[0.4em]
                text-gold
                sm:text-xs
              "
            >
              {t("products.common.moment")}
            </span>

            <p
              className="
                mt-6
                font-title
                text-3xl
                leading-[1.45]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              {momento}
            </p>
          </div>
        </Container>
      </section>

      {/* Ritual e invocación */}
      <section className="bg-bg py-20 sm:py-24 lg:py-32">
        <Container size="xl">
          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:gap-8
            "
          >
            <article
              className="
                border
                border-white/10
                bg-surface/50
                p-7
                sm:p-10
                lg:p-12
              "
            >
              <span className="text-2xl text-gold">
                ✦
              </span>

              <h2
                className="
                  mt-5
                  font-title
                  text-4xl
                  text-text
                  sm:text-5xl
                "
              >
                {t("products.common.ritual")}
              </h2>

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-text-muted
                  sm:text-lg
                  sm:leading-9
                "
              >
                {ritual}
              </p>
            </article>

            <article
              className="
                border
                border-gold/25
                bg-gold/5
                p-7
                sm:p-10
                lg:p-12
              "
            >
              <span className="text-2xl text-gold">
                ✦
              </span>

              <h2
                className="
                  mt-5
                  font-title
                  text-4xl
                  text-text
                  sm:text-5xl
                "
              >
                {t("products.common.invoke")}
              </h2>

              <p
                className="
                  mt-6
                  font-title
                  text-xl
                  leading-[1.7]
                  text-text
                  sm:text-2xl
                "
              >
                “{invocacion}”
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Nuestra alquimia */}
      <section className="bg-surface/40 py-20 sm:py-24 lg:py-28">
        <Container size="xl">
          <div className="mx-auto max-w-5xl text-center">
            <span
              className="
                text-[0.65rem]
                tracking-[0.4em]
                text-gold
                sm:text-xs
              "
            >
              {t("products.common.alchemy")}
            </span>

            <h2
              className="
                mt-4
                font-title
                text-4xl
                text-text
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t("products.common.essenceOf", {
                state: estado,
              })}
            </h2>

            <div
              className="
                mt-12
                grid
                gap-px
                overflow-hidden
                border
                border-white/10
                bg-white/10
                sm:grid-cols-3
              "
            >
              <div className="bg-bg px-6 py-9">
                <span
                  className="
                    text-xs
                    tracking-[0.25em]
                    text-gold
                  "
                >
                  {t("products.common.agave")}
                </span>

                <p className="mt-4 font-title text-3xl text-text">
                  {agave}
                </p>
              </div>

              <div className="bg-bg px-6 py-9">
                <span
                  className="
                    text-xs
                    tracking-[0.25em]
                    text-gold
                  "
                >
                  {t("products.common.alcohol")}
                </span>

                <p className="mt-4 font-title text-3xl text-text">
                  {alcohol}
                </p>
              </div>

              <div className="bg-bg px-6 py-9">
                <span
                  className="
                    text-xs
                    tracking-[0.25em]
                    text-gold
                  "
                >
                  {t("products.common.production")}
                </span>

                <p className="mt-4 font-title text-3xl text-text">
                  {tipo}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Productos relacionados */}
      <section className="bg-bg py-20 sm:py-24 lg:py-28">
        <Container size="xl">
          <div className="text-center">
            <span
              className="
                text-[0.65rem]
                tracking-[0.4em]
                text-gold
                sm:text-xs
              "
            >
              {t("products.common.continueJourney")}
            </span>

            <h2
              className="
                mt-4
                font-title
                text-4xl
                text-text
                sm:text-5xl
              "
            >
              {t("products.common.discoverOthers")}
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {productosRelacionados.map((relacionado) => {
              const relacionadoKey =
                relacionado.translationKey;

              const relacionadoEstado = t(
                `${relacionadoKey}.state`,
              );

              const relacionadoNombre = t(
                `${relacionadoKey}.name`,
              );

              return (
                <Link
                  key={relacionado.slug}
                  to={`/productos/${relacionado.slug}`}
                  className="
                    group
                    relative
                    min-h-[420px]
                    overflow-hidden
                    border
                    border-white/10
                  "
                >
                  <img
                    src={relacionado.imagenes.heroDesktop}
                    alt={relacionadoNombre}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/40
                      to-black/10
                    "
                  />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span
                      className="
                        text-xs
                        tracking-[0.3em]
                        text-gold
                      "
                    >
                      {relacionadoEstado}
                    </span>

                    <h3
                      className="
                        mt-3
                        font-title
                        text-3xl
                        leading-tight
                        text-white
                      "
                    >
                      {relacionadoNombre}
                    </h3>

                    <span
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-white/75
                      "
                    >
                      {t("products.common.discover")}

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
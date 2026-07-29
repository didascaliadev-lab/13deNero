import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

import {
  experienciasPortal,
  obtenerExperienciaPortal,
  type ExperienciaPortalSlug,
} from "../data/portal";

type ListaSensorialProps = {
  titulo: string;
  items: string[];
  descripcion?: string;
};

export default function Portal() {
  const { t } = useTranslation();

  const [experienciaActiva, setExperienciaActiva] =
    useState<ExperienciaPortalSlug>("misterio");

  const experiencia = obtenerExperienciaPortal(
    experienciaActiva,
  );

  const key = experiencia.translationKey;

  const cambiarExperiencia = (
  slug: ExperienciaPortalSlug,
) => {
  setExperienciaActiva(slug);

  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

  const obtenerLista = (
    translationKey: string,
  ): string[] => {
    const value = t(translationKey, {
      returnObjects: true,
    });

    return Array.isArray(value)
      ? (value as string[])
      : [];
  };

  const estado = t(`${key}.state`);
  const personaje = t(`${key}.character`);
  const mezcal = t(`${key}.mezcal`);

  const saboresPrincipales = obtenerLista(
    `${key}.mainFlavor.items`,
  );

  const saboresAlternos = obtenerLista(
    `${key}.alternateFlavor.items`,
  );

  const olores = obtenerLista(`${key}.smell.items`);
  const tacto = obtenerLista(`${key}.touch.items`);
  const vista = obtenerLista(`${key}.sight.items`);
  const audicion = obtenerLista(`${key}.hearing.items`);

  return (
    <main className="bg-bg">
      {/* Hero */}
      <section
        className="
          relative
          flex
          min-h-[620px]
          items-center
          overflow-hidden
          sm:min-h-[680px]
          lg:min-h-[760px]
        "
      >
        <picture className="absolute inset-0 h-full w-full">
          <source
            media="(max-width: 767px)"
            srcSet={experiencia.imagenes.mobile}
          />

          <img
            key={experiencia.imagenes.desktop}
            src={experiencia.imagenes.desktop}
            alt={t("portal.hero.imageAlt", {
              state: estado,
            })}
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </picture>

        <div className="absolute inset-0 bg-black/20" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/95
            via-black/60
            to-black/10
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
          size="xl"
          className="
            relative
            z-10
            w-full
            pb-16
            pt-36
            sm:pb-20
            sm:pt-40
            lg:pb-24
            lg:pt-44
          "
        >
          <div className="max-w-3xl">
            <span
              className="
                text-[0.65rem]
                tracking-[0.45em]
                text-gold
                sm:text-xs
              "
            >
              {t("portal.hero.eyebrow")}
            </span>

            <h1
              className="
                mt-5
                max-w-3xl
                font-title
                text-5xl
                leading-[1]
                text-text
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
              "
            >
              {t("portal.hero.title")}
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
              {t("portal.hero.description")}
            </p>
          </div>
        </Container>
      </section>

      {/* Selector de experiencias */}
      <section
        className="
          sticky
          top-20
          z-30
          border-y
          border-white/10
          bg-bg/95
          backdrop-blur-xl
          lg:top-24
        "
      >
        <Container size="xl">
          <div
            className="
              flex
              gap-2
              overflow-x-auto
              py-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:justify-center
              sm:gap-4
            "
          >
            {experienciasPortal.map((item) => {
              const activo =
                item.slug === experienciaActiva;

              return (
                <button
                  key={item.slug}
                  type="button"
                onClick={() => cambiarExperiencia(item.slug)}
                  aria-pressed={activo}
                  className={`
                    shrink-0
                    border
                    px-5
                    py-3
                    text-xs
                    tracking-[0.22em]
                    transition-all
                    duration-300
                    sm:px-7
                    ${
                      activo
                        ? "border-gold bg-gold text-bg"
                        : "border-white/10 bg-white/[0.02] text-muted hover:border-gold/50 hover:text-gold"
                    }
                  `}
                >
                  {t(`${item.translationKey}.state`)}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

            {/* Presentación */}
        <section className="bg-bg py-16 sm:py-20 lg:py-24">
          <Container size="xl">
            <div
              key={experiencia.slug}
              className="
                grid
                items-center
                gap-12
                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-16
                xl:gap-24
              "
            >
              {/* Estado y frase */}
              <div className="max-w-xl">
                <span
                  className="
                    block
                    text-[0.65rem]
                    tracking-[0.42em]
                    text-gold
                    sm:text-xs
                  "
                >
                  {estado.toUpperCase()}
                </span>

                <p
                  className="
                    mt-6
                    max-w-lg
                    font-title
                    text-3xl
                    leading-[1.25]
                    text-text
                    sm:text-4xl
                    sm:leading-[1.2]
                    lg:text-[2.85rem]
                    xl:text-[3.15rem]
                  "
                >
                  {t(`${key}.quote`)}
                </p>

                <div
                  aria-hidden="true"
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div className="h-px w-12 bg-gold/45" />
                  <span className="text-[0.6rem] text-gold">
                    ✦
                  </span>
                </div>
              </div>

              {/* Personaje y mezcal */}
              <div
                className="
                  grid
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/10
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    bg-surface/80
                    px-6
                    py-8
                    sm:px-8
                    sm:py-10
                    lg:px-9
                  "
                >
                  <span
                    className="
                      text-[0.65rem]
                      tracking-[0.3em]
                      text-gold
                      sm:text-xs
                    "
                  >
                    {t("portal.common.character")}
                  </span>

                  <p
                    className="
                      mt-4
                      max-w-sm
                      font-title
                      text-2xl
                      leading-[1.25]
                      text-text
                      sm:text-3xl
                    "
                  >
                    {personaje}
                  </p>
                </div>

                <div
                  className="
                    border-t
                    border-white/10
                    bg-surface/80
                    px-6
                    py-8
                    sm:border-l
                    sm:border-t-0
                    sm:px-8
                    sm:py-10
                    lg:px-9
                  "
                >
                  <span
                    className="
                      text-[0.65rem]
                      tracking-[0.3em]
                      text-gold
                      sm:text-xs
                    "
                  >
                    {t("portal.common.mezcal")}
                  </span>

                  <p
                    className="
                      mt-4
                      font-title
                      text-2xl
                      leading-[1.25]
                      text-text
                      sm:text-3xl
                    "
                  >
                    {mezcal}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      {/* Sabores */}
      <section className="bg-surface/40 py-20 sm:py-24 lg:py-28">
        <Container size="xl">
          <div className="max-w-3xl">
            <span
              className="
                text-[0.65rem]
                tracking-[0.4em]
                text-gold
                sm:text-xs
              "
            >
              {t("portal.common.pairingEyebrow")}
            </span>

            <h2
              className="
                mt-5
                font-title
                text-4xl
                leading-tight
                text-text
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t("portal.common.pairings")}
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-text-muted
                sm:text-lg
                sm:leading-9
              "
            >
              {t("portal.common.pairingsDescription")}
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              lg:grid-cols-2
            "
          >
            <article
              className="
                border
                border-gold/25
                bg-gold/[0.04]
                p-7
                sm:p-9
                lg:p-10
              "
            >
              <span
                className="
                  text-xs
                  tracking-[0.25em]
                  text-gold
                "
              >
                {t("portal.common.mainFlavor")}
              </span>

              <div className="mt-6 flex flex-wrap gap-3">
                {saboresPrincipales.map((sabor) => (
                  <span
                    key={sabor}
                    className="
                      border
                      border-gold/25
                      bg-bg/60
                      px-4
                      py-2
                      text-sm
                      leading-6
                      text-text
                    "
                  >
                    {sabor}
                  </span>
                ))}
              </div>

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
                {t(`${key}.mainFlavor.description`)}
              </p>
            </article>

            <article
              className="
                border
                border-white/10
                bg-bg/55
                p-7
                sm:p-9
                lg:p-10
              "
            >
              <span
                className="
                  text-xs
                  tracking-[0.25em]
                  text-gold
                "
              >
                {t("portal.common.alternateFlavor")}
              </span>

              <div className="mt-6 flex flex-wrap gap-3">
                {saboresAlternos.map((sabor) => (
                  <span
                    key={sabor}
                    className="
                      border
                      border-white/10
                      px-4
                      py-2
                      text-sm
                      leading-6
                      text-text-muted
                    "
                  >
                    {sabor}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Experiencia sensorial */}
      <section className="bg-bg py-20 sm:py-24 lg:py-28">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                text-[0.65rem]
                tracking-[0.4em]
                text-gold
                sm:text-xs
              "
            >
              {t("portal.common.sensesEyebrow")}
            </span>

            <h2
              className="
                mt-5
                font-title
                text-4xl
                leading-tight
                text-text
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t("portal.common.sensoryExperience")}
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              gap-px
              overflow-hidden
              border
              border-white/10
              bg-white/10
              md:grid-cols-2
            "
          >
            <ListaSensorial
              titulo={t("portal.common.smell")}
              items={olores}
              descripcion={t(`${key}.smell.description`)}
            />

            <ListaSensorial
              titulo={t("portal.common.touch")}
              items={tacto}
            />

            <ListaSensorial
              titulo={t("portal.common.sight")}
              items={vista}
            />

            <ListaSensorial
              titulo={t("portal.common.hearing")}
              items={audicion}
            />
          </div>
        </Container>
      </section>

      {/* Ritual */}
      <section className="bg-surface/40 py-20 sm:py-24 lg:py-32">
        <Container size="lg">
          <article
            className="
              mx-auto
              max-w-5xl
              border
              border-gold/25
              bg-bg/65
              px-6
              py-12
              text-center
              sm:px-10
              sm:py-16
              lg:px-16
              lg:py-20
            "
          >
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

            <span
              className="
                text-xs
                tracking-[0.3em]
                text-gold
              "
            >
              {t("portal.common.experience")}
            </span>

            <h2
              className="
                mt-5
                font-title
                text-4xl
                leading-tight
                text-text
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t(`${key}.experience.title`)}
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-base
                leading-8
                text-text-muted
                sm:text-lg
                sm:leading-9
              "
            >
              {t(`${key}.experience.description`)}
            </p>
          </article>
        </Container>
      </section>

      {/* Enfoque */}
      <section className="bg-bg py-20 sm:py-24 lg:py-28">
        <Container size="xl">
          <div
            className="
              grid
              gap-10
              border-y
              border-white/10
              py-12
              md:grid-cols-[0.55fr_1.45fr]
              md:items-start
              md:gap-16
              lg:py-16
            "
          >
            <div>
              <span
                className="
                  text-xs
                  tracking-[0.28em]
                  text-gold
                "
              >
                {t("portal.common.focus")}
              </span>

              <h2
                className="
                  mt-5
                  font-title
                  text-4xl
                  leading-tight
                  text-text
                  sm:text-5xl
                "
              >
                {t(`${key}.focus.title`)}
              </h2>
            </div>

            <p
              className="
                text-lg
                leading-9
                text-text-muted
                sm:text-xl
                sm:leading-10
              "
            >
              {t(`${key}.focus.description`)}
            </p>
          </div>
        </Container>
      </section>

      {/* Cierre */}
      <section className="bg-surface/40 py-20 sm:py-24 lg:py-32">
        <Container size="lg">
          <div className="mx-auto max-w-5xl text-center">
            <span
              className="
                text-xs
                tracking-[0.3em]
                text-gold
              "
            >
              {t("portal.common.closing")}
            </span>

            <p
              className="
                mt-7
                font-title
                text-3xl
                leading-[1.5]
                text-text
                sm:text-4xl
                lg:text-5xl
              "
            >
              “{t(`${key}.closing`)}”
            </p>

        
          </div>
        </Container>
      </section>
    </main>
  );
}

function ListaSensorial({
  titulo,
  items,
  descripcion,
}: ListaSensorialProps) {
  return (
    <article
      className="
        bg-surface/70
        p-7
        sm:p-9
        lg:p-10
      "
    >
      <h3
        className="
          font-title
          text-3xl
          text-text
          sm:text-4xl
        "
      >
        {titulo}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="
              border
              border-white/10
              bg-bg/45
              px-4
              py-2
              text-sm
              leading-6
              text-text-muted
            "
          >
            {item}
          </span>
        ))}
      </div>

      {descripcion && (
        <p
          className="
            mt-7
            text-base
            leading-8
            text-text-muted
          "
        >
          {descripcion}
        </p>
      )}
    </article>
  );
}
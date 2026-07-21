import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

type ProcesoItem = {
  id: string;
  number: string;
  titleKey: string;
  textKey: string;
  image: string;
  imagePosition?: string;
};

const procesos: ProcesoItem[] = [
  {
    id: "agave",
    number: "01",
    titleKey: "home.proceso.steps.agave.title",
    textKey: "home.proceso.steps.agave.text",
    image: "/fotos/proceso/maguey.jpg",
    imagePosition: "center center",
  },
  {
    id: "fuego",
    number: "02",
    titleKey: "home.proceso.steps.fuego.title",
    textKey: "home.proceso.steps.fuego.text",
    image: "/fotos/proceso/horneado.jpg",
    imagePosition: "center center",
  },
  {
    id: "transformacion",
    number: "03",
    titleKey: "home.proceso.steps.transformacion.title",
    textKey: "home.proceso.steps.transformacion.text",
    image: "/fotos/proceso/molienda.jpg",
    imagePosition: "center center",
  },
  {
    id: "espiritu",
    number: "04",
    titleKey: "home.proceso.steps.espiritu.title",
    textKey: "home.proceso.steps.espiritu.text",
    image: "/fotos/proceso/destilado.jpg",
    imagePosition: "center center",
  },
];

export default function Proceso() {
  const { t } = useTranslation();

  return (
  <section
  id="proceso"
  className="overflow-hidden bg-bg pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-32"
>
      <Container size="2xl">
       {/* Encabezado */}
<div className="mx-auto max-w-4xl text-center">
  <span className="block text-[0.65rem] uppercase tracking-[0.45em] text-gold sm:text-xs">
    {t("home.proceso.badge")}
  </span>

  <h2 className="mt-4 font-title text-4xl leading-[1.08] text-text sm:text-5xl lg:text-6xl">
    {t("home.proceso.title")}
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
    {t("home.proceso.intro")}
  </p>
</div>
        {/* Etapas */}
        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-28 lg:space-y-28">
          {procesos.map((proceso, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article
                key={proceso.id}
                className="
                  grid
                  items-center
                  gap-8
                  lg:grid-cols-2
                  lg:gap-14
                  xl:gap-20
                "
              >
                {/* Imagen */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    border
                    border-white/10
                    ${
                      reverse
                        ? "lg:order-2"
                        : "lg:order-1"
                    }
                  `}
                >
                  <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3.35]">
                    <img
                      src={proceso.image}
                      alt={t(proceso.titleKey)}
                      loading="lazy"
                      style={{
                        objectPosition: proceso.imagePosition,
                      }}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-[1.03]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  </div>

                  {/* Número sobre la imagen en móvil */}
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      font-title
                      text-2xl
                      text-gold
                      lg:hidden
                    "
                  >
                    {proceso.number}
                  </span>
                </div>

                {/* Texto */}
                <div
                  className={`
                    ${
                      reverse
                        ? "lg:order-1 lg:pr-10"
                        : "lg:order-2 lg:pl-10"
                    }
                  `}
                >
                  <div className="hidden items-center gap-4 lg:flex">
                    <span className="font-title text-2xl text-gold">
                      {proceso.number}
                    </span>

                    <div className="h-px w-14 bg-gold/60" />
                  </div>

                  <h3 className="font-title text-3xl leading-tight text-text sm:text-4xl lg:mt-6 lg:text-5xl">
                    {t(proceso.titleKey)}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
                    {t(proceso.textKey)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      {/* Cierre */}
        <div className="mx-auto mt-20 max-w-3xl text-center sm:mt-24 lg:mt-32">
          <div className="mx-auto mb-8 h-px w-20 bg-gold" />

          <p className="font-title text-3xl leading-snug text-text sm:text-4xl lg:text-5xl">
            {t("home.proceso.closing")}
          </p>

           <Link to="/portal"className="
              group
              mt-10
              inline-flex
              w-full
              max-w-[280px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-gold
              px-6
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[0.22em]
              text-gold
              transition-all
              duration-300
              hover:bg-gold
              hover:text-black
              sm:w-auto
              sm:max-w-none
              sm:px-8
              sm:text-sm
            ">
                {t("home.proceso.portalButton")}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
                </span>
            </Link>
        </div>
        {/* Transición hacia testimonios */}
           <div className="mx-auto mt-10 max-w-6xl px-6 lg:mt-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
      </Container>
    </section>
  );
}
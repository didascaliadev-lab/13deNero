import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import Container from "../ui/Container";

type Testimonio = {
  id: number;
  nombre: string;
  comentarioKey: string;
  foto: string;
  imagePosition?: string;
};

const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "Abraham Villalobos",
    comentarioKey: "home.testimonios.items.abraham",
    foto: "/fotos/opiniones/abraham.jpg",
    imagePosition: "center center",
  },
  {
    id: 2,
    nombre: "Patricia Gómez",
    comentarioKey: "home.testimonios.items.patricia",
    foto: "/fotos/opiniones/patricia.jpg",
    imagePosition: "center center",
  },
  {
    id: 3,
    nombre: "Luis Alberto Olmos",
    comentarioKey: "home.testimonios.items.luis",
    foto: "/fotos/opiniones/luis.jpg",
    imagePosition: "center center",
  },
];

const TIEMPO_LECTURA = 30000;
const DURACION_TRANSICION = 300;

export default function Testimonios() {
  const { t } = useTranslation();

  const [activo, setActivo] = useState(0);
  const [animando, setAnimando] = useState(false);

  const cambiarTestimonio = useCallback(
    (nuevoIndice: number) => {
      if (
        nuevoIndice === activo ||
        animando ||
        nuevoIndice < 0 ||
        nuevoIndice >= testimonios.length
      ) {
        return;
      }

      setAnimando(true);

      window.setTimeout(() => {
        setActivo(nuevoIndice);
        setAnimando(false);
      }, DURACION_TRANSICION);
    },
    [activo, animando],
  );

  const anterior = () => {
    const nuevoIndice =
      activo === 0 ? testimonios.length - 1 : activo - 1;

    cambiarTestimonio(nuevoIndice);
  };

  const siguiente = useCallback(() => {
    const nuevoIndice =
      activo === testimonios.length - 1 ? 0 : activo + 1;

    cambiarTestimonio(nuevoIndice);
  }, [activo, cambiarTestimonio]);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      siguiente();
    }, TIEMPO_LECTURA);

    return () => {
      window.clearInterval(intervalo);
    };
  }, [siguiente]);

  const testimonio = testimonios[activo];

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
      className="
        overflow-hidden
        bg-bg
        pt-8
        pb-16
        sm:pt-10
        sm:pb-20
        lg:pt-12
        lg:pb-24
      "
    >
      <Container size="xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="testimonios-title"
            className="
              font-title
              text-4xl
              leading-tight
              text-text
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t("home.testimonios.title")}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-text-muted
              sm:text-lg
              sm:leading-8
            "
          >
            {t("home.testimonios.subtitle")}
          </p>
        </div>

        {/* Testimonio */}
        <div
          className="
            relative
            mx-auto
            mt-16
            w-full
            max-w-5xl
            sm:mt-20
            lg:mt-24
          "
        >
       <div className="relative mx-auto mt-14 w-full max-w-6xl sm:mt-16 md:mt-20">
         <article
           aria-live="polite"
           className={`
           relative
           w-full
           border-y
           border-white/10
           bg-surface/60
           px-5
           pb-8
           pt-16
           text-center
           backdrop-blur-sm
           transition-all
           duration-500

           sm:border
           sm:px-8
           sm:pb-10
           sm:pt-20

           md:px-12
           md:pb-10

           lg:px-16
           lg:pb-12

           ${
            animando
              ? "translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
           }
           `}
         >
           <div
             className="
               absolute
               left-1/2
               top-0
               h-20
               w-20
               -translate-x-1/2
               -translate-y-1/2
               overflow-hidden
               rounded-full
               border
               border-gold/60
               bg-bg
               p-1
               shadow-2xl

               sm:h-24
               sm:w-24

               md:h-28
               md:w-28

               lg:h-32
               lg:w-32
             "
           >
             <div className="h-full w-full overflow-hidden rounded-full">
               <img
                 src={testimonio.foto}
                 alt={testimonio.nombre}
                 loading="lazy"
                 style={{
                   objectPosition:
                     testimonio.imagePosition ?? "center center",
                 }}
                 className="h-full w-full object-cover"
               />
              </div>
           </div>

           <div
             aria-hidden="true"
             className="mx-auto flex items-center justify-center gap-3"
           >
             <div className="h-px w-8 bg-gold/40 sm:w-12" />
             <span className="text-[0.65rem] text-gold">✦</span>
             <div className="h-px w-8 bg-gold/40 sm:w-12" />
           </div>

           <blockquote className="mx-auto mt-6 max-w-4xl">
             <p
               className="
                 font-title
                 text-base
                 leading-[1.75]
                 text-text

                 sm:text-[1.05rem]
                 sm:leading-[1.75]

                 md:text-lg
                 md:leading-[1.7]

                 lg:text-xl
                 lg:leading-[1.7]

                 xl:text-[1.35rem]
               "
             >
               {t(testimonio.comentarioKey)}
             </p>
           </blockquote>

           <div className="mt-6">
             <p className="text-xs tracking-[0.13em] text-gold sm:text-sm">
               {testimonio.nombre}
             </p>
           </div>
         </article>
        </div>
       </div>

        {/* Navegación */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-4
            sm:mt-8
          "
        >
          <button
            type="button"
            onClick={anterior}
            disabled={animando}
            aria-label={t("home.testimonios.previous")}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-gold
              transition-all
              duration-300

              hover:border-gold
              hover:bg-gold
              hover:text-black

              disabled:cursor-not-allowed
              disabled:opacity-40

              sm:h-11
              sm:w-11
            "
          >
            <HiOutlineArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Indicadores */}
          <div
            className="flex items-center justify-center gap-2.5"
            role="group"
            aria-label={t("home.testimonios.navigation")}
          >
            {testimonios.map((item, index) => {
              const estaActivo = activo === index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => cambiarTestimonio(index)}
                  disabled={animando}
                  aria-label={`${t("home.testimonios.goTo")} ${index + 1}`}
                  aria-current={estaActivo ? "true" : undefined}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300

                    disabled:cursor-not-allowed

                    ${
                      estaActivo
                        ? "w-7 bg-gold"
                        : "w-1.5 bg-white/25 hover:bg-gold/60"
                    }
                  `}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={siguiente}
            disabled={animando}
            aria-label={t("home.testimonios.next")}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-gold
              transition-all
              duration-300

              hover:border-gold
              hover:bg-gold
              hover:text-black

              disabled:cursor-not-allowed
              disabled:opacity-40

              sm:h-11
              sm:w-11
            "
          >
            <HiOutlineArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
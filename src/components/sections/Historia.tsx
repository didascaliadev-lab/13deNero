import Container from "../ui/Container"
import {useTranslation, Trans} from "react-i18next";


export default function Historia() {
const {t} = useTranslation();
    return (
    <>
     <section className="bg-bg py-20 sm:py-24 lg:py-32">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-title text-4xl leading-tight text-text sm:text-5xl lg:text-6xl">
                         {t("home.historia.slogan")}
            </p>
            <div className="mx-auto mt-10 h-px w-20 bg-gold" />
          </div>
        </Container>
      </section> 
       {/* Historia de la marca */}
      <section id="historia" className="bg-black py-20 sm:py-24 lg:py-32">
        <Container size="2xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      
            <div>
              <span className="mb-5 block text-sm uppercase tracking-[0.35em] text-gold">
                {t("home.historia.badge")}
              </span>

              <h2 className="mb-8 max-w-xl font-title text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {t("home.historia.title")}
              </h2>

              <div className="max-w-2xl space-y-6 text-base leading-8 text-white/70 sm:text-lg">
                <p>
                <Trans
                i18nKey="home.historia.parrafo1"
                components={{
                  strong: <strong className="font-medium text-gold" />,
                }}
              />
                </p>

                <p>
                  {t("home.historia.parrafo2")}
                </p>

                <p>
                  {t("home.historia.parrafo3")}
                 
                  
                </p>

                
                
              </div>
            </div>

            {/* Imagen */}
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/30 sm:-inset-6" />

              <img
                src="/fotos/historia1.jpg"
                alt="Historia de Mezcal 13 de Enero"
                className="
                  relative
                  h-[420px]
                  w-full
                  object-cover
                  sm:h-[520px]
                  lg:h-[640px]
                "
              />
            </div>
          </div>
        </Container>
      </section>
    
    </>
  )
}

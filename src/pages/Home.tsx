
import Hero from "../components/ui/Hero"; 
import Historia from "../components/sections/Historia";
import {useTranslation} from "react-i18next";
import Mezcales from "../components/sections/Mezcales"
import Proceso from "../components/sections/Proceso"
import Testimonios from "../components/sections/Testimonios"


function Home() {
  const {t} = useTranslation();
return (
<div>

   <Hero
   title= {t("home.hero.title")}
   subtitle= {t("home.hero.subtitle")}
   image="/fotos/heros/portada_home.jpg"
   mobileImage="/fotos/heros/portada_home_celular.jpg"
   imageAlt="Botellas de Mezcal 13 de Enero"
   height="lg"
   align="left"
   overlayStrength="light"
   desktopImagePosition="center 48%"
   mobileImagePosition="58% center"
   primaryButton={{
    label: t("home.hero.primaryButton"),
    href: "/productos",
   }}
   secondaryButton={{
    label: t("home.hero.secondaryButton"),
   onClick: () => {
    document
      .getElementById("historia")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  },
   }}
   />

   <Historia /> 
   <Mezcales />
   <Proceso />
   <Testimonios />
      
   </div>
  )
}

export default Home
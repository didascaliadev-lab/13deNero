import { useEffect, useState } from "react";
import { ShieldCheck, ShieldAlert } from "lucide-react";
import Button from "../ui/Button";

export default function AgeVerification() {
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem("13deNERO-age-verified");
  });

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleConfirmAge = (isAdult: boolean) => {
    if (isAdult) {
      sessionStorage.setItem("13deNERO-age-verified", "true");
      setIsVisible(false);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/90
        backdrop-blur-md
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-xl
          rounded-2xl
          border
          border-white/10
          bg-surface
          p-8
          shadow-2xl
          lg:p-12
        "
      >
        {/* Logo */}

        <div className="text-center">
          <span
            className="
              font-title
              text-4xl
              tracking-[8px]
              text-text)
            "
          >
            13 de Enero
          </span>

          <p
            className="
              mt-3
              text-xs
              uppercase
              tracking-[6px]
              text-gold
            "
          >
            Mezcal Artesanal
          </p>
        </div>

        {/* Divider */}

        <div
          className="
            mx-auto
            my-8
            h-px
            w-24
            bg-gold
          "
        />

        {/* Texto */}

        <div className="space-y-5 text-center">

          <h2 className="text-3xl">
            ¿Eres mayor de edad?
          </h2>

          <p className="mx-auto max-w-md">
            Este sitio está destinado exclusivamente para personas con la edad
            legal para consumir bebidas alcohólicas en su país.
          </p>

        </div>

        {/* Botones */}

        <div className="mt-10 flex flex-col gap-4">

          <Button
            size="lg"
            leftIcon={<ShieldCheck size={20} />}
            onClick={() => handleConfirmAge(true)}
          >
            Sí, soy mayor de edad
          </Button>

          <Button
            variant="outline"
            size="lg"
            leftIcon={<ShieldAlert size={20} />}
            onClick={() => handleConfirmAge(false)}
          >
            No, soy menor de edad
          </Button>

        </div>

        {/* Aviso */}

        <p
          className="
            mt-8
            text-center
            text-xs
            leading-6
            text-muted"
        >
          Al ingresar confirmas que cumples con la edad legal para consumir
          bebidas alcohólicas y aceptas nuestra política de consumo responsable.
        </p>
      </div>
    </div>
  );
}
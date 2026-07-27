import {
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";

type BotellaInteractivaProps = {
  imagenes: string[];
  alt: string;
};

export default function BotellaInteractiva({
  imagenes,
  alt,
}: BotellaInteractivaProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(
    null,
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    const container = containerRef.current;

    if (!container || imagenes.length <= 1) return;

    const rect = container.getBoundingClientRect();
    const cursorPosition = event.clientX - rect.left;
    const percentage = cursorPosition / rect.width;

    const nextIndex = Math.min(
      imagenes.length - 1,
      Math.max(
        0,
        Math.floor(percentage * imagenes.length),
      ),
    );

    setActiveIndex(nextIndex);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>,
  ) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (
    event: TouchEvent<HTMLDivElement>,
  ) => {
    if (touchStart === null || imagenes.length <= 1) {
      return;
    }

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) < 40) {
      setTouchStart(null);
      return;
    }

    if (difference > 0) {
      setActiveIndex((current) =>
        Math.min(current + 1, imagenes.length - 1),
      );
    } else {
      setActiveIndex((current) =>
        Math.max(current - 1, 0),
      );
    }

    setTouchStart(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="
        relative
        flex
        min-h-[460px]
        cursor-ew-resize
        items-center
        justify-center
        overflow-hidden
        sm:min-h-[540px]
        lg:min-h-[640px]
      "
    >
      {/* Imágenes */}
      <div
        className="
          relative
          h-[400px]
          w-full
          max-w-[420px]
          sm:h-[480px]
          lg:h-[560px]
        "
      >
        {imagenes.map((imagen, index) => (
          <img
            key={imagen}
            src={imagen}
            alt={index === activeIndex ? alt : ""}
            aria-hidden={index !== activeIndex}
            draggable={false}
            loading={index === 0 ? "eager" : "lazy"}
            className={`
              absolute
              inset-0
              h-full
              w-full
              select-none
              object-contain
              transition-all
              duration-500
              ease-out
              ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[0.985] opacity-0"
              }
            `}
          />
        ))}
      </div>

      {/* Indicadores */}
      {imagenes.length > 1 && (
        <div
          className="
            absolute
            bottom-3
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-2
            sm:bottom-5
          "
        >
          {imagenes.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar vista ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "w-7 bg-gold"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* Instrucción móvil */}
      {imagenes.length > 1 && (
        <span
          className="
            pointer-events-none
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[0.58rem]
            tracking-[0.25em]
            text-white/30
            sm:bottom-12
            lg:hidden
          "
        >
          DESLIZA PARA EXPLORAR
        </span>
      )}
    </div>
  );
}
export type ExperienciaPortalSlug =
  | "misterio"
  | "deseo"
  | "alegria"
  | "nostalgia";

export type ExperienciaPortal = {
  slug: ExperienciaPortalSlug;
  translationKey: string;

  imagenes: {
    desktop: string;
    mobile: string;
  };
};

export const experienciasPortal: ExperienciaPortal[] = [
  {
    slug: "misterio",
    translationKey: "portal.experiences.misterio",

    imagenes: {
      desktop: "/fotos/heros/misterio.jpg",
      mobile: "/fotos/heros/misterio_celular.jpg",
    },
  },

  {
    slug: "deseo",
    translationKey: "portal.experiences.deseo",

    imagenes: {
      desktop: "/fotos/heros/deseo.jpg",
      mobile: "/fotos/heros/deseo_celular.jpg",
    },
  },

  {
    slug: "alegria",
    translationKey: "portal.experiences.alegria",

    imagenes: {
      desktop: "/fotos/heros/alegria.jpg",
      mobile: "/fotos/heros/alegria_celular.jpg",
    },
  },

  {
    slug: "nostalgia",
    translationKey: "portal.experiences.nostalgia",

    imagenes: {
      desktop: "/fotos/heros/nostalgia.jpg",
      mobile: "/fotos/heros/nostalgia_celular.jpg",
    },
  },
];

export function obtenerExperienciaPortal(
  slug: ExperienciaPortalSlug,
): ExperienciaPortal {
  return (
    experienciasPortal.find(
      (experiencia) => experiencia.slug === slug,
    ) ?? experienciasPortal[0]
  );
}
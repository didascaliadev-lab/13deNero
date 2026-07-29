export type ProductoImagenes = {
  heroDesktop: string;
  heroMobile?: string;

  relato?: string;
  vistasRelato?: string[];

  momento?: string;
};

export type Producto = {
  slug: string;
  translationKey: string;
  imagenes: ProductoImagenes;
};

export const productos: Producto[] = [
  {
    slug: "misterio",
    translationKey: "products.items.misterio",

    imagenes: {
      heroDesktop: "/fotos/productos/misterio/hero.jpg",
      heroMobile: "/fotos/productos/misterio/hero-celu.jpg",

      relato: "/fotos/productos/misterio/vistas/frente.webp",

      vistasRelato: [
        "/fotos/productos/misterio/vistas/misterio1.webp",
        "/fotos/productos/misterio/vistas/misterio2.webp",
        "/fotos/productos/misterio/vistas/misterio3.webp",
        "/fotos/productos/misterio/vistas/misterio4.webp",
      ],

      momento: "/fotos/productos/misterio/momento.webp",
    },
  },

  {
    slug: "nostalgia",
    translationKey: "products.items.nostalgia",

    imagenes: {
      heroDesktop: "/fotos/productos/nostalgia/hero.jpg",
      heroMobile: "/fotos/productos/nostalgia/hero-celu.jpg",

      relato: "/fotos/productos/nostalgia/vistas/frente.webp",

      vistasRelato: [
        "/fotos/productos/nostalgia/vistas/nostalgia1.webp",
        "/fotos/productos/nostalgia/vistas/nostalgia2.webp",
        "/fotos/productos/nostalgia/vistas/nostalgia3.webp",
        "/fotos/productos/nostalgia/vistas/nostalgia4.webp",
      ],

      momento: "/fotos/productos/nostalgia/momento.webp",
    },
  },

  {
    slug: "deseo",
    translationKey: "products.items.deseo",

    imagenes: {
      heroDesktop: "/fotos/productos/deseo/hero.jpg",
      heroMobile: "/fotos/productos/deseo/hero-celu.jpg",

      relato: "/fotos/productos/deseo/vistas/frente.webp",

      vistasRelato: [
        "/fotos/productos/deseo/vistas/deseo1.webp",
        "/fotos/productos/deseo/vistas/deseo2.webp",
        "/fotos/productos/deseo/vistas/deseo3.webp",
        "/fotos/productos/deseo/vistas/deseo4.webp",
      ],

      momento: "/fotos/productos/deseo/momento.webp",
    },
  },

  {
    slug: "alegria",
    translationKey: "products.items.alegria",

    imagenes: {
      heroDesktop: "/fotos/productos/alegria/hero.jpg",
      heroMobile: "/fotos/productos/alegria/hero-celu.jpg",
      relato: "/fotos/productos/alegria/vistas/frente.webp",

      vistasRelato: [
        "/fotos/productos/alegria/vistas/alegria1.webp",
        "/fotos/productos/alegria/vistas/alegria2.webp",
        "/fotos/productos/alegria/vistas/alegria3.webp",
        "/fotos/productos/alegria/vistas/alegria4.webp",
      ],

      momento: "/fotos/productos/alegria/momento.webp",
    },
  },
];

export function obtenerProductoPorSlug(
  slug: string | undefined,
): Producto | undefined {
  if (!slug) return undefined;

  return productos.find(
    (producto) => producto.slug === slug,
  );
}
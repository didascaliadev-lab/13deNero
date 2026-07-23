export type ProductoImagenes = {
  heroDesktop: string;
  heroMobile?: string;
  botella: string;
  relato?: string;
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
      botella: "/fotos/productos/misterio/misterio-hero.jpg",
      relato: "/fotos/productos/misterio/relato.jpg",
      momento: "/fotos/productos/misterio/momento.jpg",
    },
  },

  {
    slug: "nostalgia",
    translationKey: "products.items.nostalgia",

    imagenes: {
      heroDesktop: "/fotos/productos/nostalgia/hero.jpg",
      heroMobile: "/fotos/productos/nostalgia/hero-celu.jpg",
      botella: "/fotos/productos/nostalgia/botella.png",
      relato: "/fotos/productos/nostalgia/relato.jpg",
      momento: "/fotos/productos/nostalgia/momento.jpg",
    },
  },

  {
    slug: "deseo",
    translationKey: "products.items.deseo",

    imagenes: {
      heroDesktop: "/fotos/productos/deseo/hero.jpg",
      heroMobile: "/fotos/productos/deseo/hero-celu.jpg",
      botella: "/fotos/productos/deseo/botella.png",
      relato: "/fotos/productos/deseo/relato.jpg",
      momento: "/fotos/productos/deseo/momento.jpg",
    },
  },

  {
    slug: "alegria",
    translationKey: "products.items.alegria",

    imagenes: {
      heroDesktop: "/fotos/productos/alegria/hero.jpg",
      heroMobile: "/fotos/productos/alegria/hero-celu.jpg",
      botella: "/fotos/productos/alegria/botella.jpg",
      relato: "/fotos/productos/alegria/relato.png",
      momento: "/fotos/productos/alegria/momento.jpg",
    },
  },
];

export function obtenerProductoPorSlug(
  slug: string | undefined,
): Producto | undefined {
  if (!slug) return undefined;

  return productos.find((producto) => producto.slug === slug);
}
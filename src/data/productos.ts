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
      heroDesktop: "/images/productos/misterio/hero.jpg",
      heroMobile: "/images/productos/misterio/hero-mobile.jpg",
      botella: "/images/productos/misterio/botella.png",
      relato: "/images/productos/misterio/relato.jpg",
      momento: "/images/productos/misterio/momento.jpg",
    },
  },

  {
    slug: "nostalgia",
    translationKey: "products.items.nostalgia",

    imagenes: {
      heroDesktop: "/images/productos/nostalgia/hero.jpg",
      heroMobile: "/images/productos/nostalgia/hero-mobile.jpg",
      botella: "/images/productos/nostalgia/botella.png",
      relato: "/images/productos/nostalgia/relato.jpg",
      momento: "/images/productos/nostalgia/momento.jpg",
    },
  },

  {
    slug: "deseo",
    translationKey: "products.items.deseo",

    imagenes: {
      heroDesktop: "/images/productos/deseo/hero.jpg",
      heroMobile: "/images/productos/deseo/hero-mobile.jpg",
      botella: "/images/productos/deseo/botella.png",
      relato: "/images/productos/deseo/relato.jpg",
      momento: "/images/productos/deseo/momento.jpg",
    },
  },

  {
    slug: "alegria",
    translationKey: "products.items.alegria",

    imagenes: {
      heroDesktop: "/images/productos/alegria/hero.jpg",
      heroMobile: "/images/productos/alegria/hero-mobile.jpg",
      botella: "/images/productos/alegria/botella.png",
      relato: "/images/productos/alegria/relato.jpg",
      momento: "/images/productos/alegria/momento.jpg",
    },
  },
];

export function obtenerProductoPorSlug(
  slug: string | undefined,
): Producto | undefined {
  if (!slug) return undefined;

  return productos.find((producto) => producto.slug === slug);
}
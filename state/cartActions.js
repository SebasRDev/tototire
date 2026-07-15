import { formatPrice } from "../helpers/helpers";

export const getCartQuantity = (products) =>
  products.reduce((sum, p) => sum + p.selected, 0);

export const getCartTotal = (products) =>
  products.reduce((sum, p) => sum + p.selected * formatPrice(p.PRECIO), 0);

export const addProductToCart = (cartContext, product) => {
  const { products } = cartContext;
  const exists = products.find((p) => p.slug === product.slug);

  const nextProducts = exists
    ? products.map((p) =>
        p.slug === product.slug ? { ...p, selected: p.selected + 1 } : p
      )
    : [...products, { ...product, selected: 1 }];

  return {
    ...cartContext,
    open: true,
    products: nextProducts,
  };
};

export const removeProductFromCart = (cartContext, slug) => ({
  ...cartContext,
  products: cartContext.products.filter((p) => p.slug !== slug),
});

export const updateProductQuantity = (cartContext, slug, selected) => ({
  ...cartContext,
  products: cartContext.products.map((p) =>
    p.slug === slug ? { ...p, selected } : p
  ),
});

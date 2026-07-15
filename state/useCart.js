import { useContext } from "react";
import { shopingCartContext } from "./context";
import {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
  getCartQuantity,
  getCartTotal,
} from "./cartActions";

export const useCart = () => {
  const [cartContext, setCartContext] = useContext(shopingCartContext);
  const { products, open } = cartContext;

  const addToCart = (product) =>
    setCartContext(addProductToCart(cartContext, product));

  const removeFromCart = (slug) =>
    setCartContext(removeProductFromCart(cartContext, slug));

  const updateQuantity = (slug, selected) =>
    setCartContext(updateProductQuantity(cartContext, slug, selected));

  const setOpen = (isOpen) => setCartContext({ ...cartContext, open: isOpen });

  const clearCart = () => setCartContext({ ...cartContext, products: [] });

  return {
    products,
    open,
    totalQuantity: getCartQuantity(products),
    totalPrice: getCartTotal(products),
    addToCart,
    removeFromCart,
    updateQuantity,
    setOpen,
    clearCart,
  };
};

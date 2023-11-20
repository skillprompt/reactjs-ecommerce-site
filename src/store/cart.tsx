/**
 * This is the store of cart made using zustand.
 */
import { create } from "zustand";
import { TProduct } from "../data/product";

type TCart = {
  quantity: number;
  increaseQuantity: (product: TProduct) => void;
  decreaseQuantity: (product: TProduct) => void;
  products: TProduct[];
};

export const useCartStore = create<TCart>((set) => {
  return {
    quantity: 0,
    products: [],
    increaseQuantity: (product) => {
      return set((state) => {
        /**
         * state property quantity update
         * This is updating the value in the reference
         */
        // state.quantity = state.quantity + 1;
        return {
          ...state,
          products: [...state.products, product],
          quantity: state.quantity >= 10 ? 10 : state.quantity + 1,
        };
      });
    },
    decreaseQuantity: (productToRemove) => {
      return set((state) => {
        /**
         * update the state
         */
        // state.quantity = state.quantity - 1;
        const oldProducts = [...state.products];
        // const updatedProducts = oldProducts.filter(
        //   (product) => product.id !== productToRemove.id
        // );
        const productToRemoveFoundIndex = oldProducts.findIndex(
          (product) => product.id === productToRemove.id
        );

        if (productToRemoveFoundIndex >= 0) {
          oldProducts.splice(productToRemoveFoundIndex, 1);
        }

        return {
          ...state,
          products: oldProducts,
          quantity: state.quantity === 0 ? 0 : state.quantity - 1,
        };
      });
    },
  };
});

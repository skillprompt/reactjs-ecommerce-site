import { createContext, useContext, useState } from "react";
import { TProduct } from "../data/product";

// create context
// - provide type of the context
const ProductCtx = createContext<{
  product: TProduct | null;
  updateTheSelectedProduct: ((data: TProduct) => void) | null;
}>({
  product: null,
  updateTheSelectedProduct: null,
});

// create provider
export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<TProduct | null>(null);

  const updateTheSelectedProduct = (data: TProduct) => {
    console.log("data to update", data);
    setProduct(data);
  };

  return (
    <ProductCtx.Provider
      value={{
        product: product,
        updateTheSelectedProduct,
      }}
    >
      {children}
    </ProductCtx.Provider>
  );
}

// use context
// hook that helps us to use the store
export function useProductCtx() {
  const ctx = useContext(ProductCtx);
  return ctx;
}

// wrap the component with the provider

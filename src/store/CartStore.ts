import { create } from "zustand";
import products from "../assets/productData.json";
import { Product } from "./../types/product.types";

type TCartStore = {
  allProducts: Product[];
  cartProducts: Product[];
  total: number;
  addProductToCart: (productId: number) => void;
  decrementQty: (productId: number) => void;
  incrementQty: (productId: number) => void;
  calculateTotal: () => void;
};

const useCartStore = create<TCartStore>((set) => ({
  allProducts: products,
  cartProducts: [],
  total: 0,
  addProductToCart: (productId) =>
    set((state) => ({
      cartProducts: addToCart(state.allProducts, state.cartProducts, productId),
    })),
  decrementQty: (productId) =>
    set((state) => ({
      cartProducts: decreaseQty(productId, state.cartProducts),
    })),
  incrementQty: (productId) =>
    set((state) => ({
      cartProducts: increaseQty(productId, state.cartProducts),
    })),
  calculateTotal: () =>
    set((state) => ({ total: calcTotal(state.cartProducts) })),
}));

const addToCart = (
  allProducts: any[],
  cartProducts: any[],
  receiedId: number
) => {
  const selectedProduct = allProducts.find(
    (presentProduct) => presentProduct.id === receiedId
  );
  return [...cartProducts, { ...selectedProduct, qty: 1 }];
};

const decreaseQty = (receivedId: number, cartProducts: Product[]) => {
  return cartProducts.filter((presentProduct) =>
    presentProduct.id === receivedId
      ? (presentProduct.qty = presentProduct.qty! - 1)
      : presentProduct.qty
  );
};

const increaseQty = (receivedId: number, cartProducts: Product[]) => {
  return cartProducts.filter((presentProduct) =>
    presentProduct.id === receivedId
      ? (presentProduct.qty = presentProduct.qty! + 1)
      : presentProduct.qty
  );
};

const calcTotal = (totalProducts: any[]) => {
  return totalProducts.reduce((acc, curr) => (acc += curr.price * curr.qty), 0);
};

export default useCartStore;

import { sum, map, filter, uniqBy, reject } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  isLoading: false,
  error: false,
  products: [],
  product: null,
  checkout: {
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
  },
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    // has error
    hasError(state, action) {
      state.isLoading = state;
      state.error = action.payload;
    },

    //checkout
    getCart(state, action) {
      const cart = action.payload;
      const subtotal = sum(
        cart.map((product) => Number(product.price) * product.quantity)
      );
      const discount = cart.length === 0 ? 0 : state.checkout.discount;
      const billing = cart.length === 0 ? null : state.checkout.billing;

      state.checkout.cart = cart;
      state.checkout.discount = discount;
      state.checkout.subtotal = subtotal;
      state.checkout.billing = billing;
      state.checkout.subtotal = subtotal;
      state.checkout.total = subtotal - discount;
    },

    addCart(state, action) {
      const product = action.payload;
      const isEmptyCart = state.checkout.cart.length === 0;

      if (isEmptyCart) {
        state.checkout.cart = [...state.checkout.cart, product];
      } else {
        state.checkout.cart = map(state.checkout.cart, (_product) => {
          const isExisted = _product.id === product.id;
          if (isExisted) {
            return {
              ..._product,
              quantity: _product.quantity + 1,
            };
          }
          return _product;
        });
      }
      state.checkout.cart = uniqBy([...state.checkout.cart, product], 'id');
    },
    deleteCart(state, action) {
      const updateCart = filter(
        state.checkout.cart,
        (item) => item.id !== action.payload
      );
      state.checkout.cart = updateCart;
    },
    resetCart(state) {
      state.checkout.billing = null;
      state.checkout.cart = [];
      state.checkout.discount = 0;
      state.checkout.shipping = 0;
      state.checkout.subtotal = 0;
      state.checkout.total = 0;
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = map(state.checkout.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      state.checkout.cart = updateCart;
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = map(state.checkout.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      state.checkout.cart = updateCart;
    },
    createBilling(state, action) {
      const discount = action.payload;
      state.checkout.discount = discount;
      state.checkout.total = state.checkout.subtotal - discount;
    },
    applyShipping(state, action) {
      const shipping = action.payload;
      state.checkout.shipping = shipping;
      state.checkout.total =
        state.checkout.subtotal - state.checkout.discount + shipping;
    },
    applyDiscount(state, action) {
      const discount = action.payload;
      state.checkout.discount = discount;
      state.checkout.total = state.checkout.subtotal - discount;
    },
  },
});

// Reducer
export default slice.reducer;
// actions
export const {
  addCart,
  applyDiscount,
  applyShipping,
  createBilling,
  decreaseQuantity,
  deleteCart,
  getCart,
  increaseQuantity,
  resetCart,
  startLoading,
} = slice.actions;

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let productsInCart = [];
if (typeof localStorage !== "undefined") {
  productsInCart = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
}
const initialState = {
  cartItems: productsInCart,
  cartTotalQty: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //specify first the {id,productQty} in addToCart payload
    addToCart: (state, action) => {
      const productId = action.payload.product._id;
      const productQty = action.payload.productQty || 1;
      //check first if product exist in the cart
      const exisitingProduct = state.cartItems.findIndex(
        (item) => item._id === productId,
      );

      if (exisitingProduct >= 0) {
        //update product quantity if exist
        state.cartItems[exisitingProduct] = {
          ...state.cartItems[exisitingProduct],
          productQty: state.cartItems[exisitingProduct].productQty + productQty,
        };
        toast.success(`Product Quantity Increased x1`);
      } else {
        //add the product to cart if not exist
        let newProductItem = {
          ...action.payload.product,
          productQty: productQty,
        };
        state.cartItems.push(newProductItem);
        toast.success("Product Added To Cart");
      }
      //update the cart in local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //increase product, decrease product will be dispatched in cart page only
    increaseProductQty: (state, action) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      );
      state.cartItems[productIndex].productQty += 1;
      toast.success("Increased Product Quantity");
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseProductQty: (state, action) => {
      //find the product first
      const productIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (state.cartItems[productIndex].productQty > 1) {
        state.cartItems[productIndex].productQty -= 1;
        toast.success("Decreased Product Quantity");
      } else if (state.cartItems[productIndex].productQty === 1) {
        const updatedCartProducts = state.cartItems.filter(
          (item) => item._id !== action.payload._id,
        );
        state.cartItems = updatedCartProducts;
        toast.success("Product Remove From Cart");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const updatedCartProducts = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload,
      );
      state.cartItems = updatedCartProducts;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Product Remove From Cart");
    },
    getTotals: (state, action) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.map((cartItem) => {
        total += cartItem.price * cartItem.productQty;
        quantity += cartItem.productQty;
      });
      const cartTotal = parseFloat(total.toFixed(2));
      state.cartTotalPrice = cartTotal;
      state.cartTotalQty = quantity;
    },
    clearAll: (state) => {
      state.cartItems = [];
      state.cartTotalQty = 0;
      state.cartTotalPrice = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  decreaseProductQty,
  increaseProductQty,
  removeFromCart,
  getTotals,
  cartChecker,
  clearAll,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let wishlistItems = [];
if (typeof localStorage !== "undefined") {
  wishlistItems = localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [];
}
const initialState = {
  wishlistItems,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWhislist: (state, action) => {
      const productId = action.payload._id;
      const productIndex = state.wishlistItems.findIndex(
        (item) => item._id === productId,
      );
      if (productIndex < 0) {
        state.wishlistItems.push(action.payload);
        toast.success("Added to wishlist");
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems),
        );
      }
    },
    removeFromWhislist: (state, action) => {
      const productId = action.payload._id;
      const productIndex = state.wishlistItems.findIndex(
        (item) => item._id === productId,
      );
      if (productIndex >= 0) {
        const updatedItems = state.wishlistItems.filter(
          (item) => item._id !== productId,
        );
        state.wishlistItems = updatedItems;
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems),
        );
      }
    },
  },
});

export const { addToWhislist, removeFromWhislist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

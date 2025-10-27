import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useCartStore = create(persist((set, get) => ({
  items: [],

  // Add product or increase quantity
  addToCart: (product) => {
    const productId = product._id;
    const items = get().items;
    const existing = items.find((item) => item._id === productId);

    if (existing) {
      const updated = items.map((item) =>
        item._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      set({ items: updated });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  

  // Decrease product quantity, remove if hits 0
  removeFromCart: (productId) => {
    const items = get().items;
    const existing = items.find((item) => item._id === productId);

    if (!existing) return;

    if (existing.quantity === 1) {
      // remove product if quantity goes to zero
      set({ items: items.filter((item) => item._id !== productId) });
    } else {
      const updated = items.map((item) =>
        item._id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      set({ items: updated });
    }
  },

  deleteFromCart: (productId) => {
        const items = get().items.filter((item) => item._id !== productId);
        set({ items });
      },


  // Clear full cart
  clearCart: () => set({ items: [] }),

  // Total items count
  getItemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

  // Total price (optional)
  getTotalPrice: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
})), {
name: "cart-storage", // localStorage key
      getStorage: () => localStorage, // optional, defaults to localStorage

});

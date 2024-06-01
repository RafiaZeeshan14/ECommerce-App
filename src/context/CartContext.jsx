import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  wishlistItems: [],
};

// Create context
export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          totalQuantity: state.totalQuantity + 1,
        };
      }
    case 'INCREMENT_QUANTITY':
      const incrementedCartItems = state.cartItems.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        cartItems: incrementedCartItems,
        totalQuantity: state.totalQuantity + 1,
      };
    case 'DECREMENT_QUANTITY':
      const decrementedCartItems = state.cartItems.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
      );
      const itemToRemoveIndex = decrementedCartItems.findIndex(item => item.quantity === 0);
      if (itemToRemoveIndex !== -1) {
        const updatedCartItems = [
          ...decrementedCartItems.slice(0, itemToRemoveIndex),
          ...decrementedCartItems.slice(itemToRemoveIndex + 1),
        ];
        return {
          ...state,
          cartItems: updatedCartItems,
          totalQuantity: state.totalQuantity - 1,
        };
      }
      return {
        ...state,
        cartItems: decrementedCartItems,
        totalQuantity: state.totalQuantity - 1,
      };
    case 'REMOVE_FROM_CART':
      const filteredCartItems = state.cartItems.filter(item => item.id !== action.payload);
      const removedItem = state.cartItems.find(item => item.id === action.payload);
      return {
        ...state,
        cartItems: filteredCartItems,
        totalQuantity: state.totalQuantity - (removedItem ? removedItem.quantity : 0),
      };
      case 'ADD_TO_WISHLIST':
      if (!state.wishlistItems.find(item => item.id === action.payload.id)) {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
      }
      return state;
      case 'REMOVE_FROM_WISHLIST':
        const filteredWishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
        return {
          ...state,
          wishlistItems: filteredWishlistItems,
        };
      default:
        return state;
    } 
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

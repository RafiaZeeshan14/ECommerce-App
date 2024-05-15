import React, { createContext, useContext, useReducer } from 'react';

// Define initial state

const initialState = {
    cartItems: [],
    totalQuantity: 0,
  };
  

// Create context
export const CartContext = createContext();

// Define reducer function
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

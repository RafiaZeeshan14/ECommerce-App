import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [newProducts, setNewProducts] = useState([
    {
      id: 1,
      title: "Fit Short Sleeve T-Shirt",
      price: 109.95,
      image: "best Seller/Black.jpeg",
    },
    {
      id: 2,
      title: "Fit Short Sleeve T-Shirt",
      price: 109.95,
      image: "best Seller/AGray.jpeg",
    },
    {
      id: 3,
      title: "Fit Short Sleeve T-Shirt",
      price: 109.95,
      image: "best Seller/NWhite.jpeg",
    },
    {
      id: 4,
      title: "Fit Short Sleeve T-Shirt",
      price: 109.95,
      image: "best Seller/BegGreen.jpeg",
    },
    {
      id: 5,
      title: "Fit Short Sleeve T-Shirt",
      price: 109.95,
      image: "best Seller/BegGreen.jpeg",
    },
    
  ]);

  return (
    <ProductsContext.Provider value={{ newProducts, setNewProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};


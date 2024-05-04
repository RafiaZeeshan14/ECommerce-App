import React, { createContext, useContext, useState } from 'react';
import MensData from "./MensData";
import SellerData from './BestSellerData';
import WomensData from './WomensData';

export const ProductsContext = createContext();
export const useProducts = () => {
  return useContext(ProductsContext);
};
export const ProductsProvider = ({ children }) => {
  const [sellerProducts, setSellerProducts] = useState(SellerData);
  const [menProducts, setMenProducts] = useState(MensData);
  const [WomenProducts, setWomenProducts] = useState(WomensData);
  return (
    <ProductsContext.Provider value={{ sellerProducts, setSellerProducts, menProducts, setMenProducts , WomenProducts,setWomenProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};


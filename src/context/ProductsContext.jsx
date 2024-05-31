import React, { createContext, useContext, useState } from 'react';
import AllData from './AllData';


export const ProductsContext = createContext();
export const useProducts = () => {
  return useContext(ProductsContext);
};
export const ProductsProvider = ({ children }) => {
  const [sellerProducts, setSellerProducts] = useState(AllData.sellerProducts);
  const [menProducts, setMenProducts] = useState(AllData.menProducts);
  const [womenProducts, setWomenProducts] = useState(AllData.womenProducts);
  const [MWData, setMWData] = useState(AllData.MWData)
  return (
    <ProductsContext.Provider value={{ sellerProducts, setSellerProducts, menProducts, setMenProducts, womenProducts, setWomenProducts , MWData , setMWData}}>
      {children}
    </ProductsContext.Provider>
  );
};


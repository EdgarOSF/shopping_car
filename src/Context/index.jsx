import { createContext, useState } from 'react';

export const ShoppingCarContext = createContext();

export const ShoppingCarProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log('COUNT: ', count);
  return (
    <ShoppingCarContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShoppingCarContext.Provider>
  );
};

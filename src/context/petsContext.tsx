import React, { createContext, useContext, ReactNode } from 'react';

type MyContextType = object;

const PetsContext = createContext<MyContextType | undefined>(undefined);

export const PetsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <PetsContext.Provider value={{}}>{children}</PetsContext.Provider>;
};

export const usePetsContext = (): MyContextType => {
  const context = useContext(PetsContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }

  return context;
};

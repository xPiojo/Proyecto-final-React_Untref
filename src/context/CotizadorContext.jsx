import { createContext, useState } from 'react';

export const CotizadorContext = createContext({});

export const CotizadorProvider = ({ children }) => {
  const [elements, setElementos] = useState({
    property: null,
    location: null,
    squareMeters: 0,
  })

  const cotizadorContextValue = {
    elements,
    setElementos
  };
  
  return (
    <CotizadorContext.Provider value={cotizadorContextValue}>
      {children}
    </CotizadorContext.Provider>
  );
};
// src/Web3Context.js
import { createContext } from 'react';
import { Web3Provider } from '@ethersproject/providers';

const Web3Context = createContext(null);

export const Web3ProviderWrapper = ({ children }) => {
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <Web3Context.Provider value={{ getLibrary }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;

import { createContext, useContext } from 'react';

interface INumberContext {
  number: number;
}

export const NumberContext = createContext<INumberContext>({
  number: 1,
});
export const useNumberContext = () => useContext(NumberContext);


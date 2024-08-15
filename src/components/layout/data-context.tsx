'use client';

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';

export const DataContext = createContext({
  data: {},
  setData: (_: any) => {},
});

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

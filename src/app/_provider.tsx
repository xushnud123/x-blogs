'use client';
import NextAdapterApp from 'next-query-params/app';
import { QueryParamProvider } from 'use-query-params';
import { FC, ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
    </>
  );
};

export default Provider;

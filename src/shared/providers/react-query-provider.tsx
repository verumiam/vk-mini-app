'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode, useState } from 'react';

interface ReactQueryProviderProps {
  children: ReactNode;
}

const initialQueryState = () => new QueryClient();

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(initialQueryState);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;

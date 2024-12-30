'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProvide } from 'context/context-app';

type IRootProvider = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function RootProvider({ children }: IRootProvider) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AntdRegistry>
        <AppProvide>{children}</AppProvide>;
      </AntdRegistry>
    </QueryClientProvider>
  );
}

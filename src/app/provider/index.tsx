'use client';
import { AppProvide } from 'context/context-app';

type IRootProvider = {
  children: React.ReactNode;
};

export default function RootProvider({ children }: IRootProvider) {
  return <AppProvide>{children}</AppProvide>;
}

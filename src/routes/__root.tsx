import '@/styles/globals.scss';

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Layout } from '@/components/Layout/Layout';

const RootLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export const Route = createRootRoute({ component: RootLayout });

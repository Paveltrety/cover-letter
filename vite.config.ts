import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),
    },
  },
});

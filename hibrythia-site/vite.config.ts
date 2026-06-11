import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Network-only: SW passes every request straight through to the network.
      // This means hard refreshes always get fresh assets from Cloudflare.
      workbox: {
        runtimeCaching: [],
        globPatterns: [],
        navigateFallback: null,
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
      },
      manifest: {
        name: 'The Hibrythian Saga',
        short_name: 'Hibrythia',
        description: 'The official lore site of The Hibrythian Saga',
        theme_color: '#0e0d0b',
        background_color: '#0e0d0b',
        display: 'standalone',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

import autoprefixer from 'autoprefixer';
// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.{js,jsx}'],
      exclude: [],
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    protocol: 'http',
    cors: true,
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5'],
        }),
      ],
    },
  },
});

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` precisa coincidir com o nome do repositório no GitHub Pages.
// Repo: github.com/LeonardoPCavalcanti/portfolio  ->  base '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
});

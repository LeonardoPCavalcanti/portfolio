import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// `base` precisa coincidir com o nome do repositório no GitHub Pages.
// Repo: github.com/LeonardoPCavalcanti/portfolio  ->  base '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});

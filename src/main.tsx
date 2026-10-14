import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import App from './App';
import { LangProvider } from './i18n/LangProvider';
import './styles/globals.css';

// `basename` precisa coincidir com o `base` do Vite para o GitHub Pages.
// reducedMotion="user" desliga transform/layout quando o sistema pede;
// opacidade e desfoque são tratados em cada componente via useReducedMotion.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MotionConfig reducedMotion="user">
        <LangProvider>
          <App />
        </LangProvider>
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>,
);

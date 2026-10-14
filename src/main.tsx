import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import App from './App';
import { LangProvider } from './i18n/LangProvider';
import './styles/globals.css';

// reducedMotion="user" desliga transform/layout quando o sistema pede;
// opacidade e desfoque são tratados em cada componente via useReducedMotion.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <LangProvider>
        <App />
      </LangProvider>
    </MotionConfig>
  </React.StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHead, UnheadProvider } from '@unhead/react/client';
import { App } from '@/app/App';
import '@/styles/globals.css';

const head = createHead();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <App />
    </UnheadProvider>
  </StrictMode>,
);

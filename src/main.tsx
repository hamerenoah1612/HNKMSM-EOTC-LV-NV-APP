import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './styles/styles.css';
import './styles/portalEnhancements.css';
import './styles/objectivesThemeEnhancements.css';
import './styles/navBarPatch.css';
import './styles/upgrade.css';
import './styles/dashboard.css';
import './styles/admin-dashboard.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


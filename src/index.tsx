import App from './App';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found. Ensure the <div id="root"></div> exists in your HTML.');
  }
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);

  
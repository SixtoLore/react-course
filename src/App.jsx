// Dependencies
import { createRoot } from 'react-dom/client';
import { Pet } from './Pet';

//Components

// Es un componente de React
const App = () => (
  <div>
    <Pet name="Terry2" animal="Gato2" breed="Croquetas2" />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

import { BrowserRouter } from 'react-router-dom';
import Navigator from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;

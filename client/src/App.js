import './App.css';
import { Router } from '@reach/router';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeView path = "/" />
      </Router>
    </div>
  );
}

export default App;

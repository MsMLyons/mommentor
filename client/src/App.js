import './App.css';
import { Router } from '@reach/router';
import HomeView from './views/HomeView';
import CreateProfile from './views/CreateProfile';
import Profile from './views/Profile';
import AllProfiles from './views/AllProfiles';
import EditProfile from './views/EditProfile';
import LogReg from './views/LogReg';
import Forum from './views/Forum';


function App() {
  return (
    <div className="App">
      <Router>
        <HomeView path = "/" />
        <LogReg path="/logreg" />
        <CreateProfile path="/api/profile/new" /> 
        <Profile path="/api/profile/:id" /> 
        <EditProfile path="/api/profile/edit/:id"  />
        <AllProfiles path="/api/profile/viewAll" />
        <Forum path="/forum" />
      </Router>
    </div>
  );
}

export default App;

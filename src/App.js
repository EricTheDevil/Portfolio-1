import logo from './logo.svg';
import './App.scss';
import NavBar from './Components/NavBar.js';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className ="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

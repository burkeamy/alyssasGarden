
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import TopIntro from './components/top-intro/top-intro.component';
import NavArea from './components/nav-area/nav-area.component';


function App() {
  return (
    <div className="App">
      <TopIntro />
      <NavArea />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
      </Switch>
    </div>
  );
}

export default App;


import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/about-us/aboutUs.component';
import ContactPage from './pages/contact/contactPage.component';
import TopIntro from './components/top-intro/top-intro.component';
import NavArea from './components/nav-area/nav-area.component';


function App() {
  return (
    <div className="App">
      <TopIntro />
      <NavArea />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/about-us' component={ AboutUs } />
        <Route exact path='/contact-us' component={ ContactPage } />
      </Switch>
    </div>
  );
}

export default App;

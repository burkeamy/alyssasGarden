
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/about-us/aboutUs.component';
import ContactPage from './pages/contact/contactPage.component';
import TopIntro from './components/top-intro/top-intro.component';
import NavArea from './components/nav-area/nav-area.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <TopIntro />
      <NavArea />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/about-us' component={ AboutUs } />
        <Route exact path='/portfolio' component={ Portfolio } />
        <Route exact path='/contact-us' component={ ContactPage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

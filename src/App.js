
import './App.css';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/about-us/aboutUs.component';
import ContactPage from './pages/contact/contactPage.component';
import TopIntro from './components/top-intro/top-intro.component';
import NavArea from './components/nav-area/nav-area.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Services from './pages/services/services.component';
import Footer from './components/footer/footer.component';
import ReactGA from 'react-ga';

import { withRouter } from 'react-router-dom';

 
  ReactGA.initialize('UA-202651038-1'); 

function App() {

  useEffect (() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    
})

  return (
    <div className="App">
      <TopIntro />
      <NavArea />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/services' component={ Services } />
        <Route exact path='/about-us' component={ AboutUs } />
        <Route exact path='/portfolio' component={ Portfolio } />
        <Route exact path='/contact-us' component={ ContactPage } />
      </Switch>
      <Footer />
    </div>
  );
}

 export default withRouter(App);

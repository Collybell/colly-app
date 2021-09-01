import React from 'react';
import Header from './Header';
import ContentBody from './ContentBody';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import '../css/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <ContentBody />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App; 
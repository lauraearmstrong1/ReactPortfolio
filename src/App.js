import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Portfolio from  './pages/Portfolio'
import Background from './components/Background/brick.jpg'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`, backgroundRepeat: "repeat"}}>
      <div className="router">
      <Router >
      <Navbar className="navbar bg-dark "/>
        <Switch className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

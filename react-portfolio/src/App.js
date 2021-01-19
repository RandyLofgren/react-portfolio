import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;

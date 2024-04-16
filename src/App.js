/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatApp from './components/WhatApp';
import About_us from './components/About_us';
import Service from './components/Service';
import Contact_us from './components/Contact_us'
import UpperBar from './components/UpperBar';
import Protfolio from './components/Protfolio';
import PagePort1 from './components/Page1Port';
import Home from './components/Home';
import { useState } from 'react'
import Popup from './components/Popup';


function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <UpperBar />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Popup show={showPopup} handleClose={handleClose} />
            <Home />
          </Route>
          <Route path='/allServices'>
            <Service />
          </Route>
          <Route path='/about_us'>
            <About_us />
          </Route>
          <Route path="/contact_us">
            <Contact_us />
          </Route>
          <Route path='/portfolio'>
            <Protfolio />
          </Route>
          <Route path='/portolio_1'>
            <PagePort1 />
          </Route>
        </Switch>
      </Router>
      <WhatApp />
      <Footer />
    </>
  );
}

export default App;

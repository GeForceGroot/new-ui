/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Acadmicimpact from './components/Acadmicimpact';
import AssignmnetProvide from './components/AssignmnetProvide';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import Dream from './components/Dream';
import Footer from './components/Footer';
import GlobalUniversity from './components/GlobalUniversity';
import Navbar from './components/Navbar';
import OurProcess from './components/OurProcess';
import ServiceHome from './components/ServiceHome';
import ShortContact from './components/ShortContact';
import WhatApp from './components/WhatApp';
import WorkSpeaks from './components/WorkSpeaks';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import About_us from './components/About_us';
import Service from './components/Service';
import Contact_us from './components/Contact_us'
import UpperBar from './components/UpperBar';
import Protfolio from './components/Protfolio';
import PagePort1 from './components/Page1Port';


function App() {
  return (
    <>
      <UpperBar />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Carousel />
            <Benifits />
            <OurProcess />
            <GlobalUniversity />
            <ShortContact />
            <AssignmnetProvide />
            <ServiceHome />
            <WorkSpeaks />
            <Dream />
            <Acadmicimpact />
            <Faq />
            <Testimonials />
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
            <PagePort1/>
          </Route>
        </Switch>
      </Router>
      <WhatApp />
      <Footer />
    </>
  );
}

export default App;

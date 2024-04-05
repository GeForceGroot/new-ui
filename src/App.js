/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Acadmicimpact from './components/Acadmicimpact';
import AssignmnetProvide from './components/AssignmnetProvide';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import ConetentService from './components/ConetentService';
import ContentTwoBox from './components/ContentTwoBox';
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


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Carousel />
            <ConetentService />
            <ContentTwoBox />
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
        </Switch>
      </Router>
      <WhatApp />
      <Footer />
    </>
  );
}

export default App;

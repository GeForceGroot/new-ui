/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Acadmicimpact from './components/Acadmicimpact';
import AssignmnetProvide from './components/AssignmnetProvide';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import Clock from './components/Clock';
import ConetentService from './components/ConetentService';
// import Contact_us from './components/Contact_us';
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

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <ConetentService/>
    <ContentTwoBox/>
    <Benifits/>
    <OurProcess/>
    <GlobalUniversity/>
    <ShortContact/>
    <AssignmnetProvide/>
    {/* <Clock/> */}
    <ServiceHome/>
    <WorkSpeaks/>
    <Dream/>
    <WhatApp/>
    <Acadmicimpact/>
    {/* <Contact_us/> */}
    <Footer/>
    </>
  );
}

export default App;

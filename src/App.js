/* eslint-disable react/jsx-pascal-case */
import './App.css';
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

function App() {
  return (
    <>
      <Navbar />
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
      <WhatApp />
      <Acadmicimpact />
      <Faq />
      <Testimonials/>
      <Footer />
    </>
  );
}

export default App;

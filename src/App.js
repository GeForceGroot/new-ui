import './App.css';
import Acadmicimpact from './components/Acadmicimpact';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import Clock from './components/Clock';
import ConetentService from './components/ConetentService';
import ContentTwoBox from './components/ContentTwoBox';
import Dream from './components/Dream';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurProcess from './components/OurProcess';
import ServiceHome from './components/ServiceHome';
import ShortContact from './components/ShortContact';
import WhatApp from './components/WhatApp';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <ConetentService/>
    <ContentTwoBox/>
    <Benifits/>
    <OurProcess/>
    <ShortContact/>
    <Clock/>
    <ServiceHome/>
    <Dream/>
    <WhatApp/>
    <Acadmicimpact/>
    <Footer/>
    </>
  );
}

export default App;

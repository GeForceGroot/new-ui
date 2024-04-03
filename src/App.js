import './App.css';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import Clock from './components/Clock';
import ConetentService from './components/ConetentService';
import ContentTwoBox from './components/ContentTwoBox';
import Dream from './components/Dream';
import Navbar from './components/Navbar';
import OurProcess from './components/OurProcess';
import ServiceHome from './components/ServiceHome';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <ConetentService/>
    <ContentTwoBox/>
    <Benifits/>
    <OurProcess/>
    <Clock/>
    <ServiceHome/>
    <Dream/>
    </>
  );
}

export default App;

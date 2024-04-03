import './App.css';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import Clock from './components/Clock';
import ConetentService from './components/ConetentService';
import ContentTwoBox from './components/ContentTwoBox';
import Navbar from './components/Navbar';
import OurProcess from './components/OurProcess';

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
    </>
  );
}

export default App;

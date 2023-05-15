
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Carousel from './Component/Carousel/Carousel';
import Card from './Component/Card/Card';
import Deals from './Component/Deals/Deals';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
    <div className='all' >
      <Navbar/>
      <Carousel/>
      <Card/>
      <div className='Deals'>
      <Deals/>
      <Deals/>
      <div >
      </div>
      
      </div>
      <div>
       
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

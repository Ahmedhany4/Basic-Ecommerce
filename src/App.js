import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>

    </div>
  );
}

export default App;

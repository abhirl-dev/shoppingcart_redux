import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeScreen } from './screens/Home.screen';
import { CartScreen } from './screens/Cart.screen';
import { ProductScreen } from './screens/Product.screen';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomeScreen />} >
            <Route path='/home/products' element={< ProductScreen />} />
            <Route path='/home/cart' element={<CartScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

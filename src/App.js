import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Products, Gallery, Contact, About } from './pages/index';
import Home from './pages/home';
import { useState, useContext } from 'react';

import Sidebar from './components/sidebar';
import CartItem from './components/card-Item';
import { CartContext } from './context/cart.context';


function App() {

  const [isOpenCart, setIsOpenCart] = useState(false);
  const { cart, onHandlerOrder } = useContext(CartContext);

  const onHandlerCart = () => {
    setIsOpenCart(!isOpenCart);
  }

  return (



    <div className="App">

      <Sidebar isOpenCart={isOpenCart} onHandlerCart={onHandlerCart}>
        {cart.length > 0 ? (
          <>
            {cart?.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            <div className='cart-footer'>
              <div className='cart-footer-total'>
                <h3 className='cart-footer-total-title'>Press the button to buy</h3>
              </div>
              <button
                className='button-create-order'
                onClick={onHandlerOrder}>
                Create Order
              </button>
            </div>
          </>
        ) : (
          <h2 className='cart-empty'>Your cart is empty</h2>
        )}
      </Sidebar>

      <Navbar onHandlerCart={onHandlerCart} />


      <main>
        <Routes>
          <Route exact path="products" element={<Products />} />
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>


    </div>


  );
}



export default App;

import './App.css';
import {Navbar} from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import {Products, Gallery, Contact, About, Details, Cart} from './pages/index';
import Home from './pages/home';
import { useState } from 'react';



function App() {

 const [buy, setBuy] = useState([]);

 const AddProduct = (ItemBuy) => {
  setBuy(ItemBuy)
 }


 
  return (

    <div className="App">
      
      <Navbar/>
       
      <main>
        <Routes>
           <Route exact path = "products" element={<Products />} />
           <Route exact path = "gallery" element={<Gallery />} />
           <Route exact path = "about" element={<About/>} />
           <Route exact path = "contact" element={<Contact />} />
           <Route exact path = "home" element={<Home />} />
           <Route exact path = "/" element={<Home />} />
           <Route exact path = "/details/:productId" element={<Details AddProduct={AddProduct} />}/>
           <Route exact path = "cart" element={<Cart buy={buy} />} />
         </Routes> 
      </main>
    
   
    </div>

    
    
  );
}



export default App;

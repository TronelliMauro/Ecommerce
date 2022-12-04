import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Products, Gallery, Contact, About, Details, Cart } from './pages/index';
import Home from './pages/home';
import { useState, useContext } from 'react';  /* , useEffect para usar el firebase*/

import Sidebar from './components/sidebar';
// import { CartProvider } from './context/cart.context';
import CartItem from './components/card-Item';
import { CartContext } from './context/cart.context';



//import{ getFirestore, doc, getDocs, collection} from "firebase/firestore";




function App() {

  const [isOpenCart, setIsOpenCart] = useState(false);
  const { cart, onHandlerOrder } = useContext(CartContext);

  const onHandlerCart = () => {
    setIsOpenCart(!isOpenCart);
  }

  /*prueba acceso a firebase ind*/
  //const[item, setItem]=useState(null)
  // useEffect(()=>{
  //    const db = getFirestore();
  //    const product = doc(db, 'products-edites', 'y2kOwXrVuA82amjYtBVs');
  //    getDoc(product)
  //      .then((snapshot)=>{
  //        if(snapshot.exists()){
  //          setItem({id: snapshot.id, ...snapshot.data()});      /*  snapshot.data()  */
  //        }
  //      });
  //  },[]);

  // console.log('item', item) 
  /*FIN prueba acceso a firebase ind*/

  /*prueba collection*/
  //  const[allProducts, setAllProducts]=useState(null);
  // useEffect(()=>{
  //     const db = getFirestore();
  //     const getProductsCollection = collection(db, 'products-edites');
  //     getDocs(getProductsCollection)
  //       .then((snapshot)=>{
  //         const products = snapshot.docs.map((doc)=>({ id: doc.id, ...doc.data()}));
  //         setAllProducts(products);

  //       })
  //   }, []);

  //   console.log('allProducts', allProducts) 
  /* FIN prueba collection*/



  const [buy, setBuy] = useState([]);

  const AddProduct = (ItemBuy) => {
    setBuy(ItemBuy)
  }


  // const onRemoveItemCart = (id) => {
  //   setIsOpenCart(currentCart => {
  //     return currentCart.filter(item => item.id != id);
  //   });
  // }

  // const cartTotal = cart?.reduce((acc, item) => {
  //   return acc + item.price *item.quantity;
  // },0);

  // ACA ESTA LO DELCONTEXT
  //  const Cart = () => {
  //   const {cart} = useContext(CartContext);

  //       const cart = cart.find(cart => cart.length ) // esto lo agregue 
  //  }



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
                  <h3 className='cart-footer-total-title'>Total</h3>
                  {/* <h3 className='cart-footer-total-amout'>{cartTotal}</h3>  */}
                </div>
                 <button 
                    className='button-create-order'
                    onClick={onHandlerOrder}>
                      Create Order
                </button>  
              </div>
            </>
          ):(
            <h2 className='cart-empty'>Your cart is empty</h2>
          )} 
        </Sidebar>

        <Navbar onHandlerCart={onHandlerCart} />

        {/* <Navbar numberOfItems={cart.length} onHandlerCart={onHandlerCart} />  */}

        <main>
          <Routes>
            <Route exact path="products" element={<Products />} />
            <Route exact path="gallery" element={<Gallery />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details/:productId" element={<Details AddProduct={AddProduct} />} />
            <Route exact path="cart" element={<Cart buy={buy} />} />
          </Routes>
        </main>


      </div>

   

  );
}



export default App;

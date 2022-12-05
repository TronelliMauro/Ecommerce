import { createContext, useState, useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const initialState = {
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);



    const onHandlerOrder = () => {
        const myCart = {
            user: {
                name: 'Juan Perez',
                email: 'eljuan@gmail.com'
            },
            items: cart,
            total: cartTotal,
        }
        const db = getFirestore();
        const cartCollection = collection(db, 'orders');
        addDoc(cartCollection, myCart)
            .then((docRef) => {
                // setCartId(docRef.id);
            })
    }

    const onRemoveItemCart = (id) => {
        setCart(currentCart => {
            return currentCart.filter(item => item.id !== id);
        });
    }

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => total = total + item.quantity);
        setCartTotal(total);
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, setCart, onHandlerOrder, cartTotal, onRemoveItemCart }}>
            {children}

        </CartContext.Provider>
    )
};
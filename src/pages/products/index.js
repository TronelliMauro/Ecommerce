import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import './products.css';
import Card from "../../components/card";
import Spinner from "../../components/spinner";

//import { CartProvider } from './context/cart.context';

import { getFirestore, query, where, getDocs, collection, addDoc } from "firebase/firestore";
import { FilterMenuItem } from "../../components";

import { CartContext } from "../../context/cart.context";


const Products = () => {

    const { cart , setCart, onHandlerOrder } = useContext(CartContext);
    /*firebase implementacion collection*/
    const [allProducts, setAllProducts] = useState(null);
    const [allCategories, setAllCategories] = useState(null);
    const [isFiltering, setIsFiltering] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(null);
    // const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState(null);


    useEffect(() => {
        const db = getFirestore();
        const getProductsCollection = collection(db, 'products-edites');
        const getCategoryCollection = collection(db, 'categories');
        Promise.all([
            getDocs(getProductsCollection)
                .then((snapshot) => {
                    const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setAllProducts(products);
                    setFilteredProducts(products);
                }),

            getDocs(getCategoryCollection)
                .then((snapshot) => {
                    const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setAllCategories(categories);
                }
                )
        ])
    }, []);

    console.log('allProducts', allProducts)
    /*Fin firebase */

    /*const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const startPokemon = useRef(1);
    const endPokemon = useRef(10); /* Estaba en 20 para los poke  */

    /* const getPokemons = async (start = '1', end = '10') => {
        try {
            setIsLoading(true);
            const promises = [];

            for (let i = start; i <= end; i++) {
                promises.push(fetch(`https://fakestoreapi.com/products/${i}`).then(res => res.json()));
            }
            const results = await Promise.all(promises);
            const newPokemons = results.map((products) => {


                return {
                    id: products.id,
                    title: products.title,
                    image: products.image,
                    price: products.price,
                    category: products.category
                }



            });
            setPokemons(newPokemons);
            setFilteredProducts(newPokemons);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        getPokemons(startPokemon.current, endPokemon.current);
    }, []);

    console.log('pokemons', pokemons);

    const handleNext = async () => {
        startPokemon.current += 10;
        endPokemon.current += 10;
        getPokemons(startPokemon.current, endPokemon.current);
    }

    const handlePrev = async () => {
        startPokemon.current -= 10;
        endPokemon.current -= 10;
        getPokemons(startPokemon.current, endPokemon.current);
    }

    const debounce = (func, wait) => {
        let timeout;

        return function executedFuntion(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            }
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
    }

    const onHandleChange = useCallback(debounce((e) => {
        const searchValue = e.target.value.toLowerCase();
        const newProducts = pokemons.filter(pokemon => pokemon.title.toLowerCase().includes(searchValue.toLowerCase())); /* Porque es pokemon.tittle y no product.title*/

    /*       setFilteredProducts(newProducts);
       }, 500), [pokemons, setFilteredProducts]); */

    const onFilter = (categoryId) => {
        console.log('categoryId', categoryId);
        const db = getFirestore();
        const q = query(
            collection(db, 'products-edites'),
            where('categoryId', '==', categoryId)
        );
        getDocs(q)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    setFilteredProducts([]);
                    setIsFiltering(true);
                }
                const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                console.log('products-este', products);
                setFilteredProducts(products);
                setIsFiltering(true);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    const increaseQuantity = (id) => {
        const item = !isFiltering ? allProducts?.find((product) => product.id === id) : filteredProducts?.find((product) => product.id === id);
        if (cart?.find((product) => product.id === id)?.quantity === item?.stock) return;
        if (cart?.length === 0) {
            setCart([{ ...item, quantity: 1 }]);
        } else if (cart.length > 0 && !cart?.find(item => item.id === id)) {
            setCart([...cart, { ...item, quantity: 1 }]);
        } else {
            setCart(currentCart => {
                return currentCart.map((product) => {
                    if (product.id === id) {
                        return { ...product, quantity: product.quantity + 1 };
                    } else {
                        return product;
                    }
                });
            });
        }
    }

    const decreaseQuantity = (id) => {
        setCart(currentCart => {
            if (currentCart?.find(item => item.id === id)?.quantity === 1) {
                return currentCart.filter(item => item.id !== id);
            } else {
                return currentCart?.map(item => {
                    if (item.id === id) {
                        return {
                            ...item, quantity: item.quantity - 1,
                        }
                    } else {
                        return item;
                    }
                });
            }
        });
    }



    const getItemQuantity = (id) => {
        return cart?.find(item => item.id === id)?.quantity || 0;
    }


    const renderProducts = () => {
        switch (true) {
            case isFiltering && filteredProducts?.length === 0:
                return <h1>No products found</h1>;
            case isFiltering && filteredProducts?.length > 0:
                return filteredProducts.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        numberOfItem={getItemQuantity(product.id)}
                    />
                ));
            case !isFiltering && filteredProducts?.length > 0:
                return filteredProducts.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        numberOfItem={getItemQuantity(product.id)}
                    />
                ));
            default:
                return <Spinner />;
        }
    };

    // const cartTotal = cart?.reduce((acc, item) => {
    //     return acc + item.price * item.quantity;
    // }, 0);

    // const saveMidleCart = () =>{
    //     saveCart(cart);
    // }

    // console.log('cart', cart); //quitarr era para debbug

  

    //  const saveCart = () => {
    //      const myCart = {
    //          user: {
    //              name: 'Juan Perez',
    //              email: 'eljuan@gmail.com'
    //          },
    //          items: cart, 
    //          total:100,
    //      }
    //      const db = getFirestore();
    //      const cartCollection = collection(db, 'cart');
    //      addDoc(cartCollection, myCart)
    //          .then((docRef) => {
    //              setCartId(docRef.id);
    //          })
    //  }





    return (
        // <CartProvider>
        <div className='container'>
            {/* <Sidebar isOpenCart={isOpenCart} onHandlerCart={onHandlerCart}></Sidebar> // iria este per al parecer necesito context para q funcione */}
            <h1 className='title'>Lista de productos</h1>
            <div className="filter-menu-container">
                {allCategories && allCategories.map((category) => (
                    <FilterMenuItem key={category.id} {...category} onFilter={onFilter} />
                ))}
            </div>

            <div className="list-container">
                {renderProducts()}
            </div>
            
        </div>
        // </CartProvider>
    );
}


export default Products;



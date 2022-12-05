import React, { useState, useEffect, useContext } from "react";
import './products.css';
import Card from "../../components/card";
import Spinner from "../../components/spinner";



import { getFirestore, query, where, getDocs, collection } from "firebase/firestore";
import { FilterMenuItem } from "../../components";

import { CartContext } from "../../context/cart.context";


const Products = () => {

    const { cart, setCart } = useContext(CartContext);
    const [allProducts, setAllProducts] = useState(null);
    const [allCategories, setAllCategories] = useState(null);
    const [isFiltering, setIsFiltering] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(null);
   
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

    return (

        <div className='container'>
            <h1 className='title'>Products List</h1>
            <div className="filter-menu-container">
                {allCategories && allCategories.map((category) => (
                    <FilterMenuItem key={category.id} {...category} onFilter={onFilter} />
                ))}
            </div>

            <div className="list-container">
                {renderProducts()}
            </div>

        </div>

    );
}


export default Products;



import React, {useState, useRef, useEffect} from "react";
import './products.css';
import Card from "../../components/card";


const Products = () => {

    const[pokemons, setPokemons]= useState([]);
    const[isLoading, setIsLoading]= useState(false);
    
    const startPokemon= useRef(1);
    const endPokemon= useRef(10); /* Estaba en 20 para los poke  */

    const getPokemons = async(start = '1', end = '10') => {
        try{
            setIsLoading(true);
            const promises = [];

            for(let i = start; i <= end; i++){
               promises.push(fetch(`https://fakestoreapi.com/products/${i}`).then(res => res.json()));
            }
            const results = await Promise.all(promises);
            const newPokemons = results.map((products)=>{
                
                              
                return {
                    id: products.id,
                    title: products.title,
                    image: products.image,
                    price: products.price, 
                    category: products.category
                }



   /*const getPokemons = async(start = '1', end = '20') => {
        try{
            setIsLoading(true);
            const promises = [];

            for(let i = start; i <= end; i++){
                promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
            }
            const results = await Promise.all(promises);
            const newPokemons = results.map((pokemon)=>{
                const paddedIndex = ('00'+ pokemon.id).slice(-3);
                const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
                const types = pokemon.types.map(type => type.type.name).join(',');
                
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image,
                    type: types, 
                }
*/

            });
            setPokemons(newPokemons);
        } catch(error) { 
                console.log(error);
        } finally{
            setIsLoading(false);
        }

   }

   useEffect(()=>{
    getPokemons(startPokemon.current, endPokemon.current);
   },[]);

   console.log('pokemons',pokemons);

   const handleNext= async() => {
    startPokemon.current+=10;
    endPokemon.current+=10;
    getPokemons(startPokemon.current, endPokemon.current);
   }

   const handlePrev= async() => {
    startPokemon.current-=10;
    endPokemon.current-=10;
    getPokemons(startPokemon.current, endPokemon.current);
   }

  /* useEffect(()=>{
    getPokemons(startPokemon.current, endPokemon.current);
   },[]);

   console.log('pokemons',pokemons);

   const handleNext= async() => {
    startPokemon.current+=20;
    endPokemon.current+=20;
    getPokemons(startPokemon.current, endPokemon.current);
   }

   const handlePrev= async() => {
    startPokemon.current-=20;
    endPokemon.current-=20;
    getPokemons(startPokemon.current, endPokemon.current);
   }
*/

 
   
    return (
        <div className='container'>
            <h1 className='title'>Lista de productos</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                <div className="list-container">
                   {pokemons.map(pokemon=>(
                    <Card key={pokemon.id} item={pokemon} />

                   ))} 
                 </div>
                 <div className="button-container">
                        <button disabled={startPokemon.current <= 1 || isLoading} onClick={handlePrev}>Previous</button>
                        <button disabled={startPokemon.current >= 10 || isLoading}  onClick={handleNext}>Next</button> {/*Iba 300 en la lista de poke*/}
                 </div>
                 </>
            )}

        </div>
    )
}


export default Products;


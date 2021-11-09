import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import CustomCard from './components/CustomCard';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({})

  useEffect (()=>{
    handleRequestoApi();
  })  
  const handleRequestoApi = async () =>{
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      const {name, sprites:{ other}, abilities} = await response.json();
      const { dream_world:{front_default}} = other;

      const currentPokemon = {
        name,
        abilities,
        image: front_default
      }

      setPokemon(currentPokemon)
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
      <Navbar />
     <div className='custom-card'>
        <CustomCard name={pokemon.name} abilities={pokemon.abilities} image={pokemon.image}/>
     </div>
    </div>
  );
}

export default App;

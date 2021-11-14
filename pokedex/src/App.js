import { useState, useEffect} from 'react';
import './App.css';
import Pokecard from './components/Pokecard';



function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(()=>{
    getPokemon();
  }, [])

  const getPokemon = async () =>{
    const pokemonArray = []
    for(let i = 1; i < 151; i++){
     pokemonArray.push( await getPokemonData(i));
    }
    setPokemon(pokemonArray);
  }

  const getPokemonData =  async(id)=>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();  
     
  }
 
  return (
    
    <div className="App">
      <h1>Pokedex</h1>
     
      <div className='poke-container'>
          {pokemon.map((p, index)=>{
            return (
              <Pokecard 
                key={index}
                name={p.name}
                id={p.id}
                image={p. sprites.front_default}
                type={p.types[0].type.name}
                
              />
            )
          })}
      </div>
    </div>
  );
}

export default App;
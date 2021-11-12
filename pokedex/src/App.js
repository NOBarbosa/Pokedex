import { useState, useEffect} from 'react';
import './App.css';



function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(()=>{
    getPokemon();
  }, [])

  const getPokemon = async () =>{
    let pokemonArray = [];
    for(let i = 1; i < 151; i++){
      pokemonArray.push(await getPokemonData(i))
    }
    // setPokemon(pokemonArray);
  }
  const getPokemonData =  async(id)=>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(...pokemon, data);
  }
  return (
    <div className="App">
     <h1>Pokedex</h1>
      {console.log(pokemon.name)}
    </div>
  );
}

export default App;

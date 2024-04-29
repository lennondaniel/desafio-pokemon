import { useEffect, useState } from 'react'
import './App.css'
import PokeAPI, { IPokemon } from 'pokeapi-typescript'

function App() {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)

  useEffect(() => {
    PokeAPI.Pokemon.resolve("pikachu").then(result => setPokemon(result));
  }, [])

  return (
    <>
     <pre>
        { pokemon?.name }
     </pre>
    </>
  )
}

export default App

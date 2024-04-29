import { useEffect, useState } from 'react'
import './App.css'
import PokeAPI, { IPokemon } from 'pokeapi-typescript'
import Loading from './components/Loading'

function App() {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    PokeAPI.Pokemon.resolve("pikachu").then(result => {
      setLoading(false)
      setPokemon(result)
    });
  }, [])

  return (
    <>
     <Loading isLoading={loading} />
    </>
  )
}

export default App

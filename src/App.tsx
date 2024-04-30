import { useEffect, useState } from 'react'
import './App.css'
import PokeAPI, { IPokemon } from 'pokeapi-typescript'
import Loading from './components/Loading'
import Card from './components/Card'

function App() {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchPokemon = () => {
    const oldXHROpen: (method: string, url: string | URL) => void = window.XMLHttpRequest.prototype.open

    window.XMLHttpRequest.prototype.open = function (method: string, url: string): void {
      const newUrl = url.replace('/pikachu', '/bulbasaur')
      this.onreadystatechange = function() {
        if (this.readyState === 4) {
          Object.defineProperty(this, 'response', { value: JSON.stringify(
            {
              name: 'test',
              abilities: [
                {
                  ability: {
                    name: 'teste'
                  }
                }
              ]

            }
          )})
        }
      }
  
      return oldXHROpen.apply(this, [method, newUrl])
    
    }
    

    PokeAPI.Pokemon.fetch("pikachu", false).then(result => {
      setLoading(false)
      setPokemon(result)

    });
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

 
  return (
    <>
     <Loading isLoading={loading} />
     <Card name={pokemon?.name} abilities={pokemon?.abilities} />
    </>
  )
}

export default App

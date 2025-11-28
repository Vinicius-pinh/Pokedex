import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypeBar from './componentes/typeBar'
import PokemonContainer from './componentes/pokemonContainer'

function App() {

  return (
    <>
    <label>Pokedex</label>
    <TypeBar/>
    <PokemonContainer/>
    </>
  )
}

export default App

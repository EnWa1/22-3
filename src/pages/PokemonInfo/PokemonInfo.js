import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
const PokemonInfo = () => {

    const { name } = useParams();
    console.log(name, 'params');
    const location = useLocation();
        console.log(location, 'location');
  return (
    <div>PokemonInfo</div>
  )
}

export default PokemonInfo
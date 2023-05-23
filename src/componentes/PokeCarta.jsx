import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/cartas.css'

function PokeCarta({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='cartaPequeña'>
			<div className='cartaImg'>
				<img
					src={pokemon.sprites.front_default} /* esta front_default me parece la imagen más acorde para ser la de la vista previa */
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='cartaInfo'>
                <h3>{pokemon.name}</h3>
				<span className='pokemonID'>id: {pokemon.id}</span>
            </div>
	</Link>
  )
}

export default PokeCarta
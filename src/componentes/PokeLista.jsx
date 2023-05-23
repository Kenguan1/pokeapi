import React, { useContext } from 'react';
import PokeCarta from './PokeCarta';
import { PokeContext } from '../contexto/PokeContext';
import '../styles/cartas.css'


function PokeLista() {
    const { pokemonData, cargarMasPokemon } = useContext(PokeContext);
    return (
        <div className='pokelista'>
            <div className='listaCartas'>
                <>
                    {pokemonData.map(pokemon => (
                        <PokeCarta pokemon={pokemon} key={pokemon.id} />
                    ))}
                </>	
            </div>
            <button className='cargarMas' onClick={cargarMasPokemon}>CARGAR MÁS</button>
        </div>
    )
    }

export default PokeLista
import { useEffect, useState } from 'react';
import { PokeContext } from './PokeContext';

export const PokeProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [offset, setOffset] = useState(0);
    
        const fetchPokemonData = async () => {
            // hacemos solicitud fetch a la API para obtener la lista de pokemones y luego pasamos la respuesta a formato .JSON
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
            const data = await res.json();
            

            //creamos un array de promesas para obtener los datos de cada pokemon (dentro de results(20) está el name y url de cada pokemon)
            const promises = data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return data;
            });

            //esta linea transforma el array de promesas en un array de datos resueltos para permitir el acceso a los datos de cada Pokémon
            const results = await Promise.all(promises); //Cuando se resuelvan todas las promesas, cada elemento en results significa un objeto con los datos de un pokemon
            setPokemonData([...pokemonData, ...results]); // Agregamos los nuevos resultados a los datos existentes
        };

        const cargarMasPokemon = () => {
            setOffset((prevOffset) => prevOffset + 20); /*cada vez que le damos al botón de cargar más se añaden 20 pokemones*/
        };

        useEffect(() => {
            fetchPokemonData();
        }, [offset]); /* actualizamos cada vez que offset cambia, en nuestro caso cada vez que cargamos más pokemon */

        // para realizar una solicitud a la API y obtener los datos de un Pokémon específico segun su ID
        const pokeID = async id => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            return data;
        };

    return (
        <PokeContext.Provider value={{
        pokemonData,
        pokeID,
        cargarMasPokemon
        }}>
        {children}
        </PokeContext.Provider>
    );
};

import React, { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../contexto/PokeContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import '../styles/pokedisplay.css'
import { auth } from '../firebase/firebase';

function PokeDisplay() {
	const navigate = useNavigate();
	const { pokeID } = useContext(PokeContext)
	const [pokemon, setPokemon] = useState({}) //empieza vacio pero se actualice apenas llegue la data de la API
	const [cargando, setCargando] = useState(true); // Nuevo estado para indicar si se está cargando
	const { id } = useParams() //tomamos el num de la direccion donde estamos ejm: pokemon/1


	const fetchPokeId = async(id)=>{ //pokeID va a hacer la solicitud de la data a la API con el id que le pasa useParams 
		const data = await pokeID(id)
		setPokemon(data);
		setCargando(false); /* cuando obtenemos el id desaparece el cargando, es necesario ya que al principio no se obtiene el pokemon y ocasiona error (useState) */
	}

	/* en este useEffect tenemos que si estamos autenticados podamos hacer el fetch del pokemon, de lo contrario redireccionar al login */
	useEffect(() => {
		const usuarioAutenticado = auth.currentUser;
		if (usuarioAutenticado) {
		  fetchPokeId(id);
		} else {
		  setCargando(false);
		  navigate('/login');
		}
	  }, [id, navigate]);


  if (cargando) {
    return <div className='divCargando'>Cargando...</div>; // muestra un mensaje de carga mientras se carga el Pokémon (casi imperceptible pero necesario para error management mientras se hace la solicitud)
  }


  return (
	<>{auth.currentUser ? (
		<>
		<div className='container cartaDetallePokemon'>
			<>
				<div className='headerCarta'> {/* del id hasta el tipo de pokemon */}
						<div className='parteSup'>
							<span className='numPokemon'>#{pokemon.id}</span>
								<h1>{(pokemon.name)}</h1>
								<div className='stat-groupvida'>
										<span>Hp</span>
										<span>{pokemon.stats[0].base_stat}</span>
								</div>
						</div>
							
						<div className='container-imgPokemon'>
								<img
									src={pokemon.sprites.other.dream_world.front_default}
									alt={`Pokemon ${pokemon?.name}`}
								/>
						</div>

						<div className='contenedorTipos'>
								<div className='tipoCarta'>
									{pokemon.types.map(type => (
										<span key={type.type.name} className={`${type.type.name}`}>
											{type.type.name}
										</span>
									))}
								</div>
						</div>
									
						<div className='habilidades'>
							<span className='tituloHabilidades'>Habilidades</span>
								<div className='lista-habilidades'>
									{pokemon.abilities.map(ability => (
										<span key={ability.ability.name} >
											*{ability.ability.name}
										</span>
									))}
								</div>
										
						</div>
								
				</div>
						<div className='contenedorStats'>
							<h2>Estadísticas</h2>
							<div className='stats'>
								<div className='ladIzq'>
									<div className='stat-group'>
										<span>Ataque</span>
										<span>{pokemon.stats[1].base_stat}</span>
									</div>
									<div className='stat-group'>
										<span>Defensa</span>
										<span>{pokemon.stats[2].base_stat}</span>
									</div>
									<div className='stat-group'>
										<span>Velocidad</span>
										<span>{pokemon.stats[5].base_stat}</span>
									</div>
								</div>
								
								<div className='ladoDer'>
									<div className='stat-group'>
										<span>Super Ata</span>
										<span>{pokemon.stats[3].base_stat}</span>
									</div>
									<div className='stat-group'>
										<span>Super Def</span>
										<span>{pokemon.stats[4].base_stat}</span>
									</div>
								</div>
							</div>
						</div>
					
			</>

		</div>
		<Link to="/" className='menuBoton'>REGRESAR</Link>
		</>
	) : ( /* testeando: en caso de que no este autenticado no mostramos la carta sino que vamos al login, este log se mostraria solo si la linea28 no existiera */
        console.log("vamos al login")
		)}
	</>	
  )
}

export default PokeDisplay
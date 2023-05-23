import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.js'

function AuthDetails({ cerrarSesion }) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() =>{
        const listen = onAuthStateChanged(auth, (user) => { /*checkamos si existe un usuario para actualizar el estado */
            if(user){
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        });

        return() => {
            listen();
        }
    }, []);

    const salirUsuario = () => {
        signOut(auth).then(() => {
            console.log('Saliste de tu cuenta');
            cerrarSesion(); // Llamar a la función para cerrar sesión en el componente padre
        }).catch(error=> console.log(error))
    }

    //si estamos autenticados muestra en que sesión estamos y el botón de cerrar sesión que activa la func salirUsuario, si estamos autenticados se muestra solo en el register ya que en el login el componente desaparece 
    return (
        <div className="authDetails">
            { authUser ? <> <p>{`Iniciaste con: ${authUser.email}`}</p> <button onClick={salirUsuario}>Cerrar sesión</button> <Link to="/"><button className="menuBotonMini">Ir al Menú</button></Link>  </>  : <p>Acá empieza tu camino a Maestro Pokémon</p>}
        </div>
    )
}
export default AuthDetails
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import React, { useState } from 'react';
import { auth }  from "../firebase/firebase.js";
import '../styles/register.css';
import AuthDetails from "../componentes/auth/AuthDetails.jsx";
import { Navigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión
  const [error, setError] = useState('');

  const registrar = async (e) => {
    e.preventDefault();

    try {
      // verificamos si el usuario ya existe en la database
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      
      if (signInMethods.length > 0) {
        setError('Este correo ya está en uso');
        return;
      }

      // Crear un nuevo usuario
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); // Cambiar el estado a true cuando se registre exitosamente
    } catch (error) {
      console.log(error);
      setError('Error al registrar el usuario');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='containerLogin'>
      <div className="containerForm">
        <form onSubmit={registrar} className='register'>
          <h2>Registrar</h2>
          <span>Correo:</span>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='ejemplo@gmail.com'
          ></input>
          <span>Contraseña:</span>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Crear PokeCuenta</button>
          {error && <p>{error}</p>}
        </form>
        <AuthDetails />
      </div>
    </div>
  )
}

export default Register;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { auth }  from "../firebase/firebase.js";
import '../styles/login.css';
import AuthDetails from "../componentes/auth/AuthDetails.jsx";
import { Link } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state para controlar si el usuario ha iniciado sesión

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const logear = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoggedIn(true); // cambiar el estado a true cuando se inicia sesión
        localStorage.setItem('isLoggedIn', 'true'); // almacenar el estado en localStorage
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = 'Info incorrecta'; // Capturar el mensaje de error
        // Mostrar el mensaje de error directamente en el componente
        document.getElementById('error-message').innerText = errorMessage;
      });
  };

  const cerrarSesion = () => {
    // lógica para cerrar sesión en Firebase
    setIsLoggedIn(false); // cambiar el estado a false cuando se cierra la sesión
    localStorage.setItem('isLoggedIn', 'false'); 
  };

  return (
    <div className='containerLogin'>
      <div className="containerForm">
      
        {isLoggedIn ? (
          <AuthDetails cerrarSesion={cerrarSesion} /> //cuándo ya tengo iniciada sesión sólo mostrar el componente que muestra la sesión iniciada y los botones de ir a menú y cerrar sesión
        ) : (
          <>
          <h3 className="loginHeader">Ingresa con tu cuenta o Registrate para ver a cada Pokemón en detalle :D </h3>
          <form onSubmit={logear} className='login'>
            
            <h2>Iniciar Sesión</h2>
            <div className="input-group">
              <h4>Correo:</h4>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='ejemplo@gmail.com'
              ></input>
            </div>
            <div className="input-group">
              <h4>Contraseña:</h4>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit">LOG IN</button>
            <p id="error-message"></p>
            <div className="group-register">
              <p>Si no tienes cuenta</p>
              <Link to="/register">Regístrate acá</Link>
            </div>
          </form>
          </>
        )}
      </div>
      {!isLoggedIn && <Link to="/"><button className="menuBotonMini">Ir al Menú</button></Link>}
      
    </div>
  )
}

export default Login;
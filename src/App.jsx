import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home'
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar'
import PokeDisplay from './paginas/PokeDisplay'
import { PokeProvider } from './contexto/PokeProvider'
import Login from './paginas/Login'
import Register from './paginas/Register'
import AuthDetails from './componentes/auth/AuthDetails'

function App() {
  return (
    <div className='App'>
    <PokeProvider>
      <Router>
        <NavBar /> {/* Es un componente que existe en cada pagina, sólo cambia lo que hay entre la navbar y el footer */}
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/pokemon/:id' element={<PokeDisplay />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cuenta' element={<AuthDetails />}/>
        </Routes>
        <Footer />
      </Router>
    </PokeProvider>
    </div>
  );
}

export default App;

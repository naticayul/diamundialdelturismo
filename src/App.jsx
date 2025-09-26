import { useState } from 'react'
import {Link, Route, Routes} from 'react-router'
import Inicio from './Inicio.jsx'
import Encuadre from './Encuadre.jsx'
import Actividades from './Actividades.jsx'
import Organizadores from './Organizadores.jsx'


import Header from './Header'




export default function App (){
  return (
    <>
    
      <Header />

      <Routes>
        <Route path='/' element ={<Inicio />}/>
        <Route path='/encuadre' element ={<Encuadre />}/>
        <Route path='/actividades' element ={<Actividades />}/>
        <Route path='/organizadores' element ={<Organizadores />}/>
      </Routes>
    </>
  )
}

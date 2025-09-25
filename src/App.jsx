import { useState } from 'react'
import {Link, Route, Routes} from 'react-router'
import Actividades from './Actividades.jsx'
import Encuadre from './Encuadre.jsx'
import Organizadores from './Organizadores.jsx'


import Header from './Header'




export default function App (){
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element ={<Encuadre />}/>
        
        <Route path='/encuadre' element ={<Actividades />}/>
        <Route path='/organizadores' element ={<Organizadores />}/>
      </Routes>
    </>
  )
}

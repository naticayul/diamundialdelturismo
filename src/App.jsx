import { useState } from 'react'
import {Link, Route, Routes} from 'react-router'
import Inicio from './Inicio.jsx'
import Reseña from './Reseña.jsx'
import Actividades from './Actividades.jsx'
import Organizadores from './Organizadores.jsx'
import Excursiones from './Excursiones.jsx'
import Header from './Header'
import Masonry from './Masonry';



export default function App (){

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element ={<Inicio />}/>
        <Route path='/reseña' element ={<Reseña />}/>
        <Route path='/actividades' element ={<Actividades />}/>
        <Route path='/organizadores' element ={<Organizadores />}/>
        <Route path='/excursiones' element ={<Excursiones />}/>
      </Routes>
    </>
  )
}

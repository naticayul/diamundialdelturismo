import Button from "./Button" 
import { Link } from "react-router"



export default function Opciones()
{
  const botones=[
    {texto:"INICIO", 
      link:"/" 
    },
    {texto:"ENCUADRE", 
      link:"/encuadre" 
    },
     {texto:"ACTIVIDADES", 
      link:"/actividades" 
    }, 
    {texto:"Organizadores", 
      link:"/organizadores" 
    },
    {texto:"Excursiones", 
      link:"/excursiones" 
    },
  ]
const botonesMap= botones.map(opcion =>
  <Link to={opcion.link}> 
    <Button texto ={opcion.texto}/>
  </Link>
)
  
  
  return(
    <div className="flex flex-wrap sm:justify-around justify-center items-center "> 
      {botonesMap}  

    </div>    

)
}

import logo from "./assets/logo.png"
import Opciones from './Opciones'

export default function Header()
{return(
    <>
        <div className="flex top-0 ">
            <img src={logo} className="h-33" />
            <Opciones />
        </div>
    </>
 
)
}
import logo from "./assets/logo.png"
import Opciones from './Opciones'

export default function Header()
{return(
    <>
        <div className="sm:flex top-0 w-full ">
            <img src={logo} className="h-30" />
            <Opciones />
        </div>
    </>
 
)
}
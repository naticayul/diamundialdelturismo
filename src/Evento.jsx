import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";

 const Evento= (props) => {
    return(
        <div className="flex justify-center">

      
        <div className="w-2/3 mt-8 ">
            <div className="flex">
                <CiCalendarDate />
                <h1> {props.evento.fecha} </h1>
            </div>
            <div className="flex">
                <CiClock2 />
                <h1> {props.evento.hora} </h1>
            </div>
            <div className="flex">
                <FaLocationDot />
                <h1> {props.evento.lugar} </h1>
            </div>
            <div className="flex">
                <MdDescription />
                <h1> {props.evento.descripcion} </h1>
            </div>
        </div>
          </div>
        )

    
}

export default Evento
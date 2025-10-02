import Evento from "./Evento.jsx"

export default function Actividades(){ 
  const listEventos=[
    {
      fecha:"Martes 30 de septiembre",
      hora: "14:00 a 18:00 horas",
      lugar: "Esquel",
      descripcion: "Visita guiada a Capilla Seion, centrada en la colonización Galesa y su religiosidad."
    }  ,
    {
      fecha:"Martes 30 de septiembre",
      hora: "17:00 horas",
      lugar: "Plaza del cielo",
      descripcion: "Lanzamiento programa Trashumancias"
    }  ,
    {
      fecha:"Miércoles 1 de octubre",
      hora: "16:00 a 20:00 horas",
      lugar: "Campus Científico Tecnológico CIEFAP",
      descripcion: "Primeras Jornadas Comarcales de Producción y Turismo - 1° dia"
    }  ,
    {
      fecha:"Miércoles 1 de octubre",
      hora: "21:00 horas",
      lugar: "Centro Cultural Melipal",
      descripcion: "Función especial del Planetario de Esquel, compartiendo la historia y la actualidad del Proyecto Plaza del Cielo"
    }  ,
    {
      fecha:"Jueves 2 de octubre",
      hora: "20:00 horas",
      lugar: "Instituto Superior de Formación Docente Nº 809, Alsina 1047",
      descripcion: "Clase abierta de Juan Falú"
    }  ,
    {
      fecha:"Jueves 2 de octubre",
      hora: "16:00 a 20:00 horas",
      lugar: "Viñas de Nant y Fall",
      descripcion: "Primeras Jornadas Comarcales de Producción y Turismo - 2° dia"
    }  ,
    {
      fecha:"Viernes 3 de octubre",
      hora: "10:00 a 11:30 horas",
      lugar: "Salida desde el Museo Histórico (Mitre y San Martín",
      descripcion: "Paseo urbano Esquel con Juan Falú"
    }  ,
    {
      fecha:"Viernes 3 de octubre",
      hora: "16:00 a 20:00 horas",
      lugar: "SUM INTA",
      descripcion: "Primeras Jornadas Comarcales de Producción y Turismo - 3° dia"
    }  ,
    {
      fecha:"Viernes 3 de octubre",
      hora: "19:00 horas",
      lugar: "Edificio de Aulas de la UNPSJB",
      descripcion: "Encuentro de trabajo: Turismo religioso ¿una oportunidad comarcal?"
    }  ,
    {
      fecha:"Viernes 3 de octubre",
      hora: "21:00 horas",
      lugar: "Auditorio Municipal",
      descripcion: "Concierto de Juan Falú: “Guitarra de alerce”"
    }  ,
    {
      fecha:"Sábado 4 de octubre",
      hora: "21:00 horas",
      lugar: "Calle Roca 528",
      descripcion: "Concierto de Juan Falú"
    }  ,
    {
      fecha:"Sábado 4 de octubre",
      hora: "10:00 a 12:00 horas",
      lugar: "Salón de Usos Múltiples del Centro de Visitantes del Parque Nacional Los Alerces (Villa Futalaufquen)",
      descripcion: "Clínica para músicos a cargo de Juan Falú"
    }  ,
    {
      fecha:"Sábado 4 de octubre",
      hora: "10:00 a 17:00 horas",
      lugar: "Salida y llegada desde Puerto Limonao",
      descripcion: "Excursión Sendero El Portezuelo"
    }  ,
    {
      fecha:"Sábado 4 de octubre",
      hora: "12:30 a 13:30 horas",
      lugar: "PN Los Alerces",
      descripcion: "Caminata Inclusiva sendero Pinturas Rupestres"
    }  ,
    {
      fecha:"Domingo 5 de octubre",
      hora: "19.00 horas",
      lugar: "Centro Cultural Melipal",
      descripcion: "Función del Ciclo de Cine y Filosofía “Lo que una imagen puede”. Se proyectará la película “El país de las maravillas”, de Alice Rohrwacher."
    }  ,
    {
      fecha:"Lunes 6 de octubre",
      hora: "19.00 horas",
      lugar: "Hotel Sol del Sur",
      descripcion: "Charla informativa: Herramientas de gestión para emprendimientos turísticos. Invita: Tecnicatura Superior en Turismo, ISET 815"
    }  ,
    {
      fecha:"Martes 7 de octubre",
      hora: "19.00 horas",
      lugar: "Edificio de Aulas de la Sede Esquel de la UNPSJB",
      descripcion: "Reunión periódica –abierta a todo público- de la Asociación de Fotógrafos de Naturaleza (AFONA)"
    }  ,
  ]
  
  const eventosMap= listEventos.map (evento =>
    <Evento evento= {evento} />
  )
    

return(
    <>
    <div className="h-max bg-[url(./assets/0310turismoesquel.jpg)] bg-fixed bg-no-repeat bg-cover">
        <div className="h-10"></div>
        <div className="bg-white p-1 opacity-75 mx-10 ">
            <h1 className=" text-black text-left m-5 text-2xl"> ACTIVIDADES PROPUESTAS </h1>
            <h1 className=" text-black text-left m-5 text-2xl"> Edición tras edición de la Fiesta, las actividades propuestas cubren un amplio abanico, tanto por su temática cuanto por la cantidad de días en la que se llevan a cabo. Para ordenar mejor su promoción, tales actividades se clasifican en: académicas; recreativas y culturales, deportivas, y turísticas  </h1> 
            <h1 className=" text-black text-left m-5 text-2xl"> Particularmente, en la edición 2025, desde la Agencia de Desarrollo de la Comarca Los Alerces (ADRe) se ha organizado un evento específico, que se integra a la Fiesta: Alerces + ProdTur. Primeras Jornadas Comarcales de Producción y Turismo</h1> 
            <h1 className=" text-black text-left m-5 text-2xl"> Estas jornadas se desarrollarán bajo el formato de mesas de trabajo. Cada mesa de trabajo despliega:
                <br></br>
                •	Experiencias productivas concretas referidas al tema de la mesa
                <br></br>
                •	Expositor/a experto del tema productivo específico
                <br></br>
                •	Expositor/a experto en turismo  
            </h1>
       
            <h1 className=" text-black text-left m-5 mt-20 text-2xl"> CRONOGRAMA Y LOCALIZACION DE LAS ACTIVIDADES </h1>
            <h1 className=" text-black text-left m-5 text-2xl"> Componen la Fiesta un amplio conjunto de actividades presenciales que se realizarán tanto en Esquel y Trevelin, como en el Parque Nacional Los Alerces, evidenciando así el espíritu comarcal de la celebración. El cronograma completo y el detalle de la localización de cada una de las actividades de la edición 2025 se despliegan a continuación:  </h1> 
            
            <div>
              {eventosMap}
            </div>

            <h1 className=" text-black text-left m-5 text-2xl"> En nuevas comunicaciones, discriminadas por tipo de actividad, se detallarán las modalidades de inscripción específicas de cada una de ellas. </h1> 
            <h1 className=" text-black text-left m-5 text-2xl"> Quienes quieran consultar sobre cualquier aspecto relacionado con la Fiesta, pueden hacerlo comunicándose por whatsapp con el número +54 9 2945 525009 </h1>
        </div>
    </div> 
    
    </>
            
)
}
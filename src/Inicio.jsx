import TextType from './TextType';




export default function Inicio()
{return(
 
    <div className="h-160 bg-[url(./assets/laguna.png)] bg-no-repeat bg-cover flex items-center justify-center ">
      <TextType className='text-7xl size-auto text-center'
          text={["Les damos la Bienvenida a", "XVIII Fiesta del Día Mundial del Turismo 2025", "Turismo y Transformación Sustentable"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
      />
    </div>
   
  )
}
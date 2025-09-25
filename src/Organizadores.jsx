import TextType from './TextType';




export default function Organizadores()
{return(
    <>
    <div className="h-200 bg-[url(./assets/fondo-descuentos-2025.jpg)] bg-fixed ">
    <TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
    </div>
      
    </>
)
}
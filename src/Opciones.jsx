import CardNav from './CardNav.jsx'
import logo from "./assets/logo.png";


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

const Opciones = () => {
  const items = [
    {
      label: "ENCUADRE",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "XVIII Fiesta del Dia Mundial del Turismo", ariaLabel: "About Company", link:"/encuadre" },
        { label: "Fundamentación", ariaLabel: "About Careers" , link:"/encuadre" },
        { label: "Objetivos", ariaLabel: "About Careers" , link:"/encuadre" }
      ]
    },
    {
      label: "ACTIVIDADES", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Actividades Propuestas", ariaLabel: "Featured Projects", link:"/actividades" },
        { label: "Cronograma", ariaLabel: "Project Case Studies", link:"/actividades" }
      ]
    },
    {
      label: "ORGANIZADORES",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
       {  label: "Comisión Organizadora", link: "/organizadores" },
       {  label: "Comisión EXCURSIONES", link: "/excursiones" }
      ]
    },
      {
      label: "ORGANIZADORES",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
       {  label: "Comisión Organizadora", link: "/organizadores" },
       {  label: "Comisión EXCURSIONES", link: "/excursiones" }
      ]
    }
  ];

  return (
    <CardNav
      logo ={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Opciones;
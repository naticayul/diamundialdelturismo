import CardNav from './CardNav.jsx'
import logo from "./assets/logo.png";


  const botones=[
    {texto:"INICIO", 
      link:"/" 
    },
    {texto:"RESEÑA", 
      link:"/reseña" 
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
      label: "RESEÑA",
      bgColor: "#11D4BA",
      textColor: "#fff",
      links: [
        { label: "XVIII Fiesta del Dia Mundial del Turismo  Fundamentación y Objetivos", ariaLabel: "About Company", link:"/reseña" },

      ]
    },
    {
      label: "ACTIVIDADES", 
      bgColor: "#00BFA6",
      textColor: "#fff",
      links: [
        { label: "Actividades Propuestas y Cronograma", ariaLabel: "Featured Projects", link:"/actividades" },
      ]
    },
    {
      label: "ORGANIZADORES",
      bgColor: "#0F0361", 
      textColor: "#fff",
      links: [
       {  label: "Comisión Organizadora", link: "/organizadores" },
      ]
    },
      {
      label: "ATRACTIVOS TURISTICOS",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
       {  label: "Principales Atractivos Turísticos", link: "/excursiones" }
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
      buttonBgColor="#00BFA6"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Opciones;
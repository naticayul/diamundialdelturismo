import Masonry from './Masonry';
import trochita from "./assets/trochita-fondo.jpg"
import esquel from "./assets/caption.jpg"
import tuneles from "./assets/tuneles-de-hielo-1-1.jpg"
import baguilt from "./assets/baguilt.jpg"
import pnlosalerces from "./assets/1214esquel-1930669.jpg"
import dragon from "./assets/dragon.jpg"
import globoytulipanes from "./assets/globoytulipanes.jpg" 
import nieve from "./assets/nieve.jpg"
import alerzal from "./assets/alerzal.jpg"

export default function Excursiones(){
const items = [
    {
      id: "1",
      img: trochita,
      url: "https://latrochita.org.ar/",
      height: 400,
    },
    {
      id: "2",
      img: esquel,
      url: "https://www.esquel.tur.ar/",
      height: 350,
    },
    {
      id: "3",
      img: tuneles,
      url: "https://www.esquel.tur.ar/disfruta/excursiones-aventura/tuneles-de-hielo-4x4",
      height: 700,
    },
    {
      id: "4",
      img: baguilt,
      url: "https://trevelin.tur.ar/experiencias/trekking-al-lago-bagillt/",
      height: 900,
    },
    {
      id: "5",
      img: pnlosalerces,
      url: "https://www.instagram.com/pn_los_alerces/",
      height: 400,
    },

    {
      id: "7",
      img: globoytulipanes,
      url: "https://www.tulipanespatagonia.com.ar/",
      height: 850,
    },
    {
      id: "8",
      img: dragon,
      url: "https://trevelin.tur.ar/",
      height: 540,
    },
     {
      id: "6",
      img: nieve,
      url: "https://skilahoya.com/",
      height: 470,
    },
         {
      id: "10",
      img: alerzal,
      url: "https://www.esquel.tur.ar/disfruta/excursiones-aventura/alerzal-milenario",
      height: 350,
    },
    // ... more items
]
return(
  <Masonry
    mt-20
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover={true}
    hoverScale={0.95}
    blurToFocus={true}
    colorShiftOnHover={false}
  />




)

 };


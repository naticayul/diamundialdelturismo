
import adre from "./assets/logoadre.jpg"
import unpsjb from "./assets/unpsjb.png"
import epja7714 from "./assets/epja7714.jpg"
import cfp655 from "./assets/cfp655.png"
import asociacionhotelera from "./assets/asociacionhotelera.jpg"
import iset815 from "./assets/iset815.jpg"
import esquel from "./assets/esquel.jpg"
import trevelin from "./assets/trevelin.jpg"
import asociaciondeguias from "./assets/asociaciondeguias.jpg"
import pnlosalerces from "./assets/pnlosalerces.png"

import LogoLoop from './LogoLoop.jsx';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


const IMGS = [
  adre,
  unpsjb,
  epja7714,
  cfp655,
  asociacionhotelera,
  iset815,
  esquel,
  trevelin,
  asociaciondeguias,
  pnlosalerces,
];

// Alternative with image sources
const imageLogos = [
  { src: adre, alt: "Company 1", href: "https://www.facebook.com/SomosADRe/" },
  { src: unpsjb, alt: "Company 2", href: "https://web.sistemasfce.com.ar/wordpress/" },
  { src: epja7714, alt: "Company 3", href: "https://www.instagram.com/epja7714/" },
  { src: cfp655, alt: "Company 3", href: "https://cfp655esquel.edu.ar/cfp655/" },
  { src: asociacionhotelera, alt: "Company 3", href: "https://www.aehgcla.org.ar/" },
  { src: iset815, alt: "Company 3", href: "http://iset815esquel.edu.ar/" },
  { src: esquel, alt: "Company 3", href: "https://www.esquel.gov.ar/" },
  { src: trevelin, alt: "Company 3", href: "https://www.trevelin.gob.ar/" },
  { src: asociaciondeguias, alt: "Company 3", href: "https://www.instagram.com/guiascordillera/" },
  { src: pnlosalerces, alt: "Company 3", href: "https://www.instagram.com/pn_los_alerces/" },
];

function Organizadores() {
  return (
    <div  className="mt-70" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={128}
        gap={80}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Organizadores;

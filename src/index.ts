type Persona={
    nombre: String,
    edad: Number,
    vivo: Boolean
}

let maxi: Persona = {
    nombre: "maxi",
    edad: 32,
    vivo: true,
}

let lista: Persona [] = [
    {
        nombre: "maxi",
        edad: 32,
        vivo: true,
    },
    {
        nombre: "tomi",
        edad: 23,
        vivo: true,
    }
]

function saludar (persona: Persona) {
    console.log(persona.nombre)
}
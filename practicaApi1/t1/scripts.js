const API = 'https://swapi.dev/api/people/'

function personaje(texto, id_but) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(id_but+' '+texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
   // let img = document.createElement('img')
   // img.src = texto.image
   // div.appendChild(img)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return personaje( await response.json(), await id)
    } catch(error) {
        console.error(`[error]: ${error}`)
    }
}

for (let i=1; i<=800; i++) {
    obtener_personaje(i)
}

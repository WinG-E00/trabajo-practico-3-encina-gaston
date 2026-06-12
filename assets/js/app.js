// Api de todos los personajes https://thesimpsonsapi.com/api/characters
// Api de un personaje https://thesimpsonsapi.com/api/characters/1/

const urlDeMiApi = 'https://thesimpsonsapi.com/api/characters';
const tablaDePersonajes = document.querySelector('#tablaDePersonajes');
const buscador = document.querySelector('#buscador');

let todosLosPersonajes = []; // guardamos los personajes aca

// Funcionn que renderiza un array de personajes
const renderizarPersonajes = (personajes) => {
    tablaDePersonajes.innerHTML = ""; // limpia una sola vez

    personajes.forEach((personaje) => {
        tablaDePersonajes.insertAdjacentHTML(
            "beforeend", `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${personaje.name}</h5>
                        <p class="card-text">Edad: ${personaje.age}</p>
                        <p class="card-text">Fecha de nacimiento: ${personaje.birthdate}</p>
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Genero: ${personaje.gender}</li>
                        <li class="list-group-item">Trabajo: ${personaje.occupation}</li>
                        <li class="list-group-item">Estado ${personaje.status}</li>
                        <li class="list-group-item">Frase caracteristica ${personaje.phrases[1] ?? "Sin frase"}</li>
                    </ul>

                    <button type="button" data-bs-toggle="modal" data-bs-target="#miModal">
                        Mas informacion
                    </button>
                </div>
            </div>
            `
        );
    });
};

// Obtiene los personajes de la API (una sola vez)
const obtenerPersonaje = async () => {
    try {
        const response = await fetch(urlDeMiApi);
        const dataResponse = await response.json();
        todosLosPersonajes = dataResponse.results;

        console.log(todosLosPersonajes);

        renderizarPersonajes(todosLosPersonajes);
    }
    catch (error) {
        console.log("Error en mi promesa", error);
    }
};

obtenerPersonaje();


// Funcion para buscar personajes (sin volver a hacer fetch)
const buscarPersonajes = (textoP) => {
    const texto = textoP.toLowerCase();

    const personajesFiltrados = todosLosPersonajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(texto)
    );

    renderizarPersonajes(personajesFiltrados);
};

buscador.addEventListener('input', (event) => {
    const texto = event.target.value;
    buscarPersonajes(texto);
});


// Boton modal bootstrap
tablaDePersonajes.addEventListener('click', (event) => {
    console.log(event.target);

    if (event.target.tagName === 'BUTTON') {
        // acá podrás manejar la apertura del modal con el personaje correspondiente
    }
});








// function renderPersonajes() {
//     rowHeroContainer.innerHTML = ""; // limpia todo

//     personajes.forEach(heroe => {
//         rowHeroContainer.insertAdjacentHTML(
//             "beforeend",
//             `<div class="col tarjeta">
//                 <div class="card tarjeta" style="width: 18rem;" data-id="${heroe.id}">
//                     <img src="${heroe.imagen}" class="card-img-top" alt="${heroe.nombre}">
//                     <div class="card-body">
//                         <h5 class="card-title">${heroe.nombre}</h5>
//                     </div>
//                     <button class="btn btn-danger" id="btnEliminarPersonaje">
//                         Eliminar
//                     </button>
//                 </div>
//             </div>`
//         );
//     });
// }



// function renderPersonajes() {
//     rowHeroContainer.innerHTML = ""; // limpia todo

//     personajes.forEach(heroe => {
//         rowHeroContainer.insertAdjacentHTML(
//             "beforeend",
//             `<div class="col tarjeta">
//                 <div class="card tarjeta" style="width: 18rem;" data-id="${heroe.id}">
//                     <img src="${heroe.imagen}" class="card-img-top" alt="${heroe.nombre}">
//                     <div class="card-body">
//                         <h5 class="card-title">${heroe.nombre}</h5>
//                     </div>
//                     <button class="btn btn-danger" id="btnEliminarPersonaje">
//                         Eliminar
//                     </button>
//                 </div>
//             </div>`
//         );
//     });
// }











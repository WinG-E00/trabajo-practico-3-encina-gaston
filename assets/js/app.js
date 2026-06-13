// Api de todos los personajes https://thesimpsonsapi.com/api/characters
// Api de un personaje https://thesimpsonsapi.com/api/characters/1/

const urlDeMiApi = 'https://thesimpsonsapi.com/api/characters';
const tablaDePersonajes = document.querySelector('#tablaDePersonajes');
const buscador = document.querySelector('#buscador');
const btnVerInfo = document.querySelector('#verMasBtn');


//Modal de boostrap
const miModal = new bootstrap.Modal(document.getElementById('miModal'));


let todosLosPersonajes = []; 


// Funcionn que renderiza un array de personajes
const renderizarPersonajes = (personajes) => {
    tablaDePersonajes.innerHTML = "";

    personajes.forEach((personaje) => {
        tablaDePersonajes.insertAdjacentHTML(
            "beforeend", `
            <div class="col p-1">
                <div class="card" data-id="${personaje.id}" style="width: 18rem;">
                    <img src="https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${personaje.name}</h5>
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Ocupacion: ${personaje.occupation}</li>
                        <li class="list-group-item">Estado: ${personaje.status}</li>
                    </ul>

                    <button type="button" class="btn btn-primary verMasBtn">Ver mas</button>
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


// Funcion para buscar personajes
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




// Funcion que llena y muestra el modal
const mostrarModal = (personaje) => {
    document.getElementById('modalNombre').textContent = personaje.name;
    document.getElementById('modalBody').innerHTML = `
        <img src="https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp" class="img-fluid mb-3">
        <p>Edad: ${personaje.age}</p>
        <p>Fecha de nacimiento: ${personaje.birthdate}</p>
        <p>Genero: ${personaje.gender}</p>
        <p>Trabajo: ${personaje.occupation}</p>
        <p>Estado: ${personaje.status}</p>
        <p>Frase: ${personaje.phrases[1] ?? "Sin frase"}</p>
    `;

    miModal.show();
};




// Listener para abrir el modal con el personaje correspondiente
tablaDePersonajes.addEventListener('click', (event) => {

    if (event.target.classList.contains('verMasBtn')) {

        const card = event.target.closest('.card');
        const idPersonaje = card.dataset.id;

        const personaje = todosLosPersonajes.find(p => p.id == idPersonaje);

        if (personaje) {
            mostrarModal(personaje);
        }
    }
});















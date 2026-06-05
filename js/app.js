// Api de todos los personajes https://thesimpsonsapi.com/api/characters
// Api de un personaje https://thesimpsonsapi.com/api/characters/1/


const urlDeMiApi =  


const obtenerPersonaje = async () => { 
    try {
        const response = await fetch(urlDeMiApi);
        const dataResponse = response.json();


        return dataResponse;

    }
    catch {
        console.log("Error en mi promesa")
    }
};


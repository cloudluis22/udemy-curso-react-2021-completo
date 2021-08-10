
// API Key para tener acceso a GIPHY.
const apiKey = 'Loquz333yygJkhc6ZdVpNj9zLOM7fjZz';

// Creando la petición a través del método de fetch. Esta petición retorna una promesa.
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    // Si la petición fue aceptada, trae la información.
    .then(resp => resp.json())
    // Obtiene la información del JSON otorgado por la petición. Esto es una promesa encadenada.
    .then(({ data }) => {
        // Obtiene el URL de el GIF que viene incluído en el JSON.
        const { url } = data.images.original;

        // Creando un elemento de imagen para colocarlo en el HTML de el proyecto.
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn); // Este error atrapa a todas las promesas.
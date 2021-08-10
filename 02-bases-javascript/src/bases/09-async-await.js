
// Mismo ejercicio con async-await.
// Función declarada como asíncrona.
const getImagen = async () => {

    try {

        const apiKey = 'Loquz333yygJkhc6ZdVpNj9zLOM7fjZz';

        // Al colocar "await" se espera a que se cumpla la promesa antes de continuar a la siguiente línea de código.
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);

    } catch (error) {
        console.error(error);
    }

}

getImagen();
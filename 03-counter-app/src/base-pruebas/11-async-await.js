
export const getImagen = async() => {

    try {

        const apiKey = 'meSHw1lRdBJpJm46dnjSNYHyHwxdcTJI';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe';
    } 
    
}